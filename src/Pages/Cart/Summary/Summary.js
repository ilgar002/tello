import React from 'react';
import "./Summary.scss";

const Summary = () => {
    return (
        <div className='cart-summary'>
            <span className="title">
                Ümumi
            </span>
            <ul>
                <li>
                    Məbləğ
                    <span className="value">66.50 AZN</span>
                </li>
                <li>
                    Çatdırılma
                    <span className="value">0.00 AZN</span>
                </li>
                <li>
                    Hədiyyə paketi
                    <span className="value">0.00 AZN</span>
                </li>
                <li>
                    Promo kod
                    <span className="value">0.00 AZN</span>
                </li>
            </ul>
            <span className="total">
                Cəmi
                <span className="value">
                    61.50 AZN
                </span>
            </span>
        </div>
    )
}

export default Summary