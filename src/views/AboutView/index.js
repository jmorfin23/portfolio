import React, { Component } from 'react';
import './index.css';
import Jonathan from '../../assets/static/images/jonathan.jpg'; 
import { Card } from '../../component/card'; 
import { Button } from '../../component/Ui/button'; 
import { Link } from 'react-router-dom';
import skills_json from '../../skills.json';  

export class AboutView extends Component {
  render() {
    return (
        <> 
          <section className="profile-heading padding-3">
            <div className="profile-content">
              <h1 className="fs-25">Jonathan Morfin</h1>
              <div className="mt-05 fw-300 fs-15">Full Stack Developer</div>
                <p className="mt-1">
                  Hi, my name is Jonathan Morfin –– I&apos;m a full stack developer based out of Boston Massachusetts.
                  I enjoy building websites, making music, fitness and more. Check out my portfolio and resume
                  or if your interested in hiring me feel free to send me a message. 
                </p>
                <div className="mt-1 mb-2">
                  <Button className="profile-btn-1 fs-1 mr-05 mt-1" type="button"><Link to="/resume">Resume<i className="fas fa-angle-right ml-05"></i></Link></Button>
                  <Button className="profile-btn-2 fs-1 mt-1" type="button"><Link to="/contact">Send me a message<i className="fas fa-angle-right ml-05"></i></Link></Button>
                </div>
            </div>
            <img className="profile-img padding-l-r-1" src={Jonathan} alt="Jonathan Morfin"></img>
          </section>  

          <section className="skills-container padding-3">
            <div>
              <h1 className="skills-heading padding-1">What I do</h1>
              <p className="mt-1">I have experience building full stack applications for a variety of clients. Check out my skills below!</p>
            </div>  

            <div className="card-container mt-3">   
              {skills_json && 
                  skills_json.skills.map((skill, index) => (
                    <Card key={index} json={skill}/> 
                  ))
              }
            </div>
          </section>
        </>
    );
  }
}

