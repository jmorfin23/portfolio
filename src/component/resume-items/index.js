import React from 'react'; 
import PropTypes from 'proptypes'; 

export const ResumeItems = ({ items }) => {
    return(
        <>
            {items.map((section, index) => (
                <div key={index} className="margin-bot-md pad-border-mobile">
                    <h3 className={section.category === "Education" ? "margin-bot-md" : "margin-bot-xsm"}>{section.category}</h3>
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