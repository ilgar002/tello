import React from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

const Dropdown = ({ subCategories }) => {
    return (
        <div className="dropdown-menu">
            <div className="row">
                {subCategories.map((el) => {
                    return <div key={el.id} className="column">
                        <Link to={`/products/${el.slug}`} className="column-title">{el.name}</Link>
                        {/* <div className="column-subtitle">Alt Başlıq</div>
                        <div className="column-subtitle">Alt başlıq</div>
                        <div className="column-subtitle">Alt Başlıq</div>
                        <div className="column-subtitle">Alt Başlıq</div> */}
                    </div>
                })}
                {/* <div className="dropdown-banner">
                    <img src="https://cdn.chec.io/merchants/43790/assets/Jneaq7FXyf5CihkU%7CRectangle%20169.png" alt="banner" />
                </div> */}
            </div>
        </div>
    )
}

export default Dropdown

