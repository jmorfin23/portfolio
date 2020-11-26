import React, { Component } from 'react';
import './App.css';
import { CarouselContainer } from './component/carousel/carousel-container'; 
import { AboutCard } from './component/aboutCard'; 
import { ArrowIcon } from './component/UI/index'; 
// make an admin panel 
// when a new image is added add the new picture an info 
// AWS s3 
// no state management system 
// express server w/ api's 
// admin tokens 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }; 
  }
  render() {
    const { active } = this.state;
    return (
      <>
      <div className="main">
        <div className="row no-gutters">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            {active && <ArrowIcon width="6em" height="6em" onClick={() => this.setState({active: !active})}/>}
          </div>
          <div className="col-md-4 col-sm-8 col-10 col-10 d-flex justify-content-center align-items-center">
            {!active ? <AboutCard /> : <CarouselContainer />}
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            {!active && <ArrowIcon width="6em" height="6em" onClick={() => this.setState({active: !active})}/>}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;


//  <>
//       <div className="main">
//         <div className="box1">
//         {active && <ArrowIcon width="6em" height="6em" onClick={() => this.setState({active: !active})}/> } 
//         </div>
//         <div className="box2">
//         {active ? <CarouselContainer /> : <AboutCard />} 
//         </div>
//         <div className="box3">
//         {!active && <ArrowIcon width="6em" height="6em" onClick={() => this.setState({active: !active})}/> }
//         </div>
//       </div>
//       <div className="testdiv"></div>
//       </> 
