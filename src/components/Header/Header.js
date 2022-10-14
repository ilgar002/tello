import React, { useEffect, useState } from 'react';
import { getCart } from '../../store/actions/cart';
import { getUser } from '../../store/actions/user';
import { getCategorieNames } from '../../store/actions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import Nav from './Nav/Nav';
import './Header.scss';
import PersonIcon from '../../images/person-icon.svg';
// import HeartIcon from '../../images/heart-icon.svg';
import BasketIcon from '../../images/basket-icon.svg';
import Hamburger from '../../images/hamburger.svg';
import InfinityLoading from '../../images/infinity-loading-icon.svg';
import MobileNavbar from "./MobileNavbar/MobileNavbar"


const Header = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false)
    const { cart, loading } = useSelector((state) => state.cart)
    const { user, loading: userLoading } = useSelector((state) => state.user)
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategorieNames())
        dispatch(getCart())
        dispatch(getUser())
    }, [dispatch])


    let editedCategories;
    if (categories.length > 0 && !loading) {
        editedCategories = categories.map((el) => {
            return {
                id: el.id,
                name: el.name,
                slug: el.slug,
                children: el.children.map((el) => {
                    return {
                        id: el.id,
                        name: el.name,
                        slug: el.slug,
                    }
                })
            }
        })
        localStorage.setItem("categories", JSON.stringify(editedCategories))
    }
    else if (JSON.parse(localStorage.getItem("categories"))?.length > 0) {
        editedCategories = JSON.parse(localStorage.getItem("categories"))
    }

    return (
        <header>
            <div onClick={() => setMobileNavbar(true)} className="hamburger-button">
                <img src={Hamburger} alt="hamburger" />
            </div>
            <Logo />
            <Search />
            <div className="user-block">
                {/* <img src={HeartIcon} alt="heart" /> */}
                <Link to={"/cart"} className='basket'>
                    <img src={BasketIcon} alt="basket" />
                    {loading ? <img src={InfinityLoading} className='loading-basket' alt="loading..." /> :
                        <div className="basket-count">{cart.total_items}</div>
                    }
                </Link>
                {(!userLoading && user.firstname) ? <Link to={"/login"} className='user'>
                    {(!userLoading && user) && <h6 className='user-firstname'>{user.firstname}</h6>}
                </Link> :
                    <Link to={"/login"} className='user'>
                        <img className='person' src={PersonIcon} alt="person" />
                    </Link>
                }
            </div>
            <Nav
                categories={categories}
                loading={categoriesLoading}
                editedCategories={editedCategories}
            />
            <MobileNavbar
                setMobileNavbar={setMobileNavbar}
                mobileNavbar={mobileNavbar}
                categories={categories}
                loading={categoriesLoading}
                editedCategories={editedCategories}
            />
        </header>
    )
}

export default Header