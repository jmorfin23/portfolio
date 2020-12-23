import React from 'react'; 
import PropTypes from 'proptypes'; 

export const ResumeExperience = ({ experience }) => {
    return(
        <>
            <h3 className="mb-2">{experience.title}</h3>
                {experience.job.map((job, index) => (
                    <div key={index} className="mb-2">
                        <p className="mb-05">{job.date}</p>
                        <h4>{job.company}</h4>
                        <p className="mb-05">{job.title}</p>
                        <p className="pad-border-mobile">{job.description}</p>
                    </div>
                ))}
        </>
    )
}

ResumeExperience.propTypes = {
    experience: PropTypes.object.isRequired
}