import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProduct } from '../../store/actions/products'
import "./Details.scss";
import Wrapper from "./Wrapper/Wrapper";
import Direction from "../../components/Direction/Direction";
import Features from './Features/Features';
import Loading from "../../components/Loading/Spinner/Spinner"
// import Skeleton from '../../components/Skeleton/Product/Product'



const Details = () => {
    const id = useParams().id
    const { product, loading } = useSelector((state) => state.product)
    window.scrollTo(0, 0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id])
    return (
        <main className='details'>
            {loading ? <Loading /> : <div className="container">
                <Direction
                    categories={product.categories}
                />
                <div className="product-info">
                    <Wrapper
                        images={product?.assets}
                        loading={loading}
                    />

                    <Features
                        variants={product.variant_groups}
                        productName={product?.name}
                        price={product?.price?.raw}
                        id={product.id}
                    />
                </div>
            </div>}

        </main>
    )
}

export default Details