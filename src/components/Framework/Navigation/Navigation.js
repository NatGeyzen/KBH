import React from 'react';

import './Navigation.css';

import ArrowButton from '../../UI/ArrowButton/ArrowButton';

const Navigation = props => {

    const learnMorePages = ['About', 'Market Insider', 'Blog'];

    const itemKey = () => {
        return Math.random() * 50;
    } 

    return (
        <div className="Navigation">
            <ArrowButton 
                iconName="chevron-up-outline"
                iconSize="large"/>
            <ul>
                { props.learnMoreMode 
                    ? learnMorePages.map(page => (
                        <li 
                            key={itemKey()}
                            className="NavItems">
                            <i className="far fa-circle"></i>
                        </li>))
                    : null
                }
            </ul>
            <ArrowButton 
                iconName="chevron-down-outline"
                iconSize="large"/>
            
            
        </div>
    );
};

export default Navigation;