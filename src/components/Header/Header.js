import React from 'react';

import logo from '../../logo.png';
import './Header.scss';

function Header() {

    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo Amaro" />
        </div>
    )
}

export default Header;