
import React from 'react'; 
import './index.css'; 
//import { NavLink } from 'react-router-dom'; 

export const Footer = () => {
    return(
        <footer className="footer outer">
          <div className="row">
            <div className="flex-footer">
              <section className="footer-copywrite">
                Jonathan Morfin &#169; 2020
              </section>
              {/* <nav>
                <a></a>
              </nav> */}
              <nav className="footer-nav">
                <a href="https://www.linkedin.com/in/jonathanmorfin411/"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/jmorfin23/"><i className="fa fa-github"></i></a>
              </nav>
            </div>
          </div>
        </footer>
    )
}