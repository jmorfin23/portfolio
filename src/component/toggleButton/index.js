import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 

export const ToggleButton = ({ toggleNav, toggle }) => {
    return(
        <div className={`toggle-button ${toggle ? "bt-black" : "bt-white"}`} onClick={() => toggleNav()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

ToggleButton.propTypes = {
    toggleNav: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired
}