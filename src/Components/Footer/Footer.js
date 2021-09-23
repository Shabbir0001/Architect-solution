import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <h1>Architect</h1>
                <br />
                <h1>Solution</h1>
            </div>
           <div className="footer-info">
           <div className="footer-address">
                <h2>Our Address</h2>
                <p>CentreLine Studio LLP
                    First Floor, 7/570 - G Manath Ayyathumoola,
                    Thrikkakkara, P.O, Vazhakkala,
                    Kochi, Kerala, India 682021</p>
                <h4>+8801908037199</h4>
                <p>architect.solution@mail.com</p>    
            </div>
            <div className="footer-copyright">
                <h2>Copyright</h2>
                <p>@{new Date().getFullYear()} architect.solution@mail.com</p>
            </div>
           </div>
        </div>
    );
};

export default Footer;