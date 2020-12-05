import React, { useState } from 'react'; 
import './index.css';

export const NavSideBar = () => {
    const [toggle, setToggle] = useState(true); 
    return(
        <div className={`sidebar${toggle ? " active" : ""}`}>
            <div className="profile">
                <img />
                <h2>Jonathan Morfin</h2>
                <p>Full Stack Software Developer</p>
            </div>
            <div className="toggle-button" onClick={() => setToggle(!toggle)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
};