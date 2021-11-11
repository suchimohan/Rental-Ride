function Reviews({content,user}){
    return(
        <div className="review_div">
            <div className="user_profile_div">
                <img className="profilePhoto" src={user?.profilePhotoURL} alt="user" />
                <h3>{user?.username}</h3>
            </div>
            <p>{content}</p>
        </div>
    )
}

export default Reviews
