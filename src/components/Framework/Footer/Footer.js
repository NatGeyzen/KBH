import React, { useState } from 'react';

import ArrowButton from '../../UI/ArrowButton/ArrowButton';

import './Footer.css';

const Footer = props => {

    const [ toggleIcon, setToggleIcon ] = useState('chevron-up-outline');
    const [ footerClass, setFooterClass ] = useState('Footer FooterCollapsed')
    const [ footerTextClass, setFooterTextClass ] = useState('FooterText');

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
        console.log('clicked');
        if (toggleIcon === 'chevron-up-outline') {
            toggleFooterUp();
        } else {
            toggleFooterDown();
        }
    }

    return (
        <div 
            className={footerClass} 
            onClick={onClickFooterHandler}
            // onMouseEnter={toggleFooterUp}
            // onMouseLeave={toggleFooterDown}
            >
            <ArrowButton 
                className="ToggleFooterButton"
                
                iconName={toggleIcon}
                iconSize="small"
            />
            <div className="FooterMockUpOnly">FOOTER</div>
            <div className={footerTextClass}>
                On devices with a mouse, the full footer will appear when the mouse is hovering over any part of the footer and stay visible. <br />It will disappear when the mouse leaves the footer. <br /> On devices without a mouse, the footer can be toggled up or down by clicking the arrow icon.
                <div>*Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    );
};

export default Footer;