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
            <div className='displayCars'>
                {cars?.map(({id,name,model,price,Images})=>(
                    <CarDetails
                        key={id}
                        name={name}
                        model={model}
                        price={price}
                        image={Images}
                    />
                ))}
            </div>
        </div>
    )

}

export default CarComponent;