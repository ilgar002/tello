import React from 'react';
import "./Socials.scss";
import Instagram from '../../../images/instagram.svg';
import Facebook from '../../../images/facebook.svg';
import Youtube from '../../../images/youtube.svg';
import Twitter from '../../../images/twitter.svg';

const Socials = () => {
  return (
      <div className="social-icons">
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
          <img src={Youtube} alt="youtube" />
          <img src={Twitter} alt="twitter" />
      </div>
  )
}

export default Socials