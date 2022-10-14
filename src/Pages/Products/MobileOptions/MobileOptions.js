import React, { useState } from 'react';
import './MobileOptions.scss';
import CloseIcon from '../../../images/closeNavbar.svg'
import SwapIcon from '../../../images/swap.svg';
import FilterIcon from '../../../images/filter.svg';
import Order from '../Order/Order';
import Filter from '../Filter/Filter';


const MobileOptions = ({ currentOption, setCurrentOption, optionsOrder, searchParams,
  setSearchParams, setCurrentPage, optionsFilter, filterVisibility, setFilterVisibility }) => {
  const [orders, setOrders] = useState(false)
  const [filters, setFilters] = useState(false)


  const ordersToggle = () => {
    setOrders(prev => !prev)
  }
  const filtersToggle = () => {
    setFilters(prev => !prev)
  }

  return (
    <div className="mobile-options">
      <div className={orders ? 'orders opened' : 'orders'}>
        <div onClick={ordersToggle} className="title">
          <img src={SwapIcon} alt="swap" />
          Sıralama
        </div>
        <div className="orders-content">
          <div className="row">
            <img onClick={ordersToggle} src={CloseIcon} alt="close" />
            <span>Sıralama</span>
          </div>
          <div className="actions">
            <Order
              currentOption={currentOption}
              setCurrentOption={setCurrentOption}
              options={optionsOrder}
              setCurrentPage={setCurrentPage}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
          <button onClick={ordersToggle} className="showResults">
            Sıralanmış məhsulları göstər
          </button>
        </div>
      </div>
      <div className={filters ? 'filters opened' : 'filters'}>
        <div onClick={filtersToggle} className="title">
          <img src={FilterIcon} alt="filter" />
          Filterləmələr
        </div>
        <div className="filters-content">
          <div className="row">
            <span>Filterləmələr</span>
            <img onClick={filtersToggle} src={CloseIcon} alt="close" />
          </div>
          <div className="actions">
            <Filter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              options={optionsFilter}
              filterVisibility={filterVisibility}
              setFilterVisibility={setFilterVisibility}
            />
          </div>
          <button onClick={filtersToggle} className="showResults">
            Filterlənmiş məhsulları göstər
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileOptions