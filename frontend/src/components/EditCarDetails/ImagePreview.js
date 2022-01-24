import React, {useState} from 'react'

const ImagePreview = ({images,deletedImgIds}) => {

const [show,setShow] = useState(true)

const removeImage = (id,e) => {
    deletedImgIds.push(id)
    console.log(deletedImgIds)
    setShow(false)
}
    return (
        <div className="images-preview-container">
            {images.map((ele) => (
                <div className="image-preview-box" key={`imagepreview-${ele.id}`} id={ele.id}>
                   {show && (<div>
                    <img
                    className="preview-image"
                    src={ele.imageURL}
                    alt="Preview"
                    />
                    <i className="fas fa-trash" onClick={e=>removeImage(ele.id,e)}></i>
                    </div>
                   )}
                </div>
            ))}
        </div>
)
}

export default ImagePreview
