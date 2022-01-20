import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {search} from '../../store/search';
import {useHistory} from "react-router";

const Search = () => {

const dispatch = useDispatch();
const history = useHistory();

const [searchKeyWord,setSearchKeyWord] = useState('')

const handleKeyPress = async (e) =>{
    if (e.charCode === 13) {
        e.preventDefault();
        if(searchKeyWord === ""){
            history.push(`/`)
        } else {
        let resultFromSearch = await dispatch(search(searchKeyWord));
        if (resultFromSearch) {
            history.push(`/search/${searchKeyWord}`)
        }
    }}
}

return (
    <form >
        <input className="searchForm"
            type="text"
            placeholder="Search City"
            value={searchKeyWord}
            onChange={(e)=>setSearchKeyWord(e.target.value)}
            onKeyPress={(e)=> handleKeyPress(e)}/>
    </form>
)
}

export default Search
