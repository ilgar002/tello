import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Banner.scss'


import Iphones from "../../../../images/iphones.png"
import Watches from "../../../../images/watches.avif"




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,            
        };
        return (
            <div className="banner-slider">
                <Slider {...settings}>
                    <div className="slider-item">
                        <div className="item-content">
                            <div className="slider-text">
                                <h4>Buy & Sell What's Now & Next</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="slider-img">
                                <img src={Iphones} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="item-content">
                            <div className="slider-text">
                                <h4>Buy & Sell What's Now & Next</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="slider-img">
                                <img src={Watches} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="item-content">
                            <div className="slider-text">
                                <h4>Buy & Sell What's Now & Next</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </p>
                            </div>
                            <div className="slider-img">
                                <img src={Iphones} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

