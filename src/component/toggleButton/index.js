import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 

export const ToggleButton = ({ toggleNav }) => {
    return(
        <div className={`toggle-button`} onClick={() => toggleNav()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

ToggleButton.propTypes = {
    toggleNav: PropTypes.func.isRequired,
}