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
                <div>Accelerate your entrepreneurship</div>
                <div>Start building a small car sharing business with</div>
                <div>Rental-Ride</div>
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
