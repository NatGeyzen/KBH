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
import DynamicPageContent from './containers/DynamicPageContent/DynamicPageContent';


/* STYLE IMPORTS
---------------------------------------- */
import './App.css';


/* APP COMPONENT
---------------------------------------- */
const App = props => {

	// REDUX PROPS
	const { 
		setActivePageOnScrollUp, 
		setActivePageOnScrollDown 
	} = props;

	// SCROLL UP / DOWN NAV HANDLER
	useEffect(() => {
		const onWheelHandler = (event, activePage) => {
			if (event.deltaY < 0) {
				setActivePageOnScrollUp(activePage);
			} else if (event.deltaY > 0) {
				setActivePageOnScrollDown(activePage);
			}
		}
		window.addEventListener('wheel', onWheelHandler);
	}, [])
	
	// JSX
    return (
		<div className="App">
			<Header />
			<Navigation />
			<Footer />  
			<DynamicPageContent />
		</div>	
    );
}

/* REDUX DISPATCH PROPS
---------------------------------------- */
const mapDispatchToProps = dispatch => {
    return {
		setActivePageOnScrollUp: (currentPageNumber) => dispatch(setActivePageOnScrollUp(currentPageNumber)),
		setActivePageOnScrollDown: (currentPageNumber) => dispatch(setActivePageOnScrollDown(currentPageNumber))
    };
};


/* COMPONENT EXPORT
---------------------------------------- */
export default connect(null, mapDispatchToProps)(App);