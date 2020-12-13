import React from 'react'; 
import './index.css'; 
import { Button } from '../Ui/button'; 

export const HireMe = () => {
    return(
        <div className="hire-me">
            <Button type="button"><i className="fas fa-user-friends"></i>Hire Me</Button>
        </div>
    )
}; 