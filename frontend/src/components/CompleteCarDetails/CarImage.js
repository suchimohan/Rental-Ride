import Carousel from 'react-elastic-carousel';

function CarImage({images}){
    if(!images) {
        return null
    } else {
    return(
        <Carousel>
            {images.map(image =>
            <img key ={`imageItem-${image.id}`} src={image.imageURL} alt="" />
            )}
        </Carousel>
    )
}}

export default CarImage
