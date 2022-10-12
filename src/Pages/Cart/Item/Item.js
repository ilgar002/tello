import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCart } from "../../../store/actions/cart";
import "./Item.scss";
import ManatIcon from '../../../images/manat-icon.svg';
import Trush from '../../../images/delete.svg';

const Item = ({ name, price, image, quantity, item_id, product_id, options }) => {
    const navigate = useNavigate()
    const [productQuantity, setProductQuantity] = useState(quantity)
    const dispatch = useDispatch()
    const onClickDelete = () => {
        dispatch(removeFromCart({
            id: item_id,
        }))
    }
    const goToProduct = () => {
        navigate(`/details/${product_id}`)
    }
    const onClickDecrement = () => {
        if (productQuantity > 1) {
            setProductQuantity((prev) => prev - 1)
            dispatch(updateCart({
                id: item_id,
                quantity: productQuantity - 1,
            }))
        }
        else {
            dispatch(removeFromCart({
                id: item_id,
            }))
        }
    }
    const onClickIncrement = () => {
        if (productQuantity < 10) {
            setProductQuantity((prev) => prev + 1)
            dispatch(updateCart({
                id: item_id,
                quantity: productQuantity + 1,
            }))
        }
    }
    const color = options.filter((el) => el.group_name === "color")
    return (
        <div className="cart-item">
            <div onClick={goToProduct} className="product-image">
                <img src={image} alt="iphone" />
            </div>
            <div className="product-info">
                <h4 onClick={goToProduct} className="product-name">
                    {name}
                </h4>
                <div className="details">
                    {options.length > 0 && <div className="color">
                        <span>Rəng:</span>
                        <span className='value'>{color[0].option_name.charAt(0).toUpperCase() + color[0].option_name.slice(1)}</span>
                    </div>}

                    <span className="price">{price}
                        <img src={ManatIcon} alt="manat" />
                    </span>
                </div>
            </div>
            <div className="quantity">
                <button onClick={onClickDecrement} className="decrement">-</button>
                <span className='current'>{productQuantity}</span>
                <button onClick={onClickIncrement} className="increment">+</button>
            </div>
            <button onClick={onClickDelete} className="delete">
                <img src={Trush} alt="delete" />
            </button>
        </div>
    )
}

export default Item