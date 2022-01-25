const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const {
  singleMulterUpload,
  singlePublicFileUpload,
} = require("../../awsS3");

// Validating Signup Request Body Middleware
const validateSignup = [
    check('email')
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a valid username'),
    check('username')
      .isLength({ min: 4 })
      .withMessage('Please provide a username with min 4 & max 30 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
      .withMessage('Password must contain at least 1 lowercase letter, 1 uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    handleValidationErrors,
];


// Sign up
router.post('/', singleMulterUpload("image"), validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username, city } = req.body;
    const profilePhotoURL = await singlePublicFileUpload(req.file);
    const user = await User.signup({ email, username, password, city, profilePhotoURL });

    await setTokenCookie(res, user);

    return res.json({user});
    }),
);


module.exports = router;
