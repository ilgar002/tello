import React, { useEffect, useState } from 'react';
import "./ProductList.scss";

import { useDispatch } from "react-redux";
import { getAccessories } from '../../../store/actions/products';

import Skeleton from "../../../components/Skeleton/Product/Product";
import Product from '../../../components/Product/Product';
import RightArrow from '../../../images/right-arrow.svg';

const Accessories = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        getAccessories(setLoading, setProducts)
    }, [dispatch])
    return (
        <div className="new-accessories products-section">
            <h6 className='products-title'>Yeni gələn aksessuarlar</h6>
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
                    products?.slice(0, 5).map((el) => {
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

export default Accessories