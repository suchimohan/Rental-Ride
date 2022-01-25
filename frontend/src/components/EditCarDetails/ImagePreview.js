import React, {useEffect, useState} from 'react'

const ImagePreview = ({images,deletedImgIds, setDeletedImageIds}) => {

const [list,setList] = useState(images)
const [rerender, setRerender] = useState()
const [count, setCount] = useState(1)

const removeImage = (id,index,e) => {
    e.preventDefault()
    setDeletedImageIds([...deletedImgIds,id])
    let newList = list;
    newList.splice(index,1)
    setList(newList);
    setRerender(false)
    setCount(count+1)
}

useEffect(() => {
    setRerender(!rerender)
  }, [count]);

    if (!list) {
        return (
            <p>No images</p>
        )
    }

    return (
        <div className="images-preview-container">
            {list.map((ele,index) => (
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
