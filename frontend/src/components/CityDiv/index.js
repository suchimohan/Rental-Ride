import './CityDiv.css'

const cityData = [{"id" : 1, "name" : "New York", "image" : "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
                {"id" : 2, "name": "Seattle" , "image" : "https://media.istockphoto.com/photos/summer-seattle-picture-id1156820194?b=1&k=20&m=1156820194&s=170667a&w=0&h=QrPqTLHXOAWwi7Lzse0qhzjk8dUB4ZUVUOchH-0AAAs="},
                {"id": 3, "name" : "San Francisco", "image" : "https://media.istockphoto.com/photos/san-francisco-skyline-with-oakland-bay-bridge-at-sunset-california-picture-id1136437406?b=1&k=20&m=1136437406&s=170667a&w=0&h=wkSwE70gUpdL_meD77l_HqgcxjfZkRE9WsPzUzMBHJ8="},
                {"id": 4, "name" : "Las Vegas", "image": "https://media.istockphoto.com/photos/aerial-view-of-las-vegas-strip-in-nevada-picture-id621843450?b=1&k=20&m=621843450&s=170667a&w=0&h=semauQCoQ5EiFhuLOEFAQGlDwkafw1_Gaf4nBWbVy0o="},
                {"id": 5, "name": "Pheonix", "image": "https://media.istockphoto.com/photos/phoenix-skyline-and-cactus-picture-id520506217?b=1&k=20&m=520506217&s=170667a&w=0&h=PaPSdSKVAJ6W6CgstxUr2A3nDKBzCW9JDmmmBBjZT44="},
                {"id":6, "name": "Miami", "image" : "https://media.istockphoto.com/photos/brickel-key-miami-skyline-aerial-picture-id1298608317?b=1&k=20&m=1298608317&s=170667a&w=0&h=SVMvBuaPp4XcvbDc-OBwv-Z8HuQkjsSYfPlEXFje4RI="}]

const CityDiv = () => {

    return (
        <div className="cityContainer">
             <h1>Popular Cities</h1>
            <div className="cityCard">
                        {(cityData.map(cityDetails =>{
                            return (
                                <div key={"cityDetails-"+cityDetails.id} className="city_effect">
                                        <div className='city_div'>
                                            <img className= 'city_image' src={cityDetails.image} alt=""/>
                                            <span className='city_name'>{cityDetails.name}</span>
                                        </div>
                                </div>
                            )
                        }))}
            </div>
        </div>
    )
}

export default CityDiv;
