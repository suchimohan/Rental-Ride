import React, {useEffect} from 'react'

const ImagePreview = ({images, setImages, deletedImgIds, setDeletedImageIds}) => {

const removeImage = (id,index,e) => {
    e.preventDefault()
    setDeletedImageIds([...deletedImgIds,id])
    let newList = images;
    newList.splice(index,1)
    setImages(newList);
}

useEffect(() => {
    let ignoredCountCopy = images
  }, [images]);

    if (!images) {
        return (
            <p>No images</p>
        )
    }

    return (
        <div className="images-preview-container">
            {images.map((ele,index) => (
                <div className="image-preview-box" key={`imagepreview-${ele.id}`} id={ele.id}>
                    <img
                    className="preview-image"
                    src={ele.imageURL}
                    alt="Preview"
                    />
                    <button onClick={(e)=>removeImage(ele.id,index,e)}>
                        <i className="fas fa-trash" ></i>
                    </button>
                </div>
            ))}
        </div>
)
}

export default ImagePreview
