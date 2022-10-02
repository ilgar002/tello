import React from 'react';
import "./Product.scss";
import ManatIcon from '../../images/manat-icon.svg';

const Product = () => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src="https://cdn.chec.io/merchants/43790/assets/pGPe5PLBkBT3FyGO|apple-iphone-12-128-gb-blue-3.jpg" alt="iphone" />
            </div>
            <h4 className="product-name">Apple  iPhone 12, 64 GB, Blue</h4>
            <span className="product-price">2799
                <img src={ManatIcon} alt="manat" />
            </span>
        </div>
    )
}

export default Product