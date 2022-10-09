import React from 'react';
import './Direction.scss';
import { Link } from 'react-router-dom';
import RightArrow from '../../images/right-arrow.svg';

const Direction = ({ categories, categorie }) => {
    return (
        <div className="direction">
            <ul>
                <li className='category'>
                    <Link to={'/'}>
                        Ana səhifə
                    </Link>
                </li>
                {categorie ? <li className='sub-category'>
                    <img src={RightArrow} alt="arrow" />
                    <Link to={`/products/${categorie.slug}`}>
                        {categorie.name}
                    </Link>
                </li> : categories?.map((el) => {
                    return <li key={el.id} className='sub-category'>
                        <img src={RightArrow} alt="arrow" />
                        <Link to={`/products/${el.slug}`}>
                            {el.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Direction