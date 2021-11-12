const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Car, Image, Address, Review } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { restoreUser } = require('../../utils/auth');

function reviewNotFoundError (){
    const err = new Error(`No reviews found`);
    err.title = "Review not found."
    err.status = 404;
    return err
}

router.get('/car/:carId(\\d+)',asyncHandler(async function(req,res,next){
    const carId = req.params.carId
    const reviews = await Review.findAll({
        where : {
            carId : carId
        },
        include: [{model: User}]
    })

    if(reviews) {
    return res.json(reviews);
    } else {
        let error = reviewNotFoundError();
        next(error)
    }
}))

router.post('/',handleValidationErrors,restoreUser,asyncHandler(async function(req,res){
    const {user} = req;
    const {
        content,
        carId
    } = req.body
    const review = await Review.create({
        userId : user.id,
        carId : carId,
        content : content,
    })


    const newReview = await Review.findAll({
        where : {
            id : review.id
        },
        include : [{model:User}]
    })

    return res.json(newReview[0]);
}))

router.put('/:id(\\d+)',asyncHandler(async (req,res,next) => {
    const reviewId = req.params.id
    const {
        content
    } = req.body
    const review = await Review.findByPk(reviewId)
    if(review) {
        await review.update({
            content : content
        })

        const newReview = await Review.findAll({
            where : {
                id : reviewId
            },
            include : [{model:User}]
        })

        return res.json(newReview[0])

    } else {
        let error = reviewNotFoundError();
        next(error)
    }
}))

router.delete('/:id(\\d+)', asyncHandler(async function (req,res,next){
    const reviewId = req.params.id
    const review = await Review.findByPk(reviewId)
    if(review){
        await review.destroy();
        res.status(204).end();
    } else {
        let error = reviewNotFoundError();
        next(error)
    }
}))

module.exports = router;
