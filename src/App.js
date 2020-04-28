import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Framework/Header/Header';
import Navigation from './components/Framework/Navigation/Navigation';
import Footer from './components/Framework/Footer/Footer';
import HomePageLearnMore from './pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from './pages/AboutUs/AboutUs';
import HomePageWorkWith from './pages/HomePageWorkWith/HomePageWorkWith';
import FindAHome from './pages//FindAHome/FindAHome';

import './App.css';

const App = props => {

	let dynamicPage;
    if (props.pageMode) {
        switch (props.activePage) {
            case 1:
                 dynamicPage = <HomePageLearnMore />; 
                 break;
            case 2:
                dynamicPage = <AboutUs />;
                break;
            default:
                dynamicPage = <HomePageLearnMore />; 
        };
    } else {
        switch (props.activePage) {
            case 1:
                 dynamicPage = <HomePageWorkWith />;
                 break;
            case 2:
                dynamicPage = <FindAHome />;
                break;
            default:
                dynamicPage = <HomePageWorkWith />;
		};
	};

    return (
		<div 
			className="App">
            <Header />
            <Navigation />
            <Footer />  
			{dynamicPage}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pageMode: state.pageModeToLearn,
        activePage: state.activePageNumber
    };
};

export default connect(mapStateToProps)(App);