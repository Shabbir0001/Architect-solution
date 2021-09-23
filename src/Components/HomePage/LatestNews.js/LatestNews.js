import React from 'react';
import news from '../../../Images/news.jpg';
import './LatestNews.css';

const LatestNews = () => {
    return (
        <div className="latestNews-container">
            <h1>Latest News</h1>
            <div className="latestNews-body">
                <div className="latestNews-img">
                    <img src={news} alt="" />
                    <div className="card-text">
                        <small>8th January 2020</small>
                        <p>HOW BIM HELPS CONSTRUCTION</p>
                    </div>
                </div>
                <div className="latestNews-card">
                    <p>25th February 2020</p>
                    <h2>BIM Cuts Construction Costs</h2>
                    <p className="underlined-text">Building Information Modelling, well-known as BIM is nothing but the process of designing a building as a team using a system of ...
                    </p>
                    <small>by: centreline.draftingstudio / Our Blog</small>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;