import React, { useEffect } from 'react';
import { getCart } from '../../store/actions/cart';
import { getAllProducts } from '../../store/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import Nav from './Nav/Nav';
import './Header.scss';
import PersonIcon from '../../images/person-icon.svg';
import HeartIcon from '../../images/heart-icon.svg';
import BasketIcon from '../../images/basket-icon.svg';
import Hamburger from '../../images/hamburger.svg';
import InfinityLoading from '../../images/infinity-loading-icon.gif';



const Header = () => {
    const { cart, loading } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
        dispatch(getAllProducts({ limit: 200 }))
    }, [dispatch])
    return (
        <header>
            <div className="hamburger-button">
                <img src={Hamburger} alt="hamburger" />
            </div>
            <Logo />
            <Search />
            <div className="user-block">
                <img className='person' src={PersonIcon} alt="person" />
                <img src={HeartIcon} alt="heart" />
                <Link to={"/cart"} className='basket'>
                    <img src={BasketIcon} alt="basket" />
                    {loading ? <img src={InfinityLoading} alt="loading..." /> :
                        <div className="basket-count">{cart.total_items}</div>
                    }
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header