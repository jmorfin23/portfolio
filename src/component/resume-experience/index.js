import React from 'react'; 
import PropTypes from 'proptypes'; 

export const ResumeExperience = ({ experience }) => {
    return(
        <>
            <h3 className="margin-bot-md">{experience.title}</h3>
                {experience.job.map((job, index) => (
                    <div key={index} className="margin-bot-md">
                        <p className="margin-bot-xsm">{job.date}</p>
                        <h4>{job.company}</h4>
                        <p className="margin-bot-xsm">{job.title}</p>
                        <p className="pad-border-mobile">{job.description}</p>
                    </div>
                ))}
        </>
    )
}

ResumeExperience.propTypes = {
    experience: PropTypes.object.isRequired
}