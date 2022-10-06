import React from 'react';
import "./EmptyCart.scss"
import { useNavigate } from 'react-router-dom';
import CartIcon from '../../../images/empty-cart.svg';

const EmptyCart = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate("/")
    }
    return (
        <main className='EmptyCart'>
            <div className="container">
                <div className="content">
                    <img src={CartIcon} alt="" />
                    <span className="description">
                        Səbətiniz halhazırda boşdur
                    </span>
                    <button onClick={onClickHandler} className="goShopping">
                        Alış-verişə davam et
                    </button>
                </div>
            </div>
        </main>
    )
}

export default EmptyCart