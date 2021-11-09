import { csrfFetch } from './csrf';
//action creators

const GET_CARS = 'cars/GET_CARS';
const ADD_CAR = 'cars/ADD_CAR;'


const getCars = cars => ({
    type: GET_CARS,
    cars
})

const addCars = payload => ({
    type:ADD_CAR,
    payload
})

// thunks

export const getAllCars = () => async (dispatch) => {
    const response = await fetch('/api/cars');
    if (response.ok) {
        const cars = await response.json();
        dispatch(getCars(cars))
    }
}

export const addOneCar = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/cars',{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newCar = await response.json();
        dispatch(addCars(newCar))
      }
}

// reducer

export const carReducer = (state={},action)=>{
    let newState = {}
    switch(action.type){
    case GET_CARS:{
        action.cars.forEach(car=>{
            newState[car.id] = car
        })
        return newState;
    }
    case ADD_CAR:{
        newState = {...state, [action.payload.id]: action.payload}
        return newState;
    }
    default:
        return state;
    }
}
