import React, { useState } from 'react';
import { connect } from 'react-redux';

import iconHouse from '../../../assets/images/house.png';
import iconAward from '../../../assets/images/award.png';
import iconBlog from '../../../assets/images/blog.png';
import iconMarket from '../../../assets/images/market.png';
import iconSearch from '../../../assets/images/search.png';
import iconSell from '../../../assets/images/sell.png';
import iconPhone from '../../../assets/images/smartphone.png';

import './Navigation.css';

import NavButton from './NavButton/NavButton';

const Navigation = props => {

    const learnMorePages = [
        ['Home', iconHouse],
        ['About Us', iconAward],
        ['Blog', iconBlog],
        ['Market Insider', iconMarket]
    ];

    const workWithPages = [
        ['Home', iconHouse],
        ['Find A Home', iconSearch],
        ['Sell', iconSell],
        ['Contact Us', iconPhone]
    ];

    let arrayToRender = [];
    if (props.pageMode) {
        arrayToRender = learnMorePages;
    } else {
        arrayToRender = workWithPages;
    }

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
            {arrayToRender.map(page => 
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

const mapStateToProps = state => {
    return {
        pageMode: state.pageModeToLearn,
        activePage: state.activePageNumber
    };
};

export default connect(mapStateToProps)(Navigation);