const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Car, Image, Address } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');



router.get('/',asyncHandler(async function(req,res){
    const cars = await Car.findAll({
        include: [{model: Image}]
    })
    return res.json(cars);
}))

router.post('/',handleValidationErrors,restoreUser, asyncHandler(async function(req,res){

    const { user } = req;
    const {
        name,
        model,
        numberOfSeats,
        features,
        rules,
        fuelType,
        licensePlateNumber,
        price } = req.body

    const car = await Car.create({
        userId : user.id,
        name,
        model,
        numberOfSeats,
        features,
        rules,
        fuelType,
        licensePlateNumber,
        price
    });
    return res.json(car);
}))

module.exports = router;
