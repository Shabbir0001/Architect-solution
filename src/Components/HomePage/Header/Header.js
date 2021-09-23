import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import header1 from '../../../Images/header1.png';
import header2 from '../../../Images/header2.png';
import header3 from '../../../Images/header3 .png';
import './Header.css';

const Header = () => {

    return (
        <div className="header-container">
            <div className="slider-container">
                <Carousel showArrows={true}>
                    <div>
                        <img src={header1} alt="" />
                    </div>
                    <div>
                        <img src={header2} alt="" />
                    </div>
                    <div>
                        <img src={header3} alt="" />
                    </div>
                    <div>
                        <img src={header1} alt="" />
                    </div>
                </Carousel>
                <h1>We are The Point of All Architect Solution</h1>
                <p>We are a growing drafting company specialising in Architectural and Structural projects using BIM Software. With 3+ years of extensive experience in Architectural Designing using BIM Software.</p>
            </div>
        </div>
    );
};

export default Header;