import React from 'react';
import Footer from '../Footer/Footer';
import ContactForm from './ContactForm/ContactForm';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div className="contactUs-container">
            <div className="collect-data">
                <h1>Get In Touch...!!</h1>
                <p>Thank you for choosing Architect Solution</p>
                <p>Architect Solution is here to provide you with more information and to answer all your questions. We provide solutions to your drafting needs in a fast and efficient manner. Use the form below to drop us a line and we will get back to you.</p>
                <h4>You can call us too :: +8801908037199</h4>
                <ContactForm/>
            </div>
            <div className="our-address">
                <p>ADDRESS:</p>
                <h4>Check the address in the footer</h4>
                <p>PHONE:</p>
                <h4>+8801908037199</h4>
                <p>EMAIL:</p>
                <h4>architect.solutions@mail.com</h4>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactUs;