import React, { Component } from 'react';
import './App.css';
import { CarouselContainer } from './component/carousel/carousel-container'; 
import { AboutCard } from './component/aboutCard'; 
// admin panel 
// image and picture info
// AWS s3 
// local state 
// express server w/ api's 
// admin jtw 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }; 
  }
  render() {
    return (
      <div className="main">
      </div>
    );
  }
}

export default App;
