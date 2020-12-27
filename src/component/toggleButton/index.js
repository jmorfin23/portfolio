import React from 'react'; 
import './index.css'; 

export const ToggleButton = ({ ...props }) => {
    return(
        <div {...props} className={`toggle-button`} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

