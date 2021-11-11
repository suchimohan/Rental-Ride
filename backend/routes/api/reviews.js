const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Car, Image, Address, Review } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

function reviewNotFoundError (carId){
    const err = new Error(`No reviews found for given carId ${carId}`);
    err.title = "Review not found."
    err.status = 404;
    return err
}

router.get('/:id(\\d+)',asyncHandler(async function(req,res,next){
    const carId = req.params.id
    const reviews = await Review.findAll({
        where : {
            carId : carId
        },
        include: [{model: User}]
    })
    if(reviews) {
    return res.json(reviews);
    } else {
        let error = reviewNotFoundError(carId);
        next(error)
    }
}))

router.post('/',handleValidationErrors,restoreUser,asyncHandler(async function(req,res){
    const {user} = req;
    const {
        content,
        id
    } = req.body
    const review = await Review.create({
        userId : user.id,
        carId : id,
        content : content
    })

    return res.json(review);
}))

module.exports = router;
