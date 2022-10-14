import React, { useState } from 'react'
import './MobileNavbar.scss'
import { Link } from "react-router-dom";
import CloseNavbar from '../../../images/closeNavbar.svg'
import Logo from '../../Logo/Logo'
import { BsChevronRight } from 'react-icons/bs';

const MobileNavbar = ({ setMobileNavbar, mobileNavbar, categories, loading, editedCategories }) => {

    const [currentDropdown, setCurrentDropdown] = useState(null)

    const openDropdown = (index) => {
        setCurrentDropdown(index)
        if (index === currentDropdown) {
            setCurrentDropdown(null)
        }
    }

    const closeNavbar = () => {
        setMobileNavbar(false)
    }

    return (
        <div className={mobileNavbar ? `mobileNavbar opened` : 'mobileNavbar'}>
            <div className="header">
                <div onClick={closeNavbar} className="closeButton">
                    <img src={CloseNavbar} alt="close" />
                </div>
                <Logo />
            </div>
            <div className='navbar-content'>
                <ul>
                    {
                        loading ? editedCategories?.slice(0, 5).map((el, index) => {
                            return <li key={el.id}>
                                <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                                    {el.name}
                                </Link>
                                <BsChevronRight onClick={() => openDropdown(index)} className={currentDropdown === index ? "openDropdown opened" : "openDropdown"} />
                                {currentDropdown === index && <div className="dropdown">
                                    <ul>
                                        {editedCategories[index].children.map((el) => {
                                            return <li key={el.id}>
                                                <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                                                    {el.name}
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>}

                            </li>
                        }) :
                            categories.slice(0, 5).map((el, index) => {
                                return <li key={el.id}>
                                    <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                                        {el.name}
                                    </Link>
                                    <BsChevronRight onClick={() => openDropdown(index)} className={currentDropdown === index ? "openDropdown opened" : "openDropdown"} />
                                    {currentDropdown === index && <div className="dropdown">
                                        <ul>
                                            {categories[index]?.children.map((el) => {
                                                return <li key={el.id}>
                                                    <Link onClick={closeNavbar} to={`products/${el.slug}`}>
                                                        {el.name}
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                    </div>}
                                </li>
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar
