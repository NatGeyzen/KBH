import React from 'react';

const ArrowButton = () => {
    return (
        <button className="ArrowButton">
            <ion-icon name={props.iconName}></ion-icon>
        </button>
    );
};

export default ArrowButton;