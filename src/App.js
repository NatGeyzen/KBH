import React, { useState } from 'react';

import Header from './components/Framework/Header/Header';
import Navigation from './components/Framework/Navigation/Navigation';
import Footer from './components/Framework/Footer/Footer';
import HomePageLearnMore from './pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from './pages/AboutUs/AboutUs';

import './App.css';

const App = () => {

	const [ pageNumberLearnMore, setPageNumberLearnMore ] = useState(1);

	let pageContent;

	switch (pageNumberLearnMore) {
		case 0:
			pageContent = <HomePageLearnMore pageNumber={pageNumberLearnMore}/>;
			break;
		case 1:
			pageContent = <AboutUs />;
			break;
		default:
			pageContent = <HomePageLearnMore />;	
	}

	const goToPageHandler = (pageNumber) => {
		switch (pageNumber) {
			case 1:
				setPageNumberLearnMore(0);
				break;
			case 2:
				setPageNumberLearnMore(1);
				break;
			case 3:
				setPageNumberLearnMore(2);
				break;
			case 4:
				setPageNumberLearnMore(3);
				break;
			default: 
				setPageNumberLearnMore(0);
		}
		if (pageNumber === 2) {
			setPageNumberLearnMore(1);
		}
	} 

    return (
		<div 
			className="App">
            <Header />
            <Navigation goToPage={goToPageHandler}/>
            <Footer />  
			{pageContent}
        </div>
    );
}

export default App;
