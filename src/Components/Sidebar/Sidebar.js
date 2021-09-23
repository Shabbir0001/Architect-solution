import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <p> CALL_US:+8801908037199 </p>

            <div className="sidebar-icon">
                <a href="https://www.facebook.com/rayhun.niloy" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://www.facebook.com/rayhun.niloy"  target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/rayhun.niloy"  target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/rayhun.niloy"  target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </div>        

        </div>
    );
};

export default Sidebar;