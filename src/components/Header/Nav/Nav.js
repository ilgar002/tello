import React from 'react';
import "./Nav.scss";
import DropdownMenu from './DropdownMenu/Dropdown';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li className='link'>
                    <span>
                        Mobil Telefonlar
                    </span>
                    <DropdownMenu />
                </li>
                <li className='link'>
                    <span>
                        Aksesuarlar
                    </span>
                    <DropdownMenu />
                </li>
                <li className='link'>
                    <span>
                        Noutbuklar
                    </span>
                    <DropdownMenu />
                </li>
                <li className='link'>
                    <span>
                        Bütün Brendlər
                    </span>
                    <DropdownMenu />
                </li>
                <li className='link'>
                    <span>
                        Endirimlər
                    </span>
                    <DropdownMenu />
                </li>
            </ul>
        </nav>
    )
}

export default Nav