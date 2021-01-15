import React from 'react'; 
import './index.css'; 
import Jonathan from '../../assets/static/images/jonathan.jpg'; 

export const ProfileInfo = () => {
    return(
        <div className="profile fw-200 mt-1">
            <img src={Jonathan} alt="Jonathan Morfin"/>
            <p className="mt-1 fs-09">Hi, my name is Jonathan Morfin and I&apos;m a full stack software developer.
                Thank you for visiting my personal website. 
            </p>
        </div>
    )
}
