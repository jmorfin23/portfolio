import React from 'react'; 
import './index.css'; 
import { NavLink } from 'react-router-dom'; 
import PropTypes from 'proptypes'; 

export const NavLinks = ({ hideSideBar }) => {
    return(
        <nav className="nav-links fw-400 margin-top-sm">
            <ul className="padding-xsm">
                <li><NavLink onClick={() => hideSideBar()} activeClassName="active-link" to="/about-me"><i className="fas fa-user-alt fa-sm"></i>About Me</NavLink></li>
                <li><NavLink onClick={() => hideSideBar()} activeClassName="active-link" to="/portfolio"><i className="fas fa-book fa-sm"></i>Portfolio</NavLink></li>
                <li><NavLink onClick={() => hideSideBar()} activeClassName="active-link" to="/resume"><i className="fas fa-file-alt fa-sm"></i>Resume</NavLink></li>
                <li><NavLink onClick={() => hideSideBar()} activeClassName="active-link" to="/contact"><i className="fas fa-envelope-open-text fa-sm"></i>Contact</NavLink></li>
            </ul>
        </nav>
    )
};


NavLinks.propTypes = {
    hideSideBar: PropTypes.func.isRequired
}

