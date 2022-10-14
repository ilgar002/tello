import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProduct } from '../../store/actions/products'
import "./Details.scss";
import Wrapper from "./Wrapper/Wrapper";
import Direction from "../../components/Direction/Direction";
import Features from './Features/Features';
import Loading from "../../components/Loading/Spinner/Spinner"
import { commerce } from '../../commerce';

const Details = () => {
    const id = useParams().id

    const [variants, setVariants] = useState()
    const [currentVariant, setCurrentVariant] = useState({
        color: { variant_group: Object.keys({} || variants?.[0].options)[1], option: Object.values({} || variants?.[0].options)[1] },
        storage: { variant_group: Object.keys({} || variants?.[0].options)[0], option: Object.values({} || variants?.[0].options)[0] }
    })
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        getProduct(setLoading, setProduct,id)
        window.scrollTo(0, 0)
        getVariants(id);
    }, [dispatch,id])


    const colors = product?.variant_groups?.filter((el) => {
        return el.name === 'color'
    })
    const storages = product?.variant_groups?.filter((el) => {
        return el.name === 'storage'
    })
    let images;
    if (product.variant_groups?.length > 0) {
        if (currentVariant.color.option) {
            images = colors[0]?.options?.filter(el => el.id === currentVariant.color.option)
            images = images[0].assets
            images = product?.assets?.filter((el) => images?.includes(el.id))
        }
        else {
            images = colors && colors[0]?.options[0].assets
            images = product?.assets?.filter((el) => images?.includes(el.id))
        }
    }
    else {
        images = product?.assets
    }
    const getVariants = (id) => {
        try {
            commerce.products.getVariants(id)
                .then(res => setVariants(res.data))
        }
        catch (err) {
            return err.message
        }
    }

    const resultVarinant = variants?.filter((el) => {
        if (el.options[currentVariant.color.variant_group] === currentVariant.color.option && el.options[currentVariant.storage.variant_group] === currentVariant.storage.option) {
            return el
        }
        else return false
    })
    return (
        <main className='details'>
            {loading ? <Loading /> : <div className="container">
                <Direction
                    categories={product.categories}
                />
                <div className="product-info">
                    <Wrapper
                        images={images}
                        loading={loading}
                    />

                    <Features
                        variants={product.variant_groups}
                        productName={product?.name}
                        price={product?.price?.raw}
                        id={product.id}
                        colors={colors}
                        storages={storages}
                        currentVariant={currentVariant}
                        setCurrentVariant={setCurrentVariant}
                        // resultVarinant={resultVarinant?.length > 0 ? resultVarinant[0] : variants?.[0]}
                        resultVarinant={resultVarinant?.[0]}
                    />
                </div>
            </div>}

        </main>
    )
}

export default Details