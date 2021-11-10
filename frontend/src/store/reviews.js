// import { csrfFetch } from './csrf';

//action creators

const GET_REVIEWS = 'reviews/GET_REVIEWS';


const getReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})


//thunks

export const getAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    if(response.ok) {
        const reviews = await response.json();
        dispatch(getReviews(reviews))
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
        default:
        return state;
    }
}
