import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 

export const Slide = ({children, ...props}) => <div {...props}>{children}</div>; 

Slide.propTypes = {
    children: PropTypes.element.isRequired
}