import React, { useEffect } from 'react';
import "./Products.scss";
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '../../store/actions/products';
import Direction from "../../components/Direction/Direction";
import Filter from './Filter/Filter';
import Order from "./Order/Order";
import Product from '../../components/Product/Product';
import Skeleton from "../../components/Skeleton/Product/Product";

const Products = () => {
    const { products, loading } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const categorie = useParams().slug
    window.scrollTo(0, 0)
    useEffect(() => {
        dispatch(getAllProducts({
            category_slug: [categorie],
            limit: 50,
        }))
    }, [categorie, dispatch])

    let categorieName = categorie.split('-')
    for (var i = 0; i < categorieName.length; i++) {
        categorieName[i] = categorieName[i].charAt(0).toUpperCase() + categorieName[i].slice(1);
    }
    categorieName = categorieName.join(" ")
    console.log(categorieName);
    return (
        <main className="products">
            <div className='container'>
                <Direction categorie={categorieName} />
                <div className="product-list-wrapper">
                    <Filter />
                    <div className="product-list">
                        <div className="row">
                            <span className="product-number">
                                {loading ? "Məhsullar axtarılır..." : `${products.length} məhsul tapıldı`}
                            </span>
                            <Order />
                        </div>
                        <div className="product-wrapper">
                            {loading ? <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </> : products.map((el) => {
                                return <Product
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    image={el.image.url}
                                    price={el.price.raw}
                                />
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Products