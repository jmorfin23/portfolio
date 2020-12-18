import React from 'react'; 
import './index.css'; 
import { Button } from '../Ui/button'; 

export const HireMe = () => {
    return(
        <div className="hire-me margin-top-sm">
            <Button type="button"><i className="fas fa-user-friends mr-05"></i>Hire Me</Button>
        </div>
    )
}; 