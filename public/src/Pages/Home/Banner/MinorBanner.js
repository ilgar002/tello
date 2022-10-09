import React from 'react';
import "./MinorBanner.scss";


import AppleIcon from "../../../images/apple-logo.svg"


const MajorBanner = () => {
    return (
        <div className="banners-section">
            <div className="banner">
                <div className="column">
                    <div className="banner-text">
                        <h6>
                            iPhone 11. Rəngli. Güclü. Əsl sizə lazım olan
                        </h6>
                    </div>
                    <div className="price">
                        1 519 AZN
                        <div className="details">
                            Faizsiz Taksitlə 127 AZN-dən
                        </div>
                    </div>
                    <button className="now-buy">
                        İndi alın
                    </button>
                </div>
                <div className="banner-img">
                    <img src="https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-purple.jpg" alt="iphone11-purple" />
                </div>
            </div>
            <div className="banner airtag">
                <div className="column">
                    <div className="banner-text">
                        <span>
                            <img className='apple-icon' src={AppleIcon} alt="apple-logo" />
                            AirTag
                        </span>
                        <h6>Əşyalarınızı tapmağın ən asan yolu</h6>
                    </div>
                    <div className="price">
                        1 519 AZN
                        <div className="details">
                            Faizsiz Taksitlə 127 AZN-dən
                        </div>
                    </div>
                    <button className="now-buy">
                        İndi alın
                    </button>
                </div>
                <div className="banner-img">
                    <img src="https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210421075036476185/210423070010307492.jpg@webp" alt="airtag" />
                </div>
            </div>
        </div>
    )
}

export default MajorBanner