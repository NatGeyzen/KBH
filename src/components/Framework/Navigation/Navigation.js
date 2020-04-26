import React from 'react';

import './Navigation.css';

import ArrowButton from '../../UI/ArrowButton/ArrowButton';

const Navigation = props => {
    return (
        <div className="Navigation">
            <ArrowButton 
                iconName="chevron-up-outline"
                iconSize="large"/>
            <div>nav</div>
            <ArrowButton 
                iconName="chevron-down-outline"
                iconSize="large"/>
            
            
        </div>
    );
};

export default Navigation;