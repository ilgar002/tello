import React, { useEffect, useState } from 'react';
import "./Products.scss";
import { useParams, useSearchParams } from 'react-router-dom'
import { getProductsByCategorie } from '../../store/actions/products';
import Direction from "../../components/Direction/Direction";
import Filter from './Filter/Filter';
import Order from "./Order/Order";
import Product from '../../components/Product/Product';
import Pagination from './Pagination/Pagination'
import Skeleton from "../../components/Skeleton/Product/Product";
import { optionsOrder, optionsFilter } from './data';
import MobileOptions from './MobileOptions/MobileOptions';




const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')))
    const [currentOption, setCurrentOption] = useState(Number(searchParams.get('sortBy')) || optionsOrder[0])
    const [filterVisibility, setFilterVisibility] = useState(false)
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
        getProductsByCategorie({
            category_slug: [slug],
            query: values.toString() || null,
            limit: 6,
            page: currentPage,
            sortBy: currentOption.actions.sortBy,
            sortDirection: currentOption.actions.sortDirection,
        }, setLoading, setProducts)
    }, [slug, currentPage, currentOption, searchParams])

    useEffect(() => {
        setFilterVisibility(false)
    }, [slug])
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
            <MobileOptions
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
                optionsOrder={optionsOrder}
                setCurrentPage={setCurrentPage}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                optionsFilter={optionsFilter}
                filterVisibility={filterVisibility}
                setFilterVisibility={setFilterVisibility}
            />
            <div className='container'>
                <Direction categorie={{ name: directionCategorie.name, slug: `/products/${slug}` }} />
                <div className="product-list-wrapper">

                    <Filter
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        options={optionsFilter}
                        filterVisibility={filterVisibility}
                        setFilterVisibility={setFilterVisibility}
                    />
                    <div className="product-list">
                        <div className="row">
                            <span className="product-number">
                                {loading ? "Məhsullar axtarılır..." : `${products.meta?.pagination.total} məhsul tapıldı`}
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
                            </> : products.data?.map((el) => {
                                return <Product
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    image={el.image.url}
                                    price={el.price.raw}
                                />
                            })}
                        </div>
                        {loading || (products.meta?.pagination?.total > 6 && <Pagination
                            data={products?.meta?.pagination}
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