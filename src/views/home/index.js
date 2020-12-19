import React, { Component } from 'react';
import './index.css';
import Jonathan from '../../assets/static/images/jonathan.jpg'; 
import { SkillCards } from '../../component/skill-cards'; 
import skills from '../../skills.json'; 
import { Button } from '../../component/Ui/button'; 
import { Link } from 'react-router-dom'; 

export class Home extends Component {
  render() {
    return (
        <div className="view-content"> 
          <section className="profile-heading padding-xl">
            <div className="profile-content fw-200">
              <h1 className="fs-25">Jonathan Morfin</h1>
              <div className="margin-top-xsm fw-300 fs-15">Full Stack Developer</div>
                <p className="margin-top-sm">
                  Hi, my name is Jonathan Morfin –– I&apos;m a full stack developer based out of Boston Massachusetts.
                  I enjoy building websites, making music, fitness and more. Check out my portfolio and resume
                  or if your interested in hiring me feel free to send me a message. 
                </p>
                <div className="margin-top-md margin-bot-md">
                  <Button className="profile-btn-1 fs-1 mr-05" type="button"><Link to="/resume">Resume<i className="fas fa-angle-right ml-05"></i></Link></Button>
                  <Button className="profile-btn-2 fs-1" type="button"><Link to="/contact">Send me a message<i className="fas fa-angle-right ml-05"></i></Link></Button>
                </div>
            </div>
            <img className="profile-img" src={Jonathan} alt="Jonathan Morfin"></img>
          </section>  
          <section className="skills-container padding-xl">
            <div className="fw-200">
              <h1 className="skills-heading padding-sm">What I do</h1>
              <p className="margin-top-sm">I have experience building full stack applications for a variety of clients. Check out my skills below!</p>
            </div>    
              <SkillCards skills={skills.skills}/> 
          </section>
        </div>
    );
  }
}

