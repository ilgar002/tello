import React, { useState } from 'react';
import './Order.scss';
import DownIcon from '../../../images/down-icon.svg';

const Order = ({ currentOption, setCurrentOption, options, searchParams, setSearchParams }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false)
    const onClickOption = (option) => {
        setCurrentOption(option)
        const params = Object.fromEntries([...searchParams])
        setSearchParams({ ...params, page: 1, sortBy: option.actions.sortBy })
    }
    return (
        <div onClick={() => setDropdownVisibility((prev) => !prev)} className="orderBy">
            <span className='current'>{currentOption.label}</span>
            <img src={DownIcon} alt='down' />
            {dropdownVisibility && <div className="orderDropdown">
                {options.map((el, index) => {
                    return < div onClick={() => onClickOption(el)} key={index} className="option" > {el.label}</div>
                })}
            </div>}
        </div >
    )
}

export default Order