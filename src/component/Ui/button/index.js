import React from 'react'; 
import PropTypes from 'proptypes'; 

export const Button = ({type, children, ...props}) => <button type={type} {...props}>{children}</button>;

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    children: PropTypes.any.isRequired
}

Button.defaultProps = {
    type: 'button',
}