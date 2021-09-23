import React from 'react';
import Footer from '../Footer/Footer';
import Header from './Header/Header';
import './HomePage.css';
import LatestNews from './LatestNews.js/LatestNews';
import Portfolio from './Portfolio/Portfolio';
import Quotes from './Quotes/Quotes';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const HomePage = () => {
    return (
        <div className="homePage-container">
            <Header/>
            <Portfolio/>
            <WhatWeDo/>
            <LatestNews/>
            <Quotes/>
            <Footer/>
        </div>
    );
};

export default HomePage;