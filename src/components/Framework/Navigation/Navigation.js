import React, { useState } from 'react';

import iconAward from '../../../assets/images/award.png';
import iconBlog from '../../../assets/images/blog.png';
import iconMarket from '../../../assets/images/market.png';

import './Navigation.css';

import ArrowButton from '../../UI/ArrowButton/ArrowButton';
import NavButton from './NavButton/NavButton';

const Navigation = props => {

    const learnMorePages = [
        ['About Us', iconAward],
        ['Blog', iconBlog],
        ['Market Insider', iconMarket]
    ];

    const [ navItemCollapsed, setNavItemCollapsed ] = useState(true);
    const [ navItemClass, setNavItemClass ] = useState('NavItem');
    const [ navPageNameClass, setNavPageNameClass ] = useState('NavPageName OriginalOpacity')
    const [ goToPage, setGoToPage ] = useState()

    const showFullNav = () => {
        setNavItemCollapsed(false);
        setNavItemClass('NavItem FullNav');
        setNavPageNameClass('NavPageName AdjustedOpacity');
    };

    const hideFullNav = () => {
        setNavItemCollapsed(true);
        setNavItemClass('NavItem CollapsedNav');
        setNavPageNameClass('NavPageName OriginalOpacity');
    }

    const NavModeHandler = () => {
        if (navItemCollapsed) {
            showFullNav();
        }
        else if (!navItemCollapsed) {
            setGoToPage(true);
        }
    }

    const itemKey = () => {
        return Math.random() * 50;
    };
    
    return (
        <div className="Navigation">
            <ArrowButton 
                iconName="chevron-up-outline"
                iconSize="large"/>
            
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
                    spanClassName={navPageNameClass}
                    pageName={page[0]}

                />
            )}

            <ArrowButton 
                iconName="chevron-down-outline"
                iconSize="large"/>
            
            
        </div>
    );
};

export default Navigation;