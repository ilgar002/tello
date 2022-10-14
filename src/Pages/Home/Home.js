import React from 'react';
import './Home.scss';
import EntranceSlider from './Sliders/Banner/Banner';
import BestSellers from './ProductList/BestSellers';
import NewProducts from './ProductList/NewProducts';
import Accessories from './ProductList/Accessories'
import MinorBanner from "./Banner/MinorBanner"
import Partners from "./Sliders/Partners/Partners";
import Advantages from './Advantages/Advantages';
import Banner from './Banner/Banner';

const Main = () => {
    
    return (
        <main className='home'>
            <EntranceSlider />
            <div className="container">
                <BestSellers />
                <NewProducts />
                <MinorBanner />
                <Accessories />
                <Banner />
                <Advantages />
            </div>
            <Partners />
        </main>
    )
}

export default Main