import React from 'react'; 
import PropTypes from 'proptypes'; 

export const ResumeItems = ({ items }) => {
    return(
        <>
            {items.map((section, index) => (
                <div key={index} className="mb-2 pad-border-mobile">
                    <h3 className={section.category === "Education" ? "mb-2" : "mb-05"}>{section.category}</h3>
                    {section.details.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </div>
            ))
            }  
        </>
    )
}

ResumeItems.propTypes = {
    items: PropTypes.array.isRequired
}