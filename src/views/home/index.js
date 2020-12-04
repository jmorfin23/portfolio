import React, { Component } from 'react';
import './index.css';
import { CarouselContainer } from '../../component/carousel/carousel-container'; 
import { AboutCard } from '../../component/aboutCard'; 
import { ArrowIcon } from '../../component/UI/index'; 

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }; 
  }
  render() {
    const { active } = this.state;
    return (
        <div className={`content-container ${active ? "direction-reverse" : "direction-normal"}`}>
          <div className="content-box">
            {active && <ArrowIcon direction="left" width="6em" height="6em" onClick={() => this.setState({active: !active})}/> } 
          </div>
          <div className="content-box content-box-middle">
            {active ? <CarouselContainer /> : <AboutCard />} 
          </div>
          <div className="content-box">
            {!active && <ArrowIcon direction="right" width="6em" height="6em" onClick={() => this.setState({active: !active})}/> }
          </div>
        </div>
    );
  }
}

