import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllCars, deleteCar} from "../../store/cars"
import {useParams} from 'react-router-dom'
import CarImage from './CarImage';
import './CompleteCarDetails.css'

function CompleteCarDetails(){
    const cars = useSelector((state)=> Object.values(state.car))
    const {id} = useParams()
    const dispatch = useDispatch();

    const oneCar = cars.find((car)=>+car.id === +id)
    // console.log(oneCar.Images)

    const handleDelete = (id) => {
        dispatch(deleteCar(id))
    }

    useEffect(()=>{
        dispatch(getAllCars())
    },[dispatch])

    if (!oneCar) {
        return null
    }
    else {
    return (
        <div className="complete-car-details">
            <div className="twoCarDiv">
                {oneCar?.Images.map(({id, imageURL})=>(
                    <CarImage
                        key={id}
                        url={imageURL}
                    />
                ))}
            </div>
            <div className="display-details">
                <h2 className=''>{oneCar.name}{oneCar.model}</h2>
                <span>Fuel Type : {oneCar.fuelType}</span>
                <span>Number of Seats : {oneCar.numberOfSeats}</span>
                <span>Features : {oneCar.features}</span>
                <span>Rules: {oneCar.rules}</span>
                <span>Price: ${oneCar.price}/ day</span>
            </div>
            <div className="edit-delete-car-buttons">
                <button type = "button" className="edit-car-button">Edit</button>
                <button type = "button" className="delete-car-button" onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}}

export default CompleteCarDetails
