import React from 'react';

import './ArrowButton.css';

const ArrowButton = props => {
    return (
        <button className="ArrowButton">
            <ion-icon 
                name={props.iconName}
                size={props.iconSize}>
            </ion-icon>
        </button>
    );
};

export default ArrowButton;