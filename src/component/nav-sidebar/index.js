import React from 'react'; 
import './index.css';
import PropTypes from 'proptypes'; 

export const NavSideBar = ({ toggle }) => {
    return(
        <>
            <div className={`sidebar${toggle ? " active" : ""}`}>
                <div className="profile">
                    <img />
                    <h2>Jonathan Morfin</h2>
                    <p>Full Stack Software Developer</p>
                </div>
                <ul>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
};

NavSideBar.propTypes = {
    toggle: PropTypes.bool.isRequired
}