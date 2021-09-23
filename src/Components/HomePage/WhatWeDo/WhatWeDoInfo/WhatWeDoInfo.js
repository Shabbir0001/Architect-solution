import React from 'react';
import './WhatWeDoInfo.css';


const WhatWeDoInfo = () => {
    return (
        <div className="wwdInfo-container">
            <h1>What We Do</h1>
            <h3>In Addition to our commitment towards excellence</h3>
            <p>We are steadily moving up the value chain by taking on architecture, design, and interior designing. Our experience and skill make quick execution of your plans simple - something that perhaps shows up best when projects seamlessly transition from paper to construction.</p>
            <table>
                <tr>
                    <td><i className="fas fa-check"></i>BIM Modelling</td>
                    <td><i className="fas fa-check"></i>Shop Drawing</td>
                </tr>
                <tr>
                    <td><i className="fas fa-check"></i>REVIT Families</td>
                    <td><i className="fas fa-check"></i>SCAN2BIM</td>
                </tr>
                <tr>
                    <td><i className="fas fa-check"></i>3D Floor Plan</td>
                    <td><i className="fas fa-check"></i>Marketing BIM Presentation</td>
                </tr>
                <tr>
                    <td><i className="fas fa-check"></i>Class Coordination</td>
                    <td><i className="fas fa-check"></i>Bill of Material</td>
                </tr>
                <tr>
                    <td><i className="fas fa-check"></i>Development of In-house company standards</td>
                    <td><i className="fas fa-check"></i>4d construction Simulation</td>
                </tr>
                <tr>
                    <td><i className="fas fa-check"></i>Structural Modelling and Detailing</td>
                    <td><i className="fas fa-check"></i>BIM+VR</td>
                </tr>
            </table>
        </div>
    );
};

export default WhatWeDoInfo;