import {useState} from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router";
import {addOneCar} from "../../store/cars"

const CreateCar = () =>{
    const [name,setName] = useState('Toyota');
    const [model,setModel] = useState('Prius 2015')
    const [numberOfSeats, setNumberOfSeats] = useState('5')
    const [features,setFeatures] = useState('Child Seat')
    const [rules,setRules] = useState('No Smoking')
    const [fuelType, setFuelType] = useState('Hybrid')
    const [licensePlateNumber,setLicensePlateNumber] = useState('PSL123')
    const [price,setPrice] = useState('60')

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
        <div className='add-car'>
            <h2>List your car details</h2>
            <form onSubmit={handleSubmit} className='add-car'>
                <input
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder='Car Name'
                />
                <input
                onChange={(e)=>setModel(e.target.value)}
                value={model}
                placeholder='Car Model'
                />
                <input
                onChange={(e)=>setNumberOfSeats(e.target.value)}
                value={numberOfSeats}
                placeholder='Number of Seats'
                />
                <input
                onChange={(e)=>setFeatures(e.target.value)}
                value={features}
                placeholder="Features"
                />
                <input
                onChange={(e)=>setRules(e.target.value)}
                value={rules}
                placeholder="Rules"
                />
                <input
                onChange={(e)=>setFuelType(e.target.value)}
                value={fuelType}
                placeholder="Fuel Type"
                />
                <input
                onChange={(e)=>setLicensePlateNumber(e.target.value)}
                value={licensePlateNumber}
                placeholder= "License Plate Number"
                />
                <input
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                placeholder= "Price Per Hour"
                />
                <button className='submit-button' type='submit'>
                    Publish
                </button>
            </form>
        </div>
    )

}

export default CreateCar;
