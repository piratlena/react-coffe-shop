import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import OurBest from '../components/OurBest/OurBest';
import Footer from '../components/Footer/Footer';



const Home = () => {
return (
    <>
    <Hero/>
    <AboutUs/>
    <OurBest/>
    </>
)

}
export default Home;