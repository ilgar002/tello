import React, { useState } from 'react';
import "./Features.scss";
import ManatIcon from '../../../images/manat-icon.svg';
import CartIcon from "../../../images/cart.svg"


const Features = ({ productName, price, variants }) => {
  const [quantity, setQuantity] = useState(1)
  const onClickDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }
  const onClickIncrement = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1)
    }
  }
  // console.log(variants);
  return (
    <div className='features'>
      <h4 className='product-name'>
        {productName}
      </h4>
      <div className="price">
        {price}
        <img src={ManatIcon} alt="manat" />
      </div>
      {variants?.length > 0 && <><div className="colors">
        <span className='title'>Rəng:</span>
        <div className="options">
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div>
      </div>
        <div className="storage">
          <span className='title'>Yaddaş:</span>
          <div className="options">
            <div className="option active">256GB</div>
            <div className="option">128GB</div>
            <div className="option">64GB</div>
          </div>
        </div>
      </>}

      <div className="quantity">
        <div className="title">Miqdar:</div>
        <button onClick={onClickDecrement} className="decrement">-</button>
        <span className='current'>{quantity}</span>
        <button onClick={onClickIncrement} className="increment">+</button>
      </div>
      <button className="addBasket">
        <img src={CartIcon} alt="cart" />
        Səbətə at
      </button>
    </div>
  )
}

export default Features