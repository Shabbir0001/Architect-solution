import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ServiceContext } from '../../../App';
import Footer from '../../Footer/Footer';
import './ReadMore.css';



const ReadMore = () => {
    const keyParam = useParams();
    const [serviceInfo, setServiceInfo] = useContext(ServiceContext);
    console.log(serviceInfo, 'read more')
    return (
        <div className="readMore-container">
            <div className="readMore-body">
                <h1>{serviceInfo.title}</h1>
                <div className="readMore-img">
                    <img src={serviceInfo.img} alt=""/>
                </div>
                <p>{serviceInfo.moreInfo}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default ReadMore;