import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import Nav from './Nav/Nav';
import './Header.scss';
import PersonIcon from '../../images/person-icon.svg';
import HeartIcon from '../../images/heart-icon.svg';
import BasketIcon from '../../images/basket-icon.svg';
import Hamburger from '../../images/hamburger.svg';



const Header = () => {
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
                    <div className="basket-count">0</div>
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header