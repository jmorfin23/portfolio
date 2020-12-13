import React from 'react'; 
import './index.css'; 
import Jonathan from '../../assets/static/images/jonathan.jpg'; 

export const ProfileInfo = () => {
    return(
        <div className="profile">
            <h3>Jonathan Morfin</h3>
                <img src={Jonathan}/>
                <p>Hi, my name is Jonathan Morfin and I&apos;m a full stack software developer.
                    Thank you for visitng my personal website. 
                </p>
        </div>
    )
}