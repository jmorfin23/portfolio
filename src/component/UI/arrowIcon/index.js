import React from 'react'; 
import PropTypes from 'prop-types'; 

export const ArrowIcon = ({ width, height, direction, ...props}) => {
    return( 
<<<<<<< HEAD
        <svg {...props} width={width} height={height}  viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
=======
        <svg {...props} width={width} height={height}  viewBox="0 0 16 16" className={`bi bi-arrow-${direction}-circle`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {direction === "right" ? (
                <>
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                </>
            ) : (
                <>
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </>
            )
        }
>>>>>>> no-bootstrap
        </svg>
    )
};

ArrowIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string, 
    direction: PropTypes.string.isRequired
};

ArrowIcon.defaultProps = {
    width: "1em", 
    height: "1em"
};