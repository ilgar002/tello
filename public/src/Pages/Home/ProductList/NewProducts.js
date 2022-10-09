import React, { useEffect } from 'react';
import "./ProductList.scss";

import { useSelector, useDispatch } from "react-redux";
import { getNews } from '../../../store/actions/products';

import Skeleton from "../../../components/Skeleton/Product/Product";
import Product from '../../../components/Product/Product';
import RightArrow from '../../../images/right-arrow.svg';

const NewProducts = () => {
    const { products, loading } = useSelector((state) => state.news)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])
    return (
        <div className="new-products  products-section">
            <h6 className='products-title'>Yeni gələn məhsullar</h6>
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
                    products.slice(0, 6).map((el) => {
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

export default NewProducts