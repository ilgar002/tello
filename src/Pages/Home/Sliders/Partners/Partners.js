import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Partners.scss';
import Toshiba from '../../../../images/toshiba.png';
import Philips from '../../../../images/philips.png';


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 6,
            arrows: false,
            autoplay: true,   
        };
        return (
            <div className="partner-slider">
                <Slider {...settings}>
                    <div className="item">
                        <img src={Toshiba} alt="Toshiba" />
                    </div>
                    <div className="item">
                        <img src={Philips} alt="Toshiba" />
                    </div><div className="item">
                        <img src={Toshiba} alt="Toshiba" />
                    </div>
                    <div className="item">
                        <img src={Philips} alt="Toshiba" />
                    </div>
                    <div className="item">
                        <img src={Toshiba} alt="Toshiba" />
                    </div><div className="item">
                        <img src={Philips} alt="Toshiba" />
                    </div> <div className="item">
                        <img src={Toshiba} alt="Toshiba" />
                    </div>
                    <div className="item">
                        <img src={Philips} alt="Toshiba" />
                    </div><div className="item">
                        <img src={Toshiba} alt="Toshiba" />
                    </div>
                </Slider>
            </div>
        );
    }
}

