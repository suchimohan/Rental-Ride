const SEARCH_CAR = 'search/SEARCH_CAR'

export const searchCar = (cars) => ({
    type: SEARCH_CAR,
    cars
})

export const search = (text) => async(dispatch) => {
    const response = await fetch(`/api/cars/search?city=${text}`)
    if (response.ok) {
        const searchResults = await response.json();
        dispatch(searchCar(searchResults))
        return searchResults
    }
}

export const searchReducer = (state={}, action) => {
    switch(action.type){
        case SEARCH_CAR:{
            const newState = {}
            action.cars.forEach(car=>{
                newState[car.id] = car
            })
            return newState
        }
        default:
            return state
    }
}
