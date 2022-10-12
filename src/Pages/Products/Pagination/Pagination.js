import React from 'react';
import './Pagination.scss';
import { FiChevronLeft } from 'react-icons/fi';

const Pagination = ({ data, currentPage, searchParams, setSearchParams }) => {
    const totalPages = new Array(data?.total_pages).fill()
    const onClickPage = (page) => {
        const params = Object.fromEntries([...searchParams])
        setSearchParams({ ...params, page: page })
    }
    const onClickNext = () => {
        if (currentPage !== data?.total_pages) {
            const params = Object.fromEntries([...searchParams])
            setSearchParams({ ...params, page: currentPage + 1 })
        }
    }
    const onClickPrev = () => {
        if (currentPage !== 1) {
            const params = Object.fromEntries([...searchParams])
            setSearchParams({ ...params, page: currentPage - 1 })
        }
    }
    return (
        <div className='pagination'>
            <button onClick={onClickPrev} disabled={currentPage === 1 && "disabled"} className="prev">
                <FiChevronLeft />
            </button>
            <div className="pages">
                {totalPages.map((_, index) => {
                    return <span
                        onClick={() => onClickPage(index + 1)}
                        key={index}
                        className={index + 1 === currentPage ? "page active" : "page"}>{index + 1}</span>
                })}
            </div>
            <button onClick={onClickNext} disabled={data?.total_pages === currentPage && "disabled"} className="next">
                <FiChevronLeft />
            </button>
        </div>
    )
}

export default Pagination