import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';
import LogoTello from '../../images/logo-tello.svg';


const Logo = () => {
  return (
    <div className="logo">
      <Link to={'/'}>
        <img src={LogoTello} alt="logo" />
        <h1 className='logo-title'>Tello</h1>
      </Link>
    </div>
  )
}

export default Logo