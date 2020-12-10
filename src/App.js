import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { Home } from './views/home'; 
import { Projects } from './views/projects'; 
import { Contact } from './views/contact'; 
import { NavSideBar } from './component/nav-sidebar';
import { ToggleButton } from './component/toggleButton'; 
import { Resume } from './views/resume'; 
// import { Footer } from './component/footer'; 


class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      toggle: false
    }
  }

  render() {
    return (
      <div className="site-wrapper">
        <NavSideBar toggle={this.state.toggle} />
        <ToggleButton toggleNav={() => this.setState({ toggle: !this.state.toggle })} /> 
        <Switch>
          <Route exact path={"/about-me"} render={() => <Home /> }/>
          <Route exact path={"/portfolio"} render={() => <Projects /> } />
          <Route exact path={"/resume"} render={() =>  <Resume /> }/>
          <Route exact path={"/contact"} render={() => <Contact /> }/>
        </Switch>
        {/* <Footer />  */}
      </div>
    );
  }
}

export default App;
