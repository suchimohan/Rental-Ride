import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import './EditReviewsForm.css';
import {useParams} from 'react-router-dom';
import {editingReviews} from '../../store/reviews'
import { getAllReviews } from '../../store/reviews';

const EditReviewsForm = () => {

    const reviews = useSelector((state)=>Object.values(state.review))

    const {reviewId} = useParams()
    const {id} = useParams()

    const dispatch = useDispatch();
    const history = useHistory();

    const oneReview = reviews.find((review)=>+review.id === +reviewId)

    useEffect(()=>{
        dispatch(getAllReviews(id))
    },[dispatch,id])

    const carId = id

    useEffect(()=>{
        if(oneReview){
            setContent(oneReview.content)
        }
    },[oneReview])

    const [content, setContent] = useState(oneReview?.content)

    const handleCancel = (carId) => {
        history.push(`/car/${carId}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            content
        }
        await dispatch(editingReviews(payload,reviewId))
        history.push(`/car/${carId}`)
    }

    if(!oneReview){
        return null
    } else {
    return (
        <div className="edit_review">
            <h2>Edit your review about the car</h2>
            <form  className="editReviewForm" onSubmit={handleSubmit}>
                <textarea placeholder="Type..." required value={content} onChange={(e)=>setContent(e.target.value)} />
                <button className='editReview_submit_button' type='submit'>Submit</button>
                <button className='editReview_submit_button' type='submit' onClick={()=>{handleCancel(carId)}}>Cancel</button>
            </form>
        </div>
    )
}}



export default EditReviewsForm;
