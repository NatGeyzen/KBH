import React, { Fragment } from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Framework = () => {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <Footer />    
        </Fragment>
    );
};

export default Framework;