import {useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom'
import React, {useState} from 'react'
import './EditCar.css';
import {editCar} from "../../store/cars";
import ImagePreview from './ImagePreview'

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
    const [pickup_address,setPickup_address] = useState(oneCar.pickup_address)
    const [city, setCity] = useState(oneCar.city)
    const [latitude, setLatitude] = useState(oneCar.latitude)
    const [longitude, setLongitude] = useState(oneCar.longitude)
    const [images,setImages] = useState(oneCar.Images)
    const [errors, setErrors] = useState('')
    const [deletedImgIds,setDeletedImageIds] = useState([])

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCancel = (id) => {
        history.push(`/car/${id}`)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            name=== "" ||
            model=== "" ||
            numberOfSeats=== "" ||
            features=== "" ||
            rules=== "" ||
            fuelType=== "" ||
            licensePlateNumber=== "" ||
            price=== "" ||
            pickup_address=== "" ||
            city=== "" ||
            latitude=== "" ||
            longitude=== "" ||
            images.length === 0
        ) {
            setErrors('Please fill out all fields and upload few photos of file type .jpg, .jpeg or .png')
        }
        else {
        const payload = {
            name,
            model,
            numberOfSeats,
            features,
            rules,
            fuelType,
            licensePlateNumber,
            price,
            pickup_address,
            city,
            latitude,
            longitude,
            // images
        }
    await dispatch(editCar(payload, id));
    history.push(`/car/${id}`)
    }
    }

    if (!oneCar) {
        return null
    } else {
    return (
        <div className='edit-Car-Div'>
            <h2>Edit your car details</h2>
            <form onSubmit={handleSubmit} className='edit-car'>
                <label> Name </label>
                <input
                defaultValue={name}
                onChange={(e)=>setName(e.target.value)}
                required
                />
                <label> Model</label>
                <input
                defaultValue={model}
                onChange={(e)=>setModel(e.target.value)}
                required
                />
                <label> Number of Seats  </label>
                <input
                onChange={(e)=>setNumberOfSeats(e.target.value)}
                defaultValue={numberOfSeats}
                required
                type="number"
                min="1"
                max="10"
                />
                <label>Features  </label>
                <input
                onChange={(e)=>setFeatures(e.target.value)}
                defaultValue={features}
                required
                />
                <label>Rules   </label>
                <input
                onChange={(e)=>setRules(e.target.value)}
                defaultValue={rules}
                required
                />
                <label> Fuel Type </label>
                <input
                onChange={(e)=>setFuelType(e.target.value)}
                defaultValue={fuelType}
                required
                />
                <label> License Plate Number  </label>
                <input
                onChange={(e)=>setLicensePlateNumber(e.target.value)}
                defaultValue={licensePlateNumber}
                required
                />
                <label> Price   </label>
                <input
                onChange={(e)=>setPrice(e.target.value)}
                defaultValue={price}
                required
                type="number"
                min="1"
                max="1000"
                />
                <label> Pickup Address </label>
                <input
                onChange={(e)=>setPickup_address(e.target.value)}
                defaultValue={pickup_address}
                required
                />
                <label> City  </label>
                <input
                onChange={(e)=>setCity(e.target.value)}
                defaultValue={city}
                required
                />
                <label> Latitude of the Pickup Address </label>
                <input
                onChange={(e)=>setLatitude(e.target.value)}
                defaultValue={latitude}
                required
                type="number"
                step="0.000001"
                />
                <label>Longitude of the Pickup Address</label>
                <input
                onChange={(e)=>setLongitude(e.target.value)}
                defaultValue={longitude}
                required
                type="number"
                step="0.000001"
                />
                <label>Image Preview</label>
                <ImagePreview images={images} deletedImgIds = {deletedImgIds}/>
                <label>Upload Car Photos*</label>
                <input
                type="file"
                // onChange={handlePhotos}
                multiple
                />
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
