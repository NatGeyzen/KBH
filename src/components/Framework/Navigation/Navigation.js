import React from 'react';

import './Navigation.css';

const Navigation = props => {
    return (
        <div className="Navigation">
            <button>
                <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
            <div>nav</div>
            <button>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            
        </div>
    );
};

export default Navigation;