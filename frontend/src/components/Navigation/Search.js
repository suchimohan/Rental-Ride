import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {search} from '../../store/search';
import {useHistory} from "react-router";
import {cityData} from '../CityDiv'
import { NavLink } from 'react-router-dom';

const Search = () => {

const dispatch = useDispatch();
const history = useHistory();

const [searchKeyWord,setSearchKeyWord] = useState('')
const [filteredData, setFilteredData] = useState([])

const handleFilter = (e) => {
    e.preventDefault()
    setSearchKeyWord(e.target.value)
    const newFilter = cityData.filter((value)=>{
        return value.name.toLowerCase().includes(searchKeyWord.toLowerCase());
    })
    if (searchKeyWord === ""){
        setFilteredData([]);
    } else {
        setFilteredData(newFilter)
    }
}

const handleKeyPress = async (e) =>{
    if (e.charCode === 13) {
        e.preventDefault();
        if(searchKeyWord === ""){
            history.push(`/`)
        } else {
        let resultFromSearch = await dispatch(search(searchKeyWord));
        if (resultFromSearch) {
            history.push(`/search/${searchKeyWord}`)
            setSearchKeyWord('')
        }
    }}
}

useEffect(() => {
   if(searchKeyWord === ''){
       setFilteredData([])
   }
  }, [searchKeyWord]);
  
const handleClick = () => {
    setFilteredData([])
    setSearchKeyWord('')
}

return (
    <form >
        <input className="searchForm"
            type="text"
            placeholder="Search City"
            value={searchKeyWord}
            onChange={(e) => handleFilter(e)}
            onKeyPress={(e)=> handleKeyPress(e)}/>
        {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map(type => {
                    return (
                        <div key={'linktosearch-'+ type.id} className='dataItem'>
                            <NavLink to={`/search/${type.name}`} onClick={handleClick} exact={true} activeClassName='active'>
                                <p>{type.name}</p>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        )}
    </form>
)
}

export default Search
