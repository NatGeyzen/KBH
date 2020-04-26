import React, { Fragment, useState } from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Framework = () => {

    const [ learnMore, setLearnMore ] = useState(true);

    return (
        <Fragment>
            <Header />
            <Navigation learnMoreMode={learnMore}/>
            <Footer />    
        </Fragment>
    );
};

export default Framework;