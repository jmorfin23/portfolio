import React from 'react'; 
import './index.css'; 
import { Button } from '../Ui/button'; 
import { Link } from 'react-router-dom'; 

export const HireMe = ({ ...props }) => {
    return(
        <div className="hire-me mt-1">
            <Button {...props} type="button"><Link to="/contact"><i className="fas fa-user-friends mr-05"></i>Hire Me</Link></Button>
        </div>
    )
}; 