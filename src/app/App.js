import React from 'react';
import {Routes,Route,} from "react-router-dom";


import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Home from '../pages/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import OurBest from '../components/OurBest/OurBest';


function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurBest/>
      <Home/>
      <Footer/>
    </div>
    
  );
}

export default App;
