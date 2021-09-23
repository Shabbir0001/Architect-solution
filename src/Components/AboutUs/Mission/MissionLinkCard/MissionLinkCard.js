import React from 'react';
import { useHistory } from 'react-router';
import './MissionLinkCard.css';



const MissionLinkCard = () => {
    const history = useHistory();

    const handleMissionClick =(param) =>{
        history.push(`${param}`);
    }

    return (
        <div className="missionLinkCard-container">
                    <div className="missions" onClick={()=>handleMissionClick("architecture")}>
                        <h4><i class="fas fa-drafting-compass"></i></h4>
                        <h4>ARCHITECTURE</h4>
                    </div>    
                    <div className="missions" onClick={()=>handleMissionClick("interior")}>
                        <h4><i class="far fa-building"></i></h4>
                        <h4>INTERIOR</h4>
                    </div>    
                    <div className="missions" onClick={()=>handleMissionClick("structural")}>
                   <h4><i class="fas fa-book-reader"></i></h4>
                        <h4>STRUCTURAL</h4>
                    </div>    
        </div>
    );
};

export default MissionLinkCard;