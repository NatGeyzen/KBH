import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
