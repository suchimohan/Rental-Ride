function CarImage({url}){
    if(!url) {
        return null
    } else {
    return(
        <img src={url} alt=""></img>
    )
}}

export default CarImage
