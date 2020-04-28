/* EXTERNAL COMPONENT IMPORTS
---------------------------------------- */
import React, { useState, } from 'react';
import { connect } from 'react-redux';

/* INTERNAL COMPONENT IMPORTS
---------------------------------------- */
import NavButton from './NavButton/NavButton';
import iconHouse from '../../../assets/images/house.png';
import iconAward from '../../../assets/images/award.png';
import iconBlog from '../../../assets/images/blog.png';
import iconMarket from '../../../assets/images/market.png';
import iconSearch from '../../../assets/images/search.png';
import iconSell from '../../../assets/images/sell.png';
import iconPhone from '../../../assets/images/smartphone.png';

/* STYLE IMPORTS
---------------------------------------- */
import './Navigation.css';



/* NAVIGATION COMPONENT
---------------------------------------- */
const Navigation = props => {

    // CONSTANT VARIABLES
    const learnMorePages = [
        [1, 'Home', iconHouse],
        [2, 'About Us', iconAward],
        [3, 'Blog', iconBlog],
        [4, 'Market Insider', iconMarket]
    ];
    const workWithPages = [
        [1, 'Home', iconHouse],
        [2, 'Find A Home', iconSearch],
        [3, 'Sell', iconSell],
        [4, 'Contact Us', iconPhone]
    ];

    //  CONDITIONAL VARIABLES
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

    const itemKey = () => {
        return Math.random() * 50;
    };
    
    return (
        <div className="Navigation">
            {arrayToRender.map(page => 
                <NavButton 
                    key={itemKey()}
                    id={page[0]}
                    buttonClassName={navItemClass}
                    hoverToggleOn={showFullNav}
                    hoverToggleOff={hideFullNav}
                    show={!navItemCollapsed}
                    icon={page[2]}
                    alt={page[1]}
                    pageName={page[1]}
                />  
                )
            }
            
        </div>
    );
};

/* REDUX STATE PROPS
---------------------------------------- */
const mapStateToProps = state => {
    return {
        pageMode: state.pageModeToLearn,
        activePage: state.activePageNumber
    };
};


/* COMPONENT EXPORT
---------------------------------------- */
export default connect(mapStateToProps)(Navigation);