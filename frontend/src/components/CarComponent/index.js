import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllCars} from "../../store/cars"
import CarDetails from '../CarDetails'
import './CarComponent.css'
import CityDiv from '../CityDiv'

const CarComponent = () => {
    const cars = useSelector((state)=> Object.values(state.car))

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[dispatch])

    return (
        <div>
            <div className="tagline">
                <span>Accelerate your entrepreneurship, start building</span>
                <span>a small car sharing business with Rental-Ride</span>
            </div>
            <CityDiv/>
            <div className="nameTag">
            FIND YOUR DRIVE
            </div>
            <div className='displayCars'>
                {cars?.map(({id,name,model,price,city,Images,User})=>(
                    <CarDetails
                        key={id}
                        id={id}
                        name={name}
                        model={model}
                        price={price}
                        image={Images}
                        user={User}
                        city={city}
                    />
                ))}
            </div>
        </div>
    )

}

export default CarComponent;
