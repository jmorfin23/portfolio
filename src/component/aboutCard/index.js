import React from 'react'; 
import './index.css'; 

export const AboutCard = () => {
    return(
        <div className="about-card__container">
            <div className="about-card__image">
                <img src="https://placehold.it/25x25" />
            </div>
            <div className="about-card__text">
                <h2>Jonathan Morfin</h2>
                <p>this is a test paragraph block for development purposes.</p>
            </div>
        </div>
    )
};