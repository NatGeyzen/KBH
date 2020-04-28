import React from 'react';

import './NavButton.css';

const NavButton = props => {
    return (
        <button 
            className={props.buttonClassName}
            onClick={props.goToPage}>
            {props.show ? 
                <li>
                    <img src={props.icon} alt={props.alt} className="NavImage" />
                    <span className="NavPageName">{props.pageName}</span>
                </li>
                : null 
            }
        </button>
    )
}

export default NavButton;