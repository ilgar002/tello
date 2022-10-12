import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Socials from './Socials/Socials';
import Location from "../../images/location.svg";
import Mail from "../../images/mail.svg";
import Call from "../../images/call.svg";
import Copyrigt from "../../images/copyright.svg"




const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="column passage">
                    <Logo />
                    <Socials />
                </div>
                <div className="column">
                    <h5 className="column-title">Menu</h5>
                    <ul className='footer-column'>
                        <li>
                            <a href="/">Yeni</a>
                        </li>
                        <li>
                            <a href="/">Endirimlər</a>
                        </li>
                        <li>
                            <a href="/">Aksessuarlar</a>
                        </li> <li>
                            <a href="/">Bütün brendlər</a>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h5 className="column-title">Kömək</h5>
                    <ul className='footer-column'>
                        <li>
                            <Link to={'/questions'}>
                                Tez-tez soruşulan suallar
                            </Link>
                        </li>
                        <li>
                            <a href="/">Çatdırılma xidməti</a>
                        </li> <li>
                            <a href="/">Geri qaytarılma şərtləri</a>
                        </li>
                    </ul>
                </div> <div className="column">
                    <h5 className="column-title">Əlaqə</h5>
                    <ul className='footer-column contact'>
                        <li>
                            <a href="/" className='location'>
                                <img src={Location} alt="location" />
                                M. K. Ataturk avenue 89, Baku, Azerbaijan
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Mail} alt="mail" />
                                example@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={Call} alt="call" />
                                *2108
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row rights">
                <div className="left">
                    <span>
                        <img src={Copyrigt} alt="copyrigt" />
                        PeojectX 2021. Bütün hüquqlar qorunur.
                    </span>
                </div>
                <div className="right">
                    <span>
                        Qaydalar və şərtlər
                    </span>
                    <span>Məxfilik siyasəti</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer