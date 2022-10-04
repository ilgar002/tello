import React from 'react';
import './Order.scss';
import DownIcon from '../../../images/down-icon.svg';

const Order = () => {
    return (
        <div className="orderBy">
            <span className='current'>Ən yenilər</span>
            <img src={DownIcon} alt='down' />
        </div>
    )
}

export default Order