import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteReview } from '../../store/reviews';
import {NavLink} from 'react-router-dom'

function Reviews({reviewId,carId,content,user}){

    const sessionUser = useSelector(state=>state.session.user)

    const dispatch = useDispatch()
    const history = useHistory()

    let sessionLinks;
    if(sessionUser?.id === user?.id) {
        sessionLinks = (
            <div className="edit_delete_review_buttons">
                <NavLink to={`/${carId}/review/${reviewId}/edit`}>
                    <button type="button" className="edit_review_button">Edit Review</button>
                </NavLink>
                <button type = "button"
                className="delete_review_button"
                onClick={()=>handleDeleteReview(reviewId,carId)}>
                 Delete Review
                 </button>
            </div>
        )
    } else {
        sessionLinks = null
    }

    const handleDeleteReview = (reviewId,carId) => {
        dispatch(deleteReview(reviewId));
        history.push(`/car/${carId}`)
    }

    if(!user && !content){
        return null
    } else {
    return(
        <div className="review_div">
            <div className="user_profile_div">
                <img className="profilePhoto" src={user?.profilePhotoURL} alt="user" />
                <h3>{user?.username}</h3>
            </div>
            <p>{content}</p>
            <div>{sessionLinks}</div>
        </div>
    )
}}

export default Reviews
