import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 
import { ResumeExperience } from '../resume-experience'; 
import { ResumeItems } from '../resume-items'; 

export const Resume = ({ resume }) => {
    const { experience, items } = resume; 
    return(
        <div className="resume-container margin-top-xl">
            <div className="resume resume-experience">
                <ResumeExperience experience={experience} /> 
            </div>
            <div className="resume resume-items">
                <ResumeItems items={items} /> 
            </div>
        </div>
    )
}


Resume.propTypes = {
    resume: PropTypes.object.isRequired
}