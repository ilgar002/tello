import React, { useState } from 'react';
import './Order.scss';
import DownIcon from '../../../images/down-icon.svg';

const Order = ({ currentOption, setCurrentOption, options }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false)

    return (
        <div onClick={() => setDropdownVisibility((prev) => !prev)} className="orderBy">
            <span className='current'>{currentOption.label}</span>
            <img src={DownIcon} alt='down' />
            {dropdownVisibility && <div className="orderDropdown">
                {options.map((el, index) => {
                    return < div onClick={() => setCurrentOption(el)} key={index} className="option" > {el.label}</div>
                })}
            </div>}
        </div >
    )
}

export default Order