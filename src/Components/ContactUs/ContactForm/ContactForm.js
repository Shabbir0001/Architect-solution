import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contactForm-container">
            <h5>Field marked with an * are required</h5>
            <div className="contact-form">
                <p>Your Name*</p>
                <input type="text" id="name" className="simple-input" placeholder="Enter Your Name" /><br/>
                <p>Your Email*</p>
                <input type="text" id="email" className="simple-input" placeholder="Enter Your Email" /><br/>
                <p>Subject</p>
                <input type="text" id="subject" className="simple-input" placeholder="Enter Subject" /><br/>
                <p>Your Message</p>
                <input type="text" id="message" className="large-input" placeholder="Enter Your Message" /><br/>
                <p>Upload a file</p>
                <input type="file" id="file" /><br/>

                <button className="submit-button">SUBMIT</button>
            </div>

        </div>
    );
};

export default ContactForm;