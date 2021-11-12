import { csrfFetch } from './csrf';
//action creators

const GET_CARS = 'cars/GET_CARS';
const ADD_CAR = 'cars/ADD_CAR';
const REMOVE_CAR = 'cars/REMOVE_CAR';
const EDIT_CAR = 'cars/EDIT_CAR';
const GET_CAR  = 'cars/GET_CAR';

const getCars = cars => ({
    type: GET_CARS,
    cars
})

const getCar = car => ({
    type: GET_CAR,
    car
})

const addCars = payload => ({
    type:ADD_CAR,
    payload
})

const removeCar = id => ({
    type : REMOVE_CAR,
    payload: id
})

const editOneCar = payload => ({
    type: EDIT_CAR,
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

export const getOneCar = (id) => async (dispatch) => {
    const response = await fetch(`/api/cars/${id}`);
    if (response.ok) {
        const car = await response.json();
        dispatch(getCar(car))
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
        return newCar;
      }
}

export const deleteCar = id => async (dispatch) => {
    const response = await csrfFetch(`/api/cars/${id}`, {
        method : "DELETE",
    })

    if(response.ok) {
        dispatch(removeCar(id))
    }
}

export const editCar = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/cars/${id}`,{
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    if(response.ok) {
        const newCar = await response.json();
        dispatch(editOneCar(newCar))
        return newCar
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
    case GET_CAR:{
        newState[action.car.id] = action.car;
        return newState
    }
    case ADD_CAR:{
        newState = {...state, [action.payload.id]: action.payload}
        return newState;
    }
    case REMOVE_CAR: {
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    case EDIT_CAR: {
      newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState;
    }
    default:
        return state;
    }
}
