import React, { useEffect } from 'react';
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getCategorieNames } from '../../../store/actions/categories';
// import DropdownMenu from './DropdownMenu/Dropdown';

const Nav = () => {
    const { categories, loading } = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategorieNames())
    }, [dispatch])
    if (!loading) {
        return (
            <nav>
                <ul className="nav-links">
                    {categories.slice(0, 5).map((el) => {
                        return <li key={el.id} className='link'>
                            <Link to={`products/${el.slug}`}>
                                {el.name}
                            </Link>
                            {/* <DropdownMenu /> */}
                        </li>
                    })}
                </ul>
            </nav>
        )
    }

}

export default Nav