const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');
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
        price,
        image1,
        image2 } = req.body

    const car = await Car.create({
        userId : user.id,
        name :name ,
        model : model,
        numberOfSeats : numberOfSeats,
        features : features,
        rules : rules,
        fuelType : fuelType,
        licensePlateNumber : licensePlateNumber,
        price : price,
    });

    const newImage1 = await Image.create({
        carId : car.id,
        imageURL : image1
    })

    const newImage2 = await Image.create({
        carId : car.id,
        imageURL : image2
    })

    let Images = [newImage1,newImage2]

    car[Images] = Images

    return res.json(car);
}))

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next){
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

router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    console.log('///////////////////////')
    const carId = req.params.id
    const {
        name,
        model,
        numberOfSeats,
        features,
        rules,
        fuelType,
        licensePlateNumber,
        price,
        image1,
        image2
    } = req.body

    const car = await Car.findByPk(carId);
    const oldImage = await Image.findAll({
        where : {
            carId: carId
        }});

    if(car && oldImage) {
        let newCar = await car.update({
            name,
            model,
            numberOfSeats,
            features,
            rules,
            fuelType,
            licensePlateNumber,
            price
        })
        let newImage1 = await oldImage[0].update({
            imageURL : image1
        })
        let newImage2 = await oldImage[1].update({
            imageURL : image2
        })

        let Images = [newImage1,newImage2]
        newCar[Images] = Images

        return res.json(newCar)
    } else {
        let error = carNotFoundError(carId);
        next(error)
    }
}))

router.delete('/:id(\\d+)', asyncHandler(async function (req,res,next){
    const carId = req.params.id
    const car = await Car.findByPk(carId)
    if(car){
        await car.destroy();
        res.status(204).end();
    } else {
        let error = carNotFoundError(carId);
        next(error)
    }
}))

module.exports = router;
