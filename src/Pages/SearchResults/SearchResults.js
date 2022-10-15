import React, { useState, useCallback } from 'react'
import "./SearchResults.scss"
import { commerce } from '../../commerce'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Skeleton from '../../components/Skeleton/Product/Product'
import Pagination from '../Products/Pagination/Pagination'
const SearchResults = () => {
    const query = useParams().query
    const [searchParams, setSearchParams] = useSearchParams();
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
    window.scrollTo(0, 0)

    const getResults = useCallback(async (query) => {
        try {
            setLoading(true)
            const response = await commerce.products.list({
                query: query,
                limit: 8,
                page: currentPage,
            });
            setResults(response)
        }
        catch (err) {
            return err.message
        }
        setLoading(false)
    }, [currentPage])

    useEffect(() => {
        getResults(query)
    }, [query, currentPage, getResults])

    useEffect(() => {
        results.meta?.pagination?.total > 8 && setSearchParams({ page: currentPage });
    }, [searchParams, currentPage, setSearchParams, results])

    return (
        <div className='searchResults container' >
            <div className="row">
                <span className="product-number">
                    {loading ? "Məhsullar axtarılır..." : `${results.meta?.pagination.total} məhsul tapıldı`}
                </span>
            </div>
            <div className="results">
                {loading ? <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />

                </> : results.data?.map((el) => {
                    return <Product
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        image={el.image.url}
                        price={el.price.raw}
                    />
                })}
            </div>
            {loading || (results.meta?.pagination?.total > 8 && <Pagination
                data={results?.meta?.pagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />)}
        </div>
    )
}

export default SearchResults