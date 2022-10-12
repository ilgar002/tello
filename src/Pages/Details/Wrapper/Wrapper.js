import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Wrapper.scss';


export default class CenterMode extends Component {
    render() {
        const images = this.props.images
        const settings = {
            customPaging: function (i) {
                return (
                    <a href="/">
                        <img src={images[i]?.url} alt="" />
                    </a>
                );
            },

            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,   
        };
        return (
            <div className="product-slider">
                <Slider {...settings}>
                    {images?.map((el, index) => {
                        return <div key={index}>
                            <img src={el.url} alt="" />
                        </div>
                    })}
                </Slider>
            </div>
        );
    }
}