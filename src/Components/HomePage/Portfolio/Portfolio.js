import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ServiceContext } from '../../../App';
import { serviceData } from '../../ServicesPage/servicesData';
import './Portfolio.css';

const Portfolio = () => {
    const history = useHistory();
    const [serviceInfo, setServiceInfo] = useContext(ServiceContext);
    const handleReadMore = (portfolio) =>{
        history.push(`/readMore/${portfolio.id}`);
        setServiceInfo(portfolio);
    }

    return (
        <div className="portfolio-container">
            {
                serviceData.map(portfolio =>
                     <div className="portfolio-card" onClick={()=> handleReadMore(portfolio)}>
                         <img src={portfolio.img} alt=""/>
                         <h1>{portfolio.title}</h1>
                     </div>)
            }
        </div>
    );
};

export default Portfolio;