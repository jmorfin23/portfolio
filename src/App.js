import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { Home } from './views/home'; 
import { Projects } from './views/projects'; 
import { Contact } from './views/contact'; 
import { Footer } from './component/footer'; 

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Switch>
          <Route exact path={"/home"} render={() => <Home /> }/>
          <Route exact path={"/projects"} render={() => <Projects /> } />
          <Route exact path={"/contact"} render={() => <Contact /> }/>
        </Switch>
        <Footer /> 
      </div>
    );
  }
}

export default App;
