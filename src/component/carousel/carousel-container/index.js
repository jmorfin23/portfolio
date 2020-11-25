import React, { useState } from 'react'; 
import { Slide } from '../slide'; 
import { ListItem } from '../../UI/index'; 

import './index.css'; 

//this will be responsive to how many images we have on our AWS S3 
export const CarouselContainer = () => {

    // remove classes from all li elements -> add the active class to specific one
    const addClass  = (e) => {
        e.preventDefault(); 
        console.log(e); 
    }; 

    return(
        <div className="carousel-container">
            <Slide className="carousel-slide">
                <div className="slide-item">
                    <img className="slide-image" src="https://placehold.it/250x250" />
                </div>
                <ol className="slide-list">
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </Slide>
        </div>
    )
}; 