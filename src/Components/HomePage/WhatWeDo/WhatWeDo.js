import React from 'react';
import whattodo from '../../../Images/whattodo.PNG';
import './WhatWeDo.css';
import WhatWeDoInfo from './WhatWeDoInfo/WhatWeDoInfo';

const WhatWeDo = () => {
    return (
        <div className="whatWeDo-container">
            <div className="whatWeDo-img">
                <img src={whattodo} alt=""/>
            </div>
            <div className="whatWeDo-info">
                <WhatWeDoInfo/>
            </div>
        </div>
    );
};

export default WhatWeDo;