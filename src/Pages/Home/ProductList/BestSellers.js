import React, { useEffect, useState } from 'react';
import "./ProductList.scss";

// import { useDispatch } from "react-redux";
import { getBestSellers } from '../../../store/actions/products';

import Skeleton from "../../../components/Skeleton/Product/Product";
import Product from '../../../components/Product/Product';
import RightArrow from '../../../images/right-arrow.svg';



const BestSellers = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    // const dispatch = useDispatch()
    useEffect(() => {
        getBestSellers(setLoading, setProducts)
    }, [])
    return (
        <div className="best-sellers products-section">
            <h6 className='products-title'>Ən çox satılan məhsullar</h6>
            <span className='see-all'>Hamısına bax
                <img src={RightArrow} alt="right-arrow" />
            </span>
            <div className="product-list">
                {loading ?
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                    :
                    products?.slice(0, 6)?.map((el) => {
                        return <Product
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            image={el.image.url}
                            price={el.price.raw}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default BestSellers