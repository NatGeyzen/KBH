/* EXTERNAL COMPONENT IMPORTS
---------------------------------------- */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/* INTERNAL COMPONENT IMPORTS
---------------------------------------- */
import Header from './components/Framework/Header/Header';
import Navigation from './components/Framework/Navigation/Navigation';
import Footer from './components/Framework/Footer/Footer';
import HomePageLearnMore from './pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePageWorkWith from './pages/HomePageWorkWith/HomePageWorkWith';
import FindAHome from './pages//FindAHome/FindAHome';

/* STYLE IMPORTS
---------------------------------------- */
import './App.css';


/* APP COMPONENT
---------------------------------------- */
const App = props => {

	const onWheelHandler = (event) => {
		if (event.deltaY < 0) {
			console.log('scrolling up');
		} else if (event.deltaY > 0) {
			console.log('scrolling down');
		}
	}

	useEffect(() => {
		window.addEventListener('wheel', onWheelHandler)	
	}, [])
	


	// useEffect(() => {
	// 	window.addEventListener('onwheel', onWheelHandler);
	// }, []);
	// useEffect(() => {
	// 	window.removeEventListener('onwheel', onWheelHandler);
	// }, []);


	let dynamicPage;
    if (props.pageMode) {
        switch (props.activePage) {
			case 1: dynamicPage = <HomePageLearnMore />; 
				break;
			case 2: dynamicPage = <AboutUs />; 
				break;
            default: dynamicPage = <HomePageLearnMore />; 
        };
    } else {
        switch (props.activePage) {
			case 1: dynamicPage = <HomePageWorkWith />; 
				break;
			case 2: dynamicPage = <FindAHome />; 
				break;
            default: dynamicPage = <HomePageWorkWith />;
		};
	};

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
// const mapDispatchToProps = dispatch => {
//     return {
//         : (pageID) => dispatch(setActivePageOnClick(pageID))
//     };
// };

/* COMPONENT EXPORT
---------------------------------------- */
export default connect(mapStateToProps)(App);