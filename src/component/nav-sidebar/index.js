import React from 'react'; 
import './index.css';
import PropTypes from 'proptypes'; 
import { NavLink } from 'react-router-dom'; 

export const NavSideBar = ({ toggle }) => {
    return(
            <div className={`sidebar${toggle ? " active" : ""}`}>
                <div className="profile">
                <h3>Jonathan Morfin</h3>
                    <img />
                    <p>Hi, my name is Jonathan Morfin and I&apos;m a full stack software developer.
                        Thank you for visitng my personal website. 
                    </p>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/jonathanmorfin411/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/jmorfin23/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://stackoverflow.com/users/14312449/jonmorfin" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i></a>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><NavLink activeClassName="active-link" to="/about-me"><i className="fas fa-user-alt fa-sm"></i>About Me</NavLink></li>
                        <li><NavLink activeClassName="active-link" to="/portfolio"><i className="fas fa-book fa-sm"></i>Portfolio</NavLink></li>
                        <li><NavLink activeClassName="active-link" to="/resume"><i className="fas fa-file-alt fa-sm"></i>Resume</NavLink></li>
                        <li><NavLink activeClassName="active-link" to="/contact"><i className="fas fa-envelope-open-text fa-sm"></i>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="hire-me">
                    <button type="button"><i className="fas fa-user-friends"></i>Hire Me</button>
                </div>
            </div>
    )
};

NavSideBar.propTypes = {
    toggle: PropTypes.bool.isRequired
}