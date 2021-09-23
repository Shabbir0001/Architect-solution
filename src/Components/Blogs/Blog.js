import React from 'react';
import blog1 from '../../Images/blog1.PNG';
import news from '../../Images/news.jpg';
import './Blog.css';


const blogData = [
    {   
        id: "bimcuts",
        title: "BIM Cuts Construction Costs",
        img: blog1,
        date: "25th February 2020",
        shortDescription: "Building Information Modelling, well-known as BIM is nothing but the process of designing a building as a team using a system of computer models and not like the traditional methods where designing is done using separate drawings. BIM uses data sets to produce 3-D computer models. It creates objects virtually and stimulates how they would"
    },
    {   
        id: "howbim",
        title: "How BIM Helps Construction",
        img: news,
        date: "25th February 2020",
        shortDescription: "According to the US National Building Information Model Standard Project Committee: “Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a facility. A BIM is a shared knowledge resource for information about a facility forming a reliable basis for decisions during its life-cycle; defined as existing from earliest conception to demolition (NBIMS-US, 2016)."
    }
]

const Blog = () => {
    return (
        <div className="blog-container">
            {
                blogData.map(blog => 
                    <div className="blog-body">
                        <img src={blog.img} alt=""/>
                        <h2>{blog.date}</h2>
                        <h1>{blog.title}</h1>
                        <p>{blog.shortDescription}</p>
                        <button className="readMore-button">Read More..</button>
                    </div>    
                )
            }
        </div>
    );
};

export default Blog;