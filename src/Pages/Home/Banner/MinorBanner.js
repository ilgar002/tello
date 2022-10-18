import React from 'react';
import "./MinorBanner.scss";
import { useNavigate } from 'react-router-dom';
import Iphone11Img from "../../../images/iphone11.jpg"
import AirtagImg from '../../../images/airtag.jpeg'


const MajorBanner = () => {
    const navigate = useNavigate()
    return (
        <div className="banners-section">
            <div className="banner">
                <div className="column">
                    <div className="banner-text">
                        <h6>
                            iPhone 11
                        </h6>
                        <h6>Əsl sizə lazım olan</h6>
                    </div>
                    <div className="price">
                        1 339 AZN
                        <div className="details">
                            Faizsiz Taksitlə 111 AZN-dən
                        </div>
                    </div>
                    <button onClick={() => navigate('/details/prod_QG375v3NnQlrMO')} className="now-buy">
                        İndi alın
                    </button>
                </div>
                <div className="banner-img">
                    <img src={Iphone11Img} alt="iphone11-purple" />
                </div>
            </div>
            <div className="banner airtag">
                <div className="column">
                    <div className="banner-text">
                        <h6>Əşyalarınızı tapmağın ən asan yolu</h6>
                    </div>
                    <div className="price">
                        89 AZN
                        <div className="details">
                            Nağd alışda 10 AZN endirim
                        </div>
                    </div>
                    <button onClick={() => navigate('/details/prod_VKXmwDy7GXorgD')} className="now-buy">
                        İndi alın
                    </button>
                </div>
                <div className="banner-img">
                    <img src={AirtagImg} alt="airtag" />
                </div>
            </div>
        </div>
    )
}

export default MajorBanner