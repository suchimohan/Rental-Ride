import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getOneCar, deleteCar} from "../../store/cars"
import { getAllReviews } from '../../store/reviews';
import {NavLink, useParams} from 'react-router-dom'
import CarImage from './CarImage';
import './CompleteCarDetails.css'
import { useHistory } from "react-router";
import Reviews from './Reviews';



function CompleteCarDetails(){
    const sessionUser = useSelector(state => state.session.user)
    const cars = useSelector((state)=> Object.values(state.car))
    const {id} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getOneCar(id))
        dispatch(getAllReviews(id))
    },[dispatch,id])

    const reviews = useSelector((state)=>Object.values(state.review))

    const oneCar = cars.find((car)=>+car.id === +id)


    let sessionLinks;
    if(sessionUser?.id === oneCar?.userId){
        sessionLinks = (
            <div className="edit_delete_car_buttons">
                <NavLink to={`/${id}/edit`}>
                <button type="button" className="edit_car_button">Edit Car Details</button>
                </NavLink>
                <button type = "button" className="delete_car_button" onClick={()=>handleDelete(id)}>Delete Car</button>
            </div>
        )
    } else {
        sessionLinks = null
    }

    let addReview;
    if(sessionUser){
    addReview =  (
            <NavLink to={`/${id}/review`}>
                <button type="button" className="add_review_button">Add Review</button>
            </NavLink>
        )
    } else {
        addReview = null
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
        <div className="complete_car_details">
            <div className="twoCarDiv">
                {oneCar?.Images?.map(({id, imageURL})=>(
                    <CarImage
                        key={id}
                        url={imageURL}
                    />
                ))}
            </div>
            <div className="car_user_div">
                <img className="profilePhoto" src={oneCar?.User?.profilePhotoURL} alt="" />
                <div className="car_user_name">
                    <span className="hostName">Hosted By {oneCar?.User?.username}</span>
                    <span className="hostName">{oneCar?.User?.city}</span>
                </div>
            </div>
            <div className="displayDetails">
                <span className="big_car_title">{oneCar.name}{oneCar.model}</span>
                <span className="other_titles">Fuel Type : {oneCar.fuelType}</span>
                <span className="other_titles">Number of Seats : {oneCar.numberOfSeats}</span>
                <span className="other_titles">Features : {oneCar.features}</span>
                <span className="other_titles">Rules: {oneCar.rules}</span>
                <span className="other_titles">Price: ${oneCar.price}/ day</span>
            </div>
            {sessionLinks}
            <div className="display_reviews">
                <h2>Reviews</h2>
                {addReview}
                <div className="review_render_div">
                {reviews?.map(({id,carId,content,User})=>(
                    <Reviews
                        key={id}
                        reviewId={id}
                        carId = {carId}
                        content={content}
                        user ={User}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}}

export default CompleteCarDetails
