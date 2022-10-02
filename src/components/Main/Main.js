import React from 'react';
import './Main.scss';
import EntranceSlider from './Sliders/Banner/Banner';
import MinorBanner from "./Banner/MinorBanner"
import Partners from "./Sliders/Partners/Partners";
import Advantages from './Advantages/Advantages';
import Banner from './Banner/Banner';
import Product from "../../components/Product/Product";


import RightArrow from '../../images/right-arrow.svg';



const Main = () => {
    return (
        <main>
            <EntranceSlider />
            <div className="container">
                <div className="best-sellers products-section">
                    <h6 className='products-title'>Ən çox satılan məhsullar</h6>
                    <span className='see-all'>Hamısına bax
                        <img src={RightArrow} alt="right-arrow" />
                    </span>
                    <div className="product-list">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <div className="new-products  products-section">
                    <h6 className='products-title'>Yeni gələn məhsullar</h6>
                    <span className='see-all'>Hamısına bax
                        <img src={RightArrow} alt="right-arrow" />
                    </span>
                    <div className="product-list">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <MinorBanner/>
                <div className="new-accessories  products-section">
                    <h6 className='products-title'>Yeni gələn aksessuarlar</h6>
                    <span className='see-all'>Hamısına bax
                        <img src={RightArrow} alt="right-arrow" />
                    </span>
                    <div className="product-list">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <Banner />
                <Advantages />
            </div>
            <Partners />
        </main>
    )
}

export default Main