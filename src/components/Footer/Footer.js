import React, { useState } from 'react';

import './Footer.css';

const Footer = props => {

    const [ toggleIcon, setToggleIcon ] = useState('chevron-up-outline');
    const [ footerClass, setFooterClass ] = useState('Footer FooterCollapsed')
    const [ footerTextClass, setFooterTextClass ] = useState('FooterText FooterTextHidden');

    const toggleFooterUp = () => {
        setToggleIcon('chevron-down-outline');
        setFooterClass('Footer FooterFull');
        setFooterTextClass('FooterText FooterTextVisible');
    }

    const toggleFooterDown = () => {
        setToggleIcon('chevron-up-outline');
        setFooterClass('Footer FooterCollapsed');
        setFooterTextClass('FooterText FooterTextHidden');
    }

    const onClickFooterHandler = () => {
        if (toggleIcon === 'chevron-up-outline') {
            toggleFooterUp();
        } else {
            toggleFooterDown();
        }
    }

    return (
        <div 
            className={footerClass} 
            onMouseEnter={toggleFooterUp}
            onMouseLeave={toggleFooterDown}>
            <button 
                className="ToggleFooterButton"
                onClick={onClickFooterHandler}>
                <ion-icon name={toggleIcon}></ion-icon>
            </button>
            <div className="FooterMockUpOnly">FOOTER</div>
            <div className={footerTextClass}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
        </div>
    );
};

export default Footer;