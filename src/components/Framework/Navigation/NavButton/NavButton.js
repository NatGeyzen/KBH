import React from 'react';

import './NavButton.css';

const NavButton = props => {
    return (
        <button 
            className={props.buttonClassName}
            onClick={props.clickToggle}
            onMouseEnter={props.hoverToggleOn}
            onMouseLeave={props.hoverToggleOff}>
            {props.show ? 
                <li className="NavListItem">
                    <img src={props.icon} alt={props.alt} className="NavImage" />
                    <span className={props.spanClassName}>{props.pageName}</span>
                </li>
                : null 
            }
        </button>
    )
}

export default NavButton;