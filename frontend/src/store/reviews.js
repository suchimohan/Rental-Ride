import { csrfFetch } from './csrf';

//action creators

const GET_REVIEWS = 'reviews/GET_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW'


const getReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})

const addReview = payload => ({
    type: ADD_REVIEW,
    payload
})


//thunks

export const getAllReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(getReviews(reviews))
    }
}

export const addOneReview = (payload,id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload,id)
    })
    if(response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview))
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
        default:
        return state;
    }
}
