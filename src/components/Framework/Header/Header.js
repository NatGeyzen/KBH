import React from 'react';

import './Header.css';

import TogglePageMode from '../../../containers/TogglePageMode/TogglePageMode';

const Header = props => {
    return (
        <div className="Header">
            <div className="LogoContainer">
                logo
            </div>
            <div className="MockUpTitle">HEADER</div>
            <TogglePageMode />
            
        </div>
    );
};

export default Header;