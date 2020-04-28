import React, { useState } from 'react';

import iconHouse from '../../../assets/images/house.png';
import iconAward from '../../../assets/images/award.png';
import iconBlog from '../../../assets/images/blog.png';
import iconMarket from '../../../assets/images/market.png';

import './Navigation.css';

// import ArrowButton from '../../UI/ArrowButton/ArrowButton';
import NavButton from './NavButton/NavButton';

const Navigation = () => {

    const learnMorePages = [
        ['Home', iconHouse],
        ['About Us', iconAward],
        ['Blog', iconBlog],
        ['Market Insider', iconMarket]
    ];

    // const workWithPages = [
    //     ['Home'],
    //     ['Find A Home'],
    //     ['Sell'],
    //     ['Contact Us']
    // ];

    const [ navItemCollapsed, setNavItemCollapsed ] = useState(true);
    const [ navItemClass, setNavItemClass ] = useState('NavItem');

    const showFullNav = () => {
        setNavItemCollapsed(false);
        setNavItemClass('NavItem FullNav');
    };

    const hideFullNav = () => {
        setNavItemCollapsed(true);
        setNavItemClass('NavItem CollapsedNav');
    }

    const NavModeHandler = () => {
        if (navItemCollapsed) {
            showFullNav();console.log('collapsed!');
        }
        else if (!navItemCollapsed) {
            console.log('Hello');
        }
    }

    const itemKey = () => {
        return Math.random() * 50;
    };
    
    return (
        <div className="Navigation">
            
            {learnMorePages.map(page => 
                <NavButton 
                    key={itemKey()}
                    buttonClassName={navItemClass}
                    clickToggle={NavModeHandler}
                    hoverToggleOn={showFullNav}
                    hoverToggleOff={hideFullNav}
                    show={!navItemCollapsed}
                    icon={page[1]}
                    alt={page[0]}
                    pageName={page[0]}

                />
            )}
      
        </div>
    );
};

export default Navigation;