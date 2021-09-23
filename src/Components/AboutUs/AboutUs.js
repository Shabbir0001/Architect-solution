import React from 'react';
import Footer from '../Footer/Footer';
import Quotes from '../HomePage/Quotes/Quotes';
import './AboutUs.css';
import AboutUsBody from './AboutUsBody/AboutUsBody';
import AboutUsHeader from './AboutUsHeader/AboutUsHeader';
import Mission from './Mission/Mission';

const AboutUs = () => {
    return (
        <div className="aboutUs-container">
            <AboutUsHeader/>
            <AboutUsBody/>
            <Mission/>
            <Quotes/>
            <Footer/>
        </div>
    );
};

export default AboutUs;