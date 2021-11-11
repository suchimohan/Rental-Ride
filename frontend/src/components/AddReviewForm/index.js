import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom'
import './AddReviewForm.css'
import {addOneReview} from "../../store/reviews"

const AddReviewForm = () => {

    const {id} = useParams()

    const [content,setContent] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCancel = (id) => {
        history.push(`/car/${id}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            content : content,
            carId : id
        }
       await dispatch(addOneReview(payload));
        history.push(`/car/${id}`)
    }

    return (
        <div className="add_review">
            <h2>Add your review about the car</h2>
            <form onSubmit={handleSubmit} className="addReviewForm">
                <textarea placeholder="Type..." required value={content} onChange={(e)=>setContent(e.target.value)} />
                <button className='edit_submit_button' type='submit'>Submit</button>
                <button className='edit_submit_button' type='submit' onClick={()=>{handleCancel(id)}}>Cancel</button>
            </form>
        </div>
    )
}

export default AddReviewForm
