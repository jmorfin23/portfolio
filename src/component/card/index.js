import React from 'react'; 
import './index.css'; 
import PropTypes from 'proptypes'; 

// Displays info about my tech skills 
export const Card = ({ json }) => {
    const { name, icon, description, key } = json; 
    return( 
        <div key={key} className="card padding-1 mb-2">
            <div className="icon-container">
                {icon.map((icon, index) => (
                    <div className="mr-05" key={index} style={{color: icon.color}}  dangerouslySetInnerHTML={{__html: icon.html}}></div>
                ))}
            </div>
            <h3 className="fw-400 mt-05">
                {name.map((name, index, arr) => name + (index === arr.length - 2 ? " &" : index === arr.length - 1 ? "" : ",")).join(" ")}
            </h3>
            <p className="fw-200 mt-05">{description}</p>
            <p className="mt-05 repository-link">{json.repository && (
                <a href={json.repository}>View repository</a>
            ) }
            </p>
        </div>
    );
}

Card.propTypes = {
    json: PropTypes.object.isRequired
}