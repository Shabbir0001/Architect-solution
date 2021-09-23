import React from 'react';
import aboutus from '../../../Images/aboutus.PNG';
import './AboutUsHeader.css';

const AboutUsHeader = () => {
    return (
        <div className="aboutUsHeader-container">
            <h1>About Architect Solution</h1>
            <div className="aboutUsHeader-img">
                <img src={aboutus} alt="" />
            </div>
        </div>
    );
};

export default AboutUsHeader;