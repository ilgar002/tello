import React from 'react';
import { Link } from "react-router-dom"
import './Banner.scss';
import BannerArrow from '../../../images/banner-arrow.svg';
import Samsungs from '../../../images/samsungs.png';
import Cases from '../../../images/cases.png';
import Watches from '../../../images/watch.png';



const Banner = () => {
    return (
        <div className="main-banners">
            <div className="xl-banner banner">
                <div className="banner-text">
                    <div className="banner-title">
                        Telefon
                    </div>
                    <Link to={"/products/mobil-telefonlar"} className='go-products'>
                        Məhsullara keçid
                        <img src={BannerArrow} alt="arrow" />
                    </Link>
                </div>
                <div className="banner-img">
                    <img src={Samsungs} alt="samsungs" />
                </div>
            </div>
            <div className='banner-container'>
                <div className="m-banner banner watch">
                    <div className="banner-text">
                        <div className="banner-title">
                            Smart Saat
                        </div>
                        <Link to={"/products/smart-saatlar"} className='go-products'>
                            Məhsullara keçid
                            <img src={BannerArrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className="banner-img">
                        <img src={Watches} alt="watches" />
                    </div>
                </div>
                <div className="m-banner banner case">
                    <div className="banner-text">
                        <div className="banner-title">
                            Aksesuar
                        </div>
                        <Link to={"/products/aksesuarlar"} className='go-products'>
                            Məhsullara keçid
                            <img src={BannerArrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className="banner-img">
                        <img src={Cases} alt="cases" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner