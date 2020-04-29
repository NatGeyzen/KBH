/* EXTERNAL COMPONENT IMPORTS
---------------------------------------- */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/* INTERNAL FUNCTION IMPORTS
---------------------------------------- */
import { setActivePageOnScrollUp, setActivePageOnScrollDown } from './store/actions/actions';

/* INTERNAL COMPONENT IMPORTS
---------------------------------------- */
import Header from './components/Framework/Header/Header';
import Navigation from './components/Framework/Navigation/Navigation';
import Footer from './components/Framework/Footer/Footer';
import HomePageLearnMore from './pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import MarketInsider from './pages/MarketInsider/MarketInsider';
import HomePageWorkWith from './pages/HomePageWorkWith/HomePageWorkWith';
import FindAHome from './pages//FindAHome/FindAHome';
import Sell from './pages/Sell/Sell';
import ContactUs from './pages/ContactUs/ContactUs';

/* STYLE IMPORTS
---------------------------------------- */
import './App.css';


/* APP COMPONENT
---------------------------------------- */
const App = props => {

	// REDUX PROPS
	const { 
		pageMode, 
		activePage, 
		setActivePageOnScrollUp, 
		setActivePageOnScrollDown 
	} = props;

	// SCROLL UP / DOWN NAV HANDLER
	useEffect(() => {
		const onWheelHandler = (event, activePage) => {
			if (event.deltaY < 0) {
				setActivePageOnScrollUp(activePage);
				console.log(activePage);
			} else if (event.deltaY > 0) {
				setActivePageOnScrollDown(activePage);
			}
		}
		window.addEventListener('wheel', onWheelHandler);
	}, [])
	
	
	// FUNCTION CALL
	

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

	// JSX
    return (
		<div className="App">
			<Header />
			<Navigation />
			<Footer />  
			{dynamicPage}
		</div>	
    );
}

/* REDUX STATE PROPS
---------------------------------------- */
const mapStateToProps = state => {
    return {
        pageMode: state.pageModeToLearn,
        activePage: state.activePageNumber
    };
};
const mapDispatchToProps = dispatch => {
    return {
		setActivePageOnScrollUp: (currentPageNumber) => dispatch(setActivePageOnScrollUp(currentPageNumber)),
		setActivePageOnScrollDown: (currentPageNumber) => dispatch(setActivePageOnScrollDown(currentPageNumber))
    };
};

/* COMPONENT EXPORT
---------------------------------------- */
export default connect(mapStateToProps, mapDispatchToProps)(App);