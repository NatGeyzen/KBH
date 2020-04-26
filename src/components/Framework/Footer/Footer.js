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
                On devices with a mouse, the full footer will appear when the mouse is hovering over any part of the footer and stay visible. <br />It will disappear when the mouse leaves the footer. <br /> On devices without a mouse, the footer can be toggled up or down by clicking the arrow icon.
            </div>
        </div>
    );
};

export default Footer;