import React, { useEffect } from 'react';
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getCategorieNames } from '../../../store/actions/categories';
import DropdownMenu from './DropdownMenu/Dropdown';

const Nav = () => {
    const { categories, loading } = useSelector((state) => state.categories)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategorieNames())
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

    if (loading) {
        return (
            <nav>
                <ul className="nav-links">
                    {editedCategories.slice(0, 5).map((el, index) => {
                        return <li key={el.id} className='link'>
                            <Link to={`products/${el.slug}`}>
                                {el.name}
                            </Link>
                            <DropdownMenu subCategories={editedCategories[index].children} />
                        </li>
                    })}
                </ul>
            </nav>
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