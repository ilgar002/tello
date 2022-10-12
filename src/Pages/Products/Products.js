import React, { useEffect, useState } from 'react';
import "./Products.scss";
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '../../store/actions/products';
import Direction from "../../components/Direction/Direction";
import Filter from './Filter/Filter';
import Order from "./Order/Order";
import Product from '../../components/Product/Product';
import Pagination from './Pagination/Pagination'
import Skeleton from "../../components/Skeleton/Product/Product";
import { options } from './data';


const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { allProducts, loading } = useSelector((state) => state.allProducts)
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
    const [currentOption, setCurrentOption] = useState(Number(searchParams.get('sortBy')) || options[0])


    const dispatch = useDispatch()
    const categorie = useParams().slug
    window.scrollTo(0, 0)
    useEffect(() => {
        dispatch(getAllProducts({
            category_slug: [categorie],
            limit: 6,
            page: currentPage,
            sortBy: currentOption.actions.sortBy,
            sortDirection: currentOption.actions.sortDirection,
        }))
    }, [categorie, dispatch, currentPage, currentOption])

    useEffect(() => {
        const params = Object.fromEntries([...searchParams])
        setSearchParams({ ...params, page: currentPage })
    }, [searchParams, currentPage, setSearchParams])


    let categorieName = categorie.split('-')
    for (var i = 0; i < categorieName.length; i++) {
        categorieName[i] = categorieName[i].charAt(0).toUpperCase() + categorieName[i].slice(1);
    }
    categorieName = categorieName.join(" ")



    return (
        <main className="products">
            <div className='container'>
                <Direction categorie={{ name: categorieName, slug: `/products/${categorie}` }} />
                <div className="product-list-wrapper">
                    <Filter />
                    <div className="product-list">
                        <div className="row">
                            <span className="product-number">
                                {loading ? "Məhsullar axtarılır..." : `${allProducts.meta?.pagination.total} məhsul tapıldı`}
                            </span>
                            <Order
                                currentOption={currentOption}
                                setCurrentOption={setCurrentOption}
                                options={options}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                        <div className="product-wrapper">
                            {loading ? <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </> : allProducts.data?.map((el) => {
                                return <Product
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    image={el.image.url}
                                    price={el.price.raw}
                                />
                            })}
                        </div>
                        {loading || (allProducts.meta?.pagination?.total > 6 && <Pagination
                            data={allProducts?.meta?.pagination}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />)}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Products