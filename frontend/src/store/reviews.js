import { csrfFetch } from './csrf';

//action creators

const GET_REVIEWS = 'reviews/GET_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'


const getReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})

const addReview = payload => ({
    type: ADD_REVIEW,
    payload
})

const editReview = payload => ({
    type:EDIT_REVIEW,
    payload
})

const removeReview = reviewId => ({
    type : REMOVE_REVIEW,
    reviewId
})
//thunks

export const getAllReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(getReviews(reviews))
    }
}

export const addOneReview = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview))
    }
}

export const editingReviews = (payload,reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newReview = await response.json();
        dispatch(editReview(newReview))
    }
}

export const deleteReview = reviewId => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if(response.ok){
        dispatch(removeReview(reviewId))
    }
}

// reducer

export const reviewReducer = (state={},action) => {
    let newState = {}
    switch(action.type){
        case GET_REVIEWS:{
            action.reviews.forEach(review => {
                newState[review.id] = review
            });
            return newState;
        }
        case ADD_REVIEW:{
            newState = {...state, [action.payload.id]: action.payload}
            return newState;
        }
        case EDIT_REVIEW: {
            newState = {...state};
            newState[action.payload.id] = action.payload
            return newState
        }
        case REMOVE_REVIEW: {
            newState = {...state};
            delete newState[action.reviewId];
            return newState;
        }
        default:
        return state;
    }
}
