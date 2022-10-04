import React from 'react';
import './Direction.scss';
import RightArrow from '../../images/right-arrow.svg';

const Direction = ({ categories, categorie }) => {
    return (
        <div className="direction">
            <ul>
                <li className='category'>
                    <a href="/">Ana səhifə</a>
                </li>
                {categorie ? <li className='sub-category'>
                    <img src={RightArrow} alt="arrow" />
                    <a href="/">
                        {categorie}
                    </a>
                </li> : categories?.map((el) => {
                    return <li key={el.id} className='sub-category'>
                        <img src={RightArrow} alt="arrow" />
                        <a href="/">
                            {el.name}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Direction