import React, { Component } from 'react';
import './index.css';
import Jonathan from '../../assets/static/images/jonathan.jpg'; 

export class Home extends Component {
  render() {
    return (
        <section className="view-content"> 
          <div className="profile-heading">
            <div className="profile-content">
              <h1>Jonathan Morfin</h1>
              <div className="profile-profession">Full Stack Developer</div>
                <p>
                  Hi, my name is Jonathan Morfin –– I&apos;m a full stack developer based out of Boston Massachusetts.
                  I enjoy building websites, making music, fitness and more. Check out my portfolio and resume
                  or if your interested in hiring me feel free to send me a message. 
                </p>
            </div>
            <img className="profile-img" src={Jonathan} alt="Jonathan Morfin"></img>
          </div>  

          {/* <div className="card-container">
            <div className="card">

            </div>

          </div> */}
        </section>
    );
  }
}

