const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Car, Image, Address, Review } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

router.get('/',asyncHandler(async function(req,res){
    const reviews = await Review.findAll({
        include: [{model: User}]
    })
    return res.json(reviews);
}))

module.exports = router;
