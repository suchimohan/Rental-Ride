const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');
const { User, Car, Image, Address, Review } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");

const {
    multiplePublicFileUpload,
    multipleMulterUpload
  } = require("../../awsS3");


function carNotFoundError (carId){
    const err = new Error(`A car of the given ID ${carId} could not be found`);
    err.title = "Car not found."
    err.status = 404;
    return err
}

async function getCarDetails (carId) {
    const car = await Car.findAll({
        where: {
            id : carId
        },
        include: [{model: User},
                 {model:Image}]
    })

    return car[0]
}

router.get('/',asyncHandler(async function(req,res){
    const cars = await Car.findAll({
        include: [{model: Image},
                  {model: User}]
    })
    return res.json(cars);
}))

router.post('/',multipleMulterUpload("images"), handleValidationErrors,restoreUser, asyncHandler(async function(req,res){
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
        pickup_address,
        city,
        latitude,
        longitude,
         } = req.body

    const profileImageUrls = await multiplePublicFileUpload(req.files)

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
        pickup_address: pickup_address,
        city: city,
        latitude: latitude,
        longitude: longitude,
    });

    for(let i=0; i<profileImageUrls.length; i++){
    const newImage = await Image.create({
        carId : car.id,
        imageURL : profileImageUrls[i]
    })}

    let newCar = await getCarDetails(car.id)

    return res.json(newCar);
}))

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next){
    const carId = req.params.id
    const car = await getCarDetails(carId)
    if(car) {
        return res.json(car);
    } else {
        let error = carNotFoundError(carId);
        next(error)
    }
}))

router.put('/:id(\\d+)',multipleMulterUpload("newImages"),handleValidationErrors, asyncHandler(async (req, res, next) => {
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
        pickup_address,
        city,
        latitude,
        longitude,
        deletedImgIds
    } = req.body

    const carImageUrls = await multiplePublicFileUpload(req.files)

    const car = await Car.findByPk(carId);

    if(car) {
        let newCar = await car.update({
            name,
            model,
            numberOfSeats,
            features,
            rules,
            fuelType,
            licensePlateNumber,
            price,
            pickup_address,
            city,
            latitude,
            longitude,
        })

        if(deletedImgIds && deletedImgIds.length !==0) {
            for(let i=0;i<deletedImgIds.length;i++){
                const image = await Image.findByPk(deletedImgIds[i])
                if(image){
                    await image.destroy();
                }
            }
        }

        if(carImageUrls && carImageUrls.length !== 0) {
            for(let i=0; i<carImageUrls.length; i++){
                const newImage = await Image.create({
                    carId : car.id,
                    imageURL : carImageUrls[i]
            })}
        }

        const updatedCar = await getCarDetails(carId)
        return res.json(updatedCar)
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

router.get("/search", asyncHandler(async (req, res, next) =>{
    const cityName = req.query.city;
    const car = await Car.findAll({
        where: {
          city: {[Op.iLike]: `${cityName}`},
        },
        include: [{model: Image}]
    })
    return res.json(car);
}));

module.exports = router;
