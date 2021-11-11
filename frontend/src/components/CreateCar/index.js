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
    const [image1,setImage1] = useState('')
    const [image2,setImage2] = useState('')


    const dispatch = useDispatch();
    const history = useHistory();

    const handleCancel = () => {
        history.push('/')
    }

    const handleSubmit = (e) => {
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
    dispatch(addOneCar(payload));
    history.push('/')
    }

    return (
        <div className='add-Car-Div'>
            <h2>List your car details</h2>
            <form onSubmit={handleSubmit} className='add-car'>
                <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder='Car Name'
                required
                />
                <input
                onChange={(e)=>setModel(e.target.value)}
                value={model}
                placeholder='Car Model'
                required
                />
                <input
                onChange={(e)=>setNumberOfSeats(e.target.value)}
                value={numberOfSeats}
                placeholder='Number of Seats'
                required
                />
                <input
                onChange={(e)=>setFeatures(e.target.value)}
                value={features}
                placeholder="Features"
                required
                />
                <input
                onChange={(e)=>setRules(e.target.value)}
                value={rules}
                placeholder="Rules"
                required
                />
                <input
                onChange={(e)=>setFuelType(e.target.value)}
                value={fuelType}
                placeholder="Fuel Type"
                required
                />
                <input
                onChange={(e)=>setLicensePlateNumber(e.target.value)}
                value={licensePlateNumber}
                placeholder= "License Plate Number"
                required
                />
                <input
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                placeholder= "Price Per Hour"
                required
                />
                <input
                onChange={(e)=>setImage1(e.target.value)}
                value={image1}
                placeholder= "Car Image URL"
                required
                />
                <input
                onChange={(e)=>setImage2(e.target.value)}
                value={image2}
                placeholder= "Car Image URL"
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
