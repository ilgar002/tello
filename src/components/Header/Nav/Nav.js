import React from 'react';
import "./Nav.scss";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { getCategorieNames } from '../../../store/actions/categories';
import DropdownMenu from './DropdownMenu/Dropdown';

const Nav = ({ categories, loading, editedCategories }) => {

    if (loading) {
        return (
            <nav>
                <ul className="nav-links">
                    {editedCategories?.slice(0, 5).map((el, index) => {
                        return <li key={el.id} className='link'>
                            <Link to={{ pathname: `products/${el.slug}` }} state={{ name: "salam" }}>
                                {el.name}
                            </Link>
                            <DropdownMenu subCategories={editedCategories[index].children} />
                        </li>
                    })}
                </ul>
            </nav >
        )
    }
    else {
        return (
            <nav>
                <ul className="nav-links">
                    {categories.slice(0, 5).map((el, index) => {
                        return <li key={el.id} className='link'>
                            <Link to={`products/${el.slug}`}>
                                {el.name}
                            </Link>
                            <DropdownMenu subCategories={categories[index].children} />
                        </li>
                    })}
                </ul>
            </nav>
        )
    }

}

export default Nav