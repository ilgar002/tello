import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Order.scss';
import DownIcon from '../../../images/down-icon.svg';

const Order = ({ currentOption, setCurrentOption, options, setCurrentPage }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();

    const onClickOption = (option) => {
        setCurrentOption(option)
        const params = Object.fromEntries([...searchParams])
        setSearchParams({ ...params, sortBy: option.actions.sortBy })
        setCurrentPage(1)
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