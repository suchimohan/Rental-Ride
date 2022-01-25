import {useState} from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router";
import {addOneCar} from "../../store/cars";
import './CreateCar.css'

const CreateCar = () =>{
    const [name,setName] = useState('');
    const [model,setModel] = useState('')
    const [numberOfSeats, setNumberOfSeats] = useState('')
    const [features,setFeatures] = useState('')
    const [rules,setRules] = useState('')
    const [fuelType, setFuelType] = useState('')
    const [licensePlateNumber,setLicensePlateNumber] = useState('')
    const [price,setPrice] = useState('')
    const [pickup_address,setPickup_address] = useState('')
    const [city, setCity] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [images,setImages] = useState([])
    const [errors, setErrors] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCancel = () => {
        history.push('/')
    }

    const handlePhotos = (e) => {
        const files = e.target.files;
        setImages(files);
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
    if(images.length){
        for(let i=0; i<images.length; i++){
                let image = images[i]
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
            images
        }

    let createdCar = await dispatch(addOneCar(payload));
    if (createdCar) {
    history.push(`/car/${createdCar.id}`);
    }
}


    return (
        <div className='add-Car-Div'>
            <h2>List your car details</h2>
            <form onSubmit={handleSubmit} className='add-car'>
                <ul className="errors">
                    {errors && (<li>{errors}</li>)}
                </ul>
                All fields are required*
                <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder='Enter Car Name*'
                required
                />
                <input
                onChange={(e)=>setModel(e.target.value)}
                value={model}
                placeholder='Enter Car Model*'
                required
                />
                <input
                onChange={(e)=>setNumberOfSeats(e.target.value)}
                value={numberOfSeats}
                placeholder='Enter Number of Seats*'
                required
                type="number"
                min = "1"
                max = "10"
                />
                <input
                onChange={(e)=>setFeatures(e.target.value)}
                value={features}
                placeholder="Enter Features*"
                required
                />
                <input
                onChange={(e)=>setRules(e.target.value)}
                value={rules}
                placeholder="Enter Rules*"
                required
                />
                <input
                onChange={(e)=>setFuelType(e.target.value)}
                value={fuelType}
                placeholder="Enter Fuel Type*"
                required
                />
                <input
                onChange={(e)=>setLicensePlateNumber(e.target.value)}
                value={licensePlateNumber}
                placeholder= "Enter License Plate Number*"
                required
                />
                <input
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                placeholder= "Enter Price Per Hour*"
                required
                type="number"
                min = "1"
                max = "1000"
                />
                <input
                onChange={(e)=>setPickup_address(e.target.value)}
                value={pickup_address}
                placeholder= "Enter Car Pickup Address*"
                required
                />
                <input
                onChange={(e)=>setCity(e.target.value)}
                value={city}
                placeholder= "Enter City*"
                required
                />
                <input
                onChange={(e)=>setLatitude(e.target.value)}
                value={latitude}
                placeholder= "Enter Latitude of the Pickup Address*"
                required
                type="number"
                step="0.000001"
                />
                 <input
                onChange={(e)=>setLongitude(e.target.value)}
                value={longitude}
                placeholder= "Enter Longitude of the Pickup Address*"
                required
                type="number"
                step="0.000001"
                />
                <label>Upload Car Photos*</label>
                <input
                type="file"
                onChange={handlePhotos}
                multiple
                required
                />
                <button className='submit-button' type='submit'>
                    Publish
                </button>
                <button className='submit-button' type='submit' onClick={()=>{handleCancel()}}>
                    Cancel
                </button>
            </form>
        </div>
    )

}

export default CreateCar;
