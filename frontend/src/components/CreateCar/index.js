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


    const dispatch = useDispatch();
    const history = useHistory();

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
            price
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
                <button className='submit-button' type='submit'>
                    Publish
                </button>
            </form>
        </div>
    )

}

export default CreateCar;