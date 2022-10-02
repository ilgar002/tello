import React from 'react';
import './Logo.scss';
import LogoTello from '../../images/logo-tello.svg';


const Logo = () => {
  return (
      <div className="logo">
          <img src={LogoTello} alt="logo" />
          <h1 className='logo-title'>Tello</h1>
      </div>
  )
}

export default Logo