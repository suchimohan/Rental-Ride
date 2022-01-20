import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { search } from "../../store/search"
import CarDetails from "../CarDetails"
import './SearchPage.css'
import {useParams} from 'react-router-dom';

const SearchPage = () => {
    const searchResults = useSelector((state)=>Object.values(state.search))
    const dispatch = useDispatch();

    const {tag} = useParams()

    useEffect(()=>{
        dispatch(search(tag))
    },[dispatch,tag])

    //on first load the state will be empty
    if(!searchResults) {
       return null
    }

    if (!searchResults.length){
        return (
            <h2>No products found for "{tag}"</h2>
        )
    }
    else {
        return (
            <div>
                <div className="searchTag">
                    Search Results For "{tag}"
                </div>
                <div className='searchProducts'>
                    {searchResults?.map(({id,name,model,price,city,Images,User})=>(
                        <CarDetails
                            key={id}
                            id={id}
                            name={name}
                            model={model}
                            price={price}
                            image={Images}
                            user={User}
                            city={city}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default SearchPage;
