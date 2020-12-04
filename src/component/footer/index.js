
import React from 'react'; 
import './index.css'; 
import { NavLink } from 'react-router-dom'; 

export const Footer = () => {
    return(
        <footer className="footer outer">
            <div className="flex-footer">
              <section className="footer-copywrite flex-properties">
                Jonathan Morfin &#169; 2020
              </section>
              <nav className="footer-nav flex-properties">
                <ul className="nav">
                  <li className="nav-home"><NavLink to='/home'>Home</NavLink></li>
                  <li className="nav-projects"><NavLink to='/projects'>Projects</NavLink></li>
                  <li className="nav-contact"><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
              </nav>
              <nav className="footer-links flex-properties">
                <a href="https://www.linkedin.com/in/jonathanmorfin411/"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/jmorfin23/"><i className="fa fa-github"></i></a>
              </nav>
            </div>
        </footer>
    )
}