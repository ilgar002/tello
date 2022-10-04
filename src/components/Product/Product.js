import React from 'react';
import { useNavigate } from "react-router-dom"
import "./Product.scss";
import ManatIcon from '../../images/manat-icon.svg';

const Product = ({ id, name, image, price }) => {
    const navigate = useNavigate()
    const onClickProduct = () => {
        navigate(`/details/${id}`)
    }
    return (
        <div onClick={onClickProduct} className="product-card">
            <div className="product-img">
                <img src={image} alt="iphone" />
            </div>
            <h4 className="product-name">{name}</h4>
            <span className="product-price">{price}
                <img src={ManatIcon} alt="manat" />
            </span>
        </div>
    )
}

export default Product