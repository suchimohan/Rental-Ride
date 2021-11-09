const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Car, Image, Address } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


function carNotFoundError (carId){
    const err = new Error(`A car of the given ID ${carId} could not be found`);
    err.title = "Car not found."
    err.status = 404;
    return err
}

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

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next){
    console.log('//////////////////////')
    const carId = req.params.id
    const car = await Car.findAll({
        where: {
            id : carId
        },
        include: [{model: Image}]
    })
    if(car) {
        return res.json(car);
    } else {
        let error = carNotFoundError(carId);
        next(error)
    }
}))

module.exports = router;
