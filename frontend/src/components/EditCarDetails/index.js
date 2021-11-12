import {useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom'
import React, {useState} from 'react'
import './EditCar.css';
import {editCar} from "../../store/cars";

function EditCarDetails () {


    const cars = useSelector((state)=> Object.values(state.car))
    const {id} = useParams()

    const oneCar = cars.find((car)=>+car.id === +id)

    const [name,setName] = useState(oneCar.name);
    const [model,setModel] = useState(oneCar.model)
    const [numberOfSeats, setNumberOfSeats] = useState(oneCar.numberOfSeats)
    const [features,setFeatures] = useState(oneCar.features)
    const [rules,setRules] = useState(oneCar.rules)
    const [fuelType, setFuelType] = useState(oneCar.fuelType)
    const [licensePlateNumber,setLicensePlateNumber] = useState(oneCar.licensePlateNumber)
    const [price,setPrice] = useState(oneCar.price)
    const [image1, setImage1] = useState(oneCar.image1)
    const [image2, setImage2] = useState(oneCar.image2)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCancel = (id) => {
        history.push(`/car/${id}`)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            model,
            numberOfSeats,
            features,
            rules,
            fuelType,
            licensePlateNumber,
            price,
            image1,
            image2
        }
    await dispatch(editCar(payload, id));
    history.push(`/car/${id}`)
    }

    if (!oneCar) {
        return null
    } else {
    return (
        <div className='edit-Car-Div'>
            <h2>Edit your car details</h2>
            <form onSubmit={handleSubmit} className='edit-car'>
                <label> Name
                    <input
                    defaultValue={oneCar.name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />
                </label>
                <label> Model
                    <input
                    defaultValue={oneCar.model}
                    onChange={(e)=>setModel(e.target.value)}
                    required
                    />
                </label>
                <label> Number of Seats
                    <input
                    onChange={(e)=>setNumberOfSeats(e.target.value)}
                    defaultValue={oneCar.numberOfSeats}
                    required
                    type="number"
                    min="1"
                    max="10"
                    />
                </label>
                <label>Features
                    <input
                    onChange={(e)=>setFeatures(e.target.value)}
                    defaultValue={oneCar.features}
                    required
                    />
                </label>
                <label>Rules
                    <input
                    onChange={(e)=>setRules(e.target.value)}
                    defaultValue={oneCar.rules}
                    required
                    />
                </label>
                <label> Fuel Type
                    <input
                    onChange={(e)=>setFuelType(e.target.value)}
                    defaultValue={oneCar.fuelType}
                    required
                    />
                </label>
                <label> License Plate Number
                    <input
                    onChange={(e)=>setLicensePlateNumber(e.target.value)}
                    defaultValue={oneCar.licensePlateNumber}
                    required
                    />
                </label>
                <label> Price
                    <input
                    onChange={(e)=>setPrice(e.target.value)}
                    defaultValue={oneCar.price}
                    required
                    type="number"
                    min="1"
                    max="1000"
                    />
                </label>
                <label> Image URL 1
                    <input
                    onChange={(e)=>setImage1(e.target.value)}
                    defaultValue={oneCar.Images[0].imageURL}
                    required
                    type="url"
                    />
                </label>
                <label> Image URL 2
                    <input
                    onChange={(e)=>setImage2(e.target.value)}
                    defaultValue={oneCar.Images[1].imageURL}
                    required
                    type="url"
                    />
                </label>
                <button className='submit-button' type='submit'>
                    Publish
                </button>
                <button className='submit-button' type='submit' onClick={()=>{handleCancel(id)}}>
                    Cancel
                </button>
            </form>
        </div>
    )
}
}

export default EditCarDetails;
