import React from 'react'; 
import './index.css'; 
import { Slide } from '../slide'; 
//import { ListItem } from '../../UI/index'; 


export const CarouselContainer = () => {
    return(
        <div className="carousel-container card">
            <Slide className="carousel-slide">
                <div className="slide-item">
                    <img className="slide-image" src="https://placehold.it/400x400" />
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