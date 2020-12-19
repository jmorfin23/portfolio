import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 

// Displays info about my tech skills 
export const SkillCards = ({ skills }) => {
    return(
        <div className="card-container margin-top-xl">  
              {skills && 
                skills.map((skill, index) => (
                    <div key={index} className="card padding-sm margin-bot-md">
                    <div className="icon-container">
                        {skill.icon.map((icon, index) => (
                            <div className="mr-05" key={index} style={{color: icon.color}}  dangerouslySetInnerHTML={{__html: icon.html}}></div>
                        ))}
                    </div>
                    <h3 className="fw-400">
                        {skill.skill.map((name, index, arr) => name + (index === arr.length - 2 ? " &" : index === arr.length - 1 ? "" : ",")).join(" ")}
                    </h3>
                    <p className="fw-200">{skill.description}</p>
                    </div>
                ))
              }
        </div>
    );
}

SkillCards.propTypes = {
    skills: PropTypes.array.isRequired
}