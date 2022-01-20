import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllCars} from "../../store/cars"
import CarDetails from '../CarDetails'
import './CarComponent.css'

const CarComponent = () => {
    const cars = useSelector((state)=> Object.values(state.car))

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[dispatch])

    return (
        <div>
            <div className="nameTag">
             FIND YOUR PERFECT RIDE
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
