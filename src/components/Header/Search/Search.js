import React from 'react';
import './Search.scss';
import SearchIcon from "../../../images/search-icon.svg";


const Search = () => {
    return (
        <form className='search-form'>
            <img src={SearchIcon}  alt="search" />
            <input className='search-input' type="text" placeholder='Axtarış...' />
        </form>
    )
}

export default Search