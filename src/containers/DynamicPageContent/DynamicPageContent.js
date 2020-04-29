import React from 'react';
import { connect } from 'react-redux';

/* INTERNAL COMPONENT IMPORTS
---------------------------------------- */
import HomePageLearnMore from '../../pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Blog from '../../pages/Blog/Blog';
import MarketInsider from '../../pages/MarketInsider/MarketInsider';
import HomePageWorkWith from '../../pages/HomePageWorkWith/HomePageWorkWith';
import FindAHome from '../../pages//FindAHome/FindAHome';
import Sell from '../../pages/Sell/Sell';
import ContactUs from '../../pages/ContactUs/ContactUs';

const DynamicPageContent = props => {

    // REDUX PROPS
	const { 
		pageMode, 
		activePage, 
	} = props;

    // RETURN THE CORRECT DYNAMICALLY RENDERED CONTENT
    let dynamicPage;
    if (pageMode) {
        switch (activePage) {
			case 1: dynamicPage = <HomePageLearnMore />; 
				break;
			case 2: dynamicPage = <AboutUs />; 
				break;
			case 3: dynamicPage = <Blog />;
				break;
			case 4: dynamicPage = <MarketInsider />
				break;
            default: dynamicPage = <HomePageLearnMore />; 
        };
    } else {
        switch (activePage) {
			case 1: dynamicPage = <HomePageWorkWith />; 
				break;
			case 2: dynamicPage = <FindAHome />; 
				break;
			case 3: dynamicPage = <Sell />;
				break;
			case 4: dynamicPage = <ContactUs />
				break;
            default: dynamicPage = <HomePageWorkWith />;
		};
	};

    return (
        <div>{dynamicPage}</div>
    )
};

/* REDUX STATE PROPS
---------------------------------------- */
const mapStateToProps = state => {
    return {
        pageMode: state.pageModeToLearn,
        activePage: state.activePageNumber
    };
};

export default connect(mapStateToProps)(DynamicPageContent);