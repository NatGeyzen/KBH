import React, { useState } from 'react';

import './App.css';

import Framework from './components/Framework/Framework';
import HomePageLearnMore from './pages/HomePageLearnMore/HomePageLearnMore';
import AboutUs from './pages/AboutUs/AboutUs';

const App = () => {

	const [ pageNumberLearnMore, setPageNumberLearnMore ] = useState(1);

	let pageContent;

	switch (pageNumberLearnMore) {
		case 1:
			pageContent = <HomePageLearnMore />;
			break;
		case 2:
			pageContent = <AboutUs />;
			break;
		default:
			pageContent = <HomePageLearnMore />;	
	}

    return (
		<div 
			className="App"
			onSc>
            <Framework />
			{pageContent}
        </div>
    );
}

export default App;
