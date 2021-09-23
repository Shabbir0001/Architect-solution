import React from 'react';
import mission from '../../../Images/mission.PNG';
import './Mission.css';
import MissionLinkCard from './MissionLinkCard/MissionLinkCard';


const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-img">
                <img src={mission} alt=""/>
            </div>
            <div className="mission-info">
                <h1>Mission and Vision</h1>
                <h3>Mission</h3>
                <p>To offer design and drafting services to Architects and Builders, with high quality standard out put in a cost effective manner.</p>
                <h3>Vision</h3>
                <p>To fulfil our mission, we will:</p>
                <p>Strive to be a leader in the Architecture and Structural Designing and Drafting industry; to build our reputation based on attention to quality and detail.</p>
                <p>Offer our clients a detailed scope of work. Design and Build the visions of our clients. Effectively reduce costs by maintaining high standards, quality and scheduled delivery.</p>
                <h3>Our Values</h3>
                <p>Passion</p>
                <p>Ownership</p>
                <p>Commitment</p>
                <p>Honesty</p>
                <p>Trust</p>
                <p>Openness</p>
                <MissionLinkCard/>
            </div>
        </div>
    );
};

export default Mission;