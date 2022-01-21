import './CarDetails.css'
import { NavLink } from 'react-router-dom';

const CarDetails = ({id,name,model,price,image,user,city}) => {

    let image1 = ""
    if(image){
        image1 = image[0]?.imageURL
    }

    return (
      <div className='car-detail'>
        <img className= 'carImage' src={image1} alt=""/>
        <span className='car-title'>{name}{model}</span>
        <span className='car-title'>{city}</span>
        <span className='car-title'>${price}/ day</span>
        <div className="viewNav">
          <NavLink to={`/car/${id}`}>View Details</NavLink>
        </div>
      </div>
    );
  };
  export default CarDetails;
