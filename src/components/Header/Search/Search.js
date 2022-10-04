import React, { useState } from 'react';
import './Search.scss';
import SearchIcon from "../../../images/search-icon.svg";


const Search = () => {
    const [focusDropdown, setFocusDropdown] = useState(false)
    const onFocusHandler = () => {
        setFocusDropdown(true)
    }
    const onBlurHandler=()=>{
        setFocusDropdown(false)
    }
    return (
        <form className='search-form'>
            <img src={SearchIcon} alt="search" />
            <input onFocus={onFocusHandler} onBlur={onBlurHandler} className='search-input' type="text" placeholder='Axtarış...' />
            {focusDropdown &&
                <div className="focus-dropdown">
                    <div className="row">
                        <span className="title">
                            Son axtarışlar
                        </span>
                        <button className="clear">
                            Təmizlə
                        </button>
                    </div>
                    <div className="searchs">
                        <span className="search">
                            IPhone
                        </span>
                        <span className="search">
                            Samsung TV
                        </span>
                        <span className="search">
                            Asus ROG Phone
                        </span>
                        <span className="search">
                            IPhone
                        </span>
                        <span className="search">
                            Samsung TV
                        </span>
                        <span className="search">
                            Asus ROG Phone
                        </span><span className="search">
                            IPhone
                        </span>
                        <span className="search">
                            Samsung TV
                        </span>
                        <span className="search">
                            Asus ROG Phone
                        </span>
                    </div>

                </div>}
        </form>
    )
}

export default Search