import React, { useState } from 'react';
import "./Filter.scss";
import PlusIcon from '../../../images/plus-icon.svg';
import MinusIcon from '../../../images/minus-icon.svg';


const Filter = () => {
    const [filterVisibility, setFilterVisibility] = useState(false)
    const onClickHandler = () => {
        setFilterVisibility((prev) => !prev)
    }
    return (
        <div className="side-filter" >
            <div className="filter">
                <span className='sortBy'>Brend</span>
                <button onClick={onClickHandler} className="toggle">
                    {filterVisibility
                        ?
                        <img src={MinusIcon} alt="minus" />
                        :
                        <img src={PlusIcon} alt="plus" />
                    }
                </button>
            </div>
            {filterVisibility &&
                <div className="options-dropdown">
                    <ul className='options'>
                        <li className='option'>
                            <input type="checkbox" name="apple" />
                            <label htmlFor="apple">Apple</label>
                        </li>

                        <li className='option'>
                            <input type="checkbox" name="apple" />
                            <label htmlFor="apple">Apple</label>
                        </li>

                        <li className='option'>
                            <input type="checkbox" name="apple" />
                            <label htmlFor="apple">Apple</label>
                        </li>

                        <li className='option'>
                            <input type="checkbox" name="apple" />
                            <label htmlFor="apple">Apple</label>
                        </li>
                    </ul>
                </div>}

        </div >
    )
}

export default Filter