import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { ServiceContext } from '../../App';
import Footer from '../Footer/Footer';
import { serviceData } from './servicesData';
import './ServicesPage.css';


const ServicesPage = () => {
    const history = useHistory();
    const [serviceInfo, setServiceInfo] = useContext(ServiceContext);
    const handleReadMore =(service)=>{
        history.push(`/readMore/${service.id}`);
        // console.log(service)
        setServiceInfo(service);
    }

    return (
        <div className="servicesPage-container">
            {
                serviceData.map(service => 
                    <div className={`services-card ${service.class}`}>
                        <div className="service-image">
                            <img src={service.img} alt=""/>
                        </div>
                        <div className="service-info">
                            <h1>{service.title}</h1>
                            <p>{service.description}</p>
                            <button onClick={()=> handleReadMore(service)}>Read More</button>
                        </div>
                    </div>    
                )
            }
            <Footer/>
        </div>
    );
};

export default ServicesPage;