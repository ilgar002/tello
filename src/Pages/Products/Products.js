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
import { optionsOrder, optionsFilter } from './data';


const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { allProducts, loading } = useSelector((state) => state.allProducts)
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')))
    const [currentOption, setCurrentOption] = useState(Number(searchParams.get('sortBy')) || optionsOrder[0])
    const dispatch = useDispatch()
    const slug = useParams().slug
    window.scrollTo(0, 0)
    useEffect(() => {
        setCurrentPage(Number(searchParams.get('page')) || 1);
        const values = []
        if (searchParams.get('queries')?.length > 0) {
            optionsFilter.forEach((el) => {
                if (searchParams.get('queries').includes(el.label)) {
                    el.checked = true
                    values.push(...el.value)
                }
                else {
                    el.checked = false
                }
            })
        }
        else {
            optionsFilter.forEach((el) => {
                el.checked = false
            })
        }
        dispatch(getAllProducts({
            category_slug: [slug],
            query: values.toString() || null,
            limit: 6,
            page: currentPage,
            sortBy: currentOption.actions.sortBy,
            sortDirection: currentOption.actions.sortDirection,
        }))
    }, [slug, dispatch, currentPage, currentOption, searchParams])


    let directionCategorie = {}
    const getCategorieName = (arr) => {
        arr?.filter((el) => {
            if (el.slug === slug) {
                directionCategorie = el
                return true
            }
            else {
                getCategorieName(el.children)
                return false
            }
        })
    }
    getCategorieName(JSON.parse(localStorage.getItem('categories')))

    return (
        <main className="products">
            <div className='container'>
                <Direction categorie={{ name: directionCategorie.name, slug: `/products/${slug}` }} />
                <div className="product-list-wrapper">
                    <Filter
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        options={optionsFilter}
                    />
                    <div className="product-list">
                        <div className="row">
                            <span className="product-number">
                                {loading ? "Məhsullar axtarılır..." : `${allProducts.meta?.pagination.total} məhsul tapıldı`}
                            </span>
                            <Order
                                currentOption={currentOption}
                                setCurrentOption={setCurrentOption}
                                options={optionsOrder}
                                setCurrentPage={setCurrentPage}
                                searchParams={searchParams}
                                setSearchParams={setSearchParams}
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
                            searchParams={searchParams}
                            setSearchParams={setSearchParams}
                        />)}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Products