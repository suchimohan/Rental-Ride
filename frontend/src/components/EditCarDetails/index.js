import {useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import './EditCar.css';
import {editCar} from "../../store/cars";
import ImagePreview from './ImagePreview'
import {getOneCar} from "../../store/cars"

function EditCarDetails () {


    const cars = useSelector((state)=> Object.values(state.car))
    const {id} = useParams()

    const dispatch = useDispatch();
    const history = useHistory();

    const oneCar = cars.find((car)=>+car.id === +id)

    useEffect(()=>{
        dispatch(getOneCar(id))
    },[dispatch,id])


    useEffect(()=>{
        if(oneCar){
           setName(oneCar.name)
           setModel(oneCar.model)
           setNumberOfSeats(oneCar.numberOfSeats)
           setFeatures(oneCar.features)
           setRules(oneCar.rules)
           setFuelType(oneCar.fuelType)
           setLicensePlateNumber(oneCar.licensePlateNumber)
           setPrice(oneCar.price)
           setPickup_address(oneCar.pickup_address)
           setCity(oneCar.city)
           setLatitude(oneCar.latitude)
           setLongitude(oneCar.longitude)
           setImages(oneCar.images)
        }
    },[oneCar])


    const [name,setName] = useState(oneCar?.name);
    const [model,setModel] = useState(oneCar?.model)
    const [numberOfSeats, setNumberOfSeats] = useState(oneCar?.numberOfSeats)
    const [features,setFeatures] = useState(oneCar?.features)
    const [rules,setRules] = useState(oneCar?.rules)
    const [fuelType, setFuelType] = useState(oneCar?.fuelType)
    const [licensePlateNumber,setLicensePlateNumber] = useState(oneCar?.licensePlateNumber)
    const [price,setPrice] = useState(oneCar?.price)
    const [pickup_address,setPickup_address] = useState(oneCar?.pickup_address)
    const [city, setCity] = useState(oneCar?.city)
    const [latitude, setLatitude] = useState(oneCar?.latitude)
    const [longitude, setLongitude] = useState(oneCar?.longitude)
    const [images,setImages] = useState(oneCar?.Images)
    const [newImages, setNewImages] = useState([])
    const [errors, setErrors] = useState('')
    const [deletedImgIds,setDeletedImageIds] = useState([])

    const handleCancel = (id) => {
        history.push(`/car/${id}`)
    }

    const handlePhotos = (e) => {
        const files = e.target.files;
        setNewImages(files);
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
            longitude=== ""
        ) {
            setErrors('Please fill out all fields and upload few photos of file type .jpg, .jpeg or .png')
        }
        if (newImages.length){
            for(let i=0; i<newImages.length; i++){
                    let image = newImages[i]
                    if (!image.name.match(/\.(jpg|jpeg|png)$/)){
                        setErrors('Please upload few photos of file type .jpg, .jpeg or .png ')
                    }
            }
        }
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
            deletedImgIds,
            newImages
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
                <ul className="errors">
                    {errors && (<li>{errors}</li>)}
                </ul>
                All fields are required*
                <label> Name </label>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                />
                <label> Model</label>
                <input
                value={model}
                onChange={(e)=>setModel(e.target.value)}
                required
                />
                <label> Number of Seats  </label>
                <input
                onChange={(e)=>setNumberOfSeats(e.target.value)}
                value={numberOfSeats}
                required
                type="number"
                min="1"
                max="10"
                />
                <label>Features  </label>
                <input
                onChange={(e)=>setFeatures(e.target.value)}
                value={features}
                required
                />
                <label>Rules   </label>
                <input
                onChange={(e)=>setRules(e.target.value)}
                value={rules}
                required
                />
                <label> Fuel Type </label>
                <input
                onChange={(e)=>setFuelType(e.target.value)}
                value={fuelType}
                required
                />
                <label> License Plate Number  </label>
                <input
                onChange={(e)=>setLicensePlateNumber(e.target.value)}
                value={licensePlateNumber}
                required
                />
                <label> Price   </label>
                <input
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                required
                type="number"
                min="1"
                max="1000"
                />
                <label> Pickup Address </label>
                <input
                onChange={(e)=>setPickup_address(e.target.value)}
                value={pickup_address}
                required
                />
                <label> City  </label>
                <input
                onChange={(e)=>setCity(e.target.value)}
                value={city}
                required
                />
                <label> Latitude of the Pickup Address </label>
                <input
                onChange={(e)=>setLatitude(e.target.value)}
                value={latitude}
                required
                type="number"
                step="0.000001"
                />
                <label>Longitude of the Pickup Address</label>
                <input
                onChange={(e)=>setLongitude(e.target.value)}
                value={longitude}
                required
                type="number"
                step="0.000001"
                />
                <label>Image Preview</label>
                <ImagePreview images={images} setDeletedImageIds = {setDeletedImageIds} deletedImgIds={deletedImgIds}/>
                <label>Upload Car Photos*</label>
                <input
                type="file"
                onChange={handlePhotos}
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
