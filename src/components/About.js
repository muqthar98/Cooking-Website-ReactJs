import React from 'react';
import {Link} from 'react-router-dom';
import AboutUsCarousel from './AboutUsCarousel';

function About() {
    return (
        <div className="about"><Link to = "/About">
        </Link>
            <div className="text-center">
               <h1>About Us</h1>
            </div>
            <div className="text-center p">
               <h2>We Have All types of Chefs </h2>
               <AboutUsCarousel/>
            </div>
        </div>
    )
}

export default About;
