import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actions/cart';
import "./Features.scss";
import ManatIcon from '../../../images/manat-icon.svg';
import CartIcon from "../../../images/cart.svg"


const Features = ({ productName, price, variants, id, colors, storages, currentVariant, setCurrentVariant, resultVarinant }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [currentStorage, setCurrentStorage] = useState(0)
  const [currentColor, setCurrentColor] = useState(0)
  // console.log(resultVarinant?.id);
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
  const onClickAddBasket = () => {
    dispatch(addToCart({
      product_id: id,
      quantity: quantity,
      variantData: resultVarinant?.id
    }))
  }

  const onClickColor = (id, index) => {
    setCurrentColor(index)
    setCurrentVariant({ color: { variant_group: colors[0].id, option: id }, storage: currentVariant.storage })
  }
  const onClickStorage = (id, index) => {
    setCurrentStorage(index)
    setCurrentVariant({ color: currentVariant.color, storage: { variant_group: storages[0].id, option: id } })
  }

  return (
    <div className='features'>
      <h4 className='product-name'>
        {variants?.length > 0 ? resultVarinant?.description : productName}
      </h4>
      <div className="price">
        {variants?.length > 0 ? resultVarinant?.price.raw : price}
        <img src={ManatIcon} alt="manat" />
      </div>
      {variants?.length > 0 && <>
        <div className="colors">
          <span className='title'>Rəng:</span>
          <div className="options">
            {colors[0].options?.map((el, index) => {
              return <div key={el.id} onClick={() => onClickColor(el.id, index)} className={index === currentColor ? 'option active' : "option"} style={index === currentColor ? { borderColor: el.name } : { background: el.name }}></div>
            })}
          </div>
        </div>
        <div className="storage">
          <span className='title'>Yaddaş:</span>
          <div className="options">
            {storages[0].options?.map((el, index) => {
              return <div key={el.id} onClick={() => onClickStorage(el.id, index)} className={index === currentStorage ? 'option active' : "option"}>{el.name}</div>
            })}
          </div>
        </div>
      </>}

      <div className="quantity">
        <div className="title">Miqdar:</div>
        <button onClick={onClickDecrement} className="decrement">-</button>
        <span className='current'>{quantity}</span>
        <button onClick={onClickIncrement} className="increment">+</button>
      </div>
      <button onClick={onClickAddBasket} className="addBasket">
        <img src={CartIcon} alt="cart" />
        Səbətə at
      </button>
    </div>
  )
}

export default Features