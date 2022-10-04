import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Wrapper.scss';

// const images = [
//     'https://cdn.chec.io/merchants/43790/assets/pGPe5PLBkBT3FyGO%7Capple-iphone-12-128-gb-blue-3.jpg',
//     'https://cdn.chec.io/merchants/43790/assets/eFfymlR3id15czvG%7Capple-iphone-12-128-gb-blue-1.jpg',
//     'https://cdn.chec.io/merchants/43790/assets/EDJ97CBTjX6F6hcX%7Capple-iphone-12-2-up-geo-10132020-inlinejpglarge.jpg',
//     'https://cdn.chec.io/merchants/43790/assets/taPjSN7faBwg9MeR%7Capple-iphone-12-128-gb-blue-2.jpg',
// ]

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