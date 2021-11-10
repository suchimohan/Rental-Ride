import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getOneCar, deleteCar} from "../../store/cars"
import {NavLink, useParams} from 'react-router-dom'
import CarImage from './CarImage';
import './CompleteCarDetails.css'
import { useHistory } from "react-router";



function CompleteCarDetails({isLoaded}){
    const sessionUser = useSelector(state => state.session.user)
    const cars = useSelector((state)=> Object.values(state.car))
    const {id} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getOneCar(id))
    },[dispatch])


    const oneCar = cars.find((car)=>+car.id === +id)


    let sessionLinks;
    if(sessionUser?.id === oneCar?.userId){
        sessionLinks = (
            <div className="edit-delete-car-buttons">
                <NavLink to={`/${id}/edit`}>
                <button type="button" className="edit-car-button">Edit</button>
                </NavLink>
                <button type = "button" className="delete-car-button" onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        )
    } else {
        sessionLinks = null
    }

    const handleDelete = (id) => {
        dispatch(deleteCar(id))
        history.push('/')
    }

    if (!oneCar) {
        return null
    }
    else {
    return (
        <div className="complete-car-details">
            <div className="twoCarDiv">
                {oneCar?.Images?.map(({id, imageURL})=>(
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
            {isLoaded && sessionLinks}
        </div>
    )
}}

export default CompleteCarDetails
