import './CarDetails.css'
import { NavLink } from 'react-router-dom';

const CarDetails = ({id,name,model,price,image}) => {

    let image1 = ""
    if(image){
        image1 = image[0].imageURL
    }

    return (
      <div className='car-detail'>
        <img className= 'carImage' src={image1} alt={name} />
        <span className='car-title'>{name}{model}</span>
        <span>${price}/ day</span>
        <NavLink to={`/car/${id}`}>View Details</NavLink>
      </div>
    );
  };
  export default CarDetails;
