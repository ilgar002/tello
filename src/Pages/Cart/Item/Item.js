import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from "../../../store/actions/cart";
import "./Item.scss";
import ManatIcon from '../../../images/manat-icon.svg';
import Trush from '../../../images/delete.svg';

const Item = ({ name, price, image, quantity, color, item_id }) => {
    const dispatch = useDispatch()
    const onClickDelete = () => {
        dispatch(removeFromCart({
            id: item_id,
        }))
    }
    return (
        <div className="cart-item">
            <div className="product-image">
                <img src={image} alt="iphone" />
            </div>
            <div className="product-info">
                <h4 className="product-name">
                    {name}
                </h4>
                <div className="details">
                    {color && <div className="color">
                        <span>Rəng:</span>
                        <span className='value'>{color}</span>
                    </div>}

                    <span className="price">{price}
                        <img src={ManatIcon} alt="manat" />
                    </span>
                </div>
            </div>
            <div className="quantity">
                <button onClick={null} className="decrement">-</button>
                <span className='current'>{quantity}</span>
                <button onClick={null} className="increment">+</button>
            </div>
            <button onClick={onClickDelete} className="delete">
                <img src={Trush} alt="delete" />
            </button>
        </div>
    )
}

export default Item