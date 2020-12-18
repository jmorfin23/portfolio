import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { Home } from './views/home'; 
import { Projects } from './views/projects'; 
import { Contact } from './views/contact'; 
import { SideBar } from './component/sidebar';
import { Resume } from './views/resume'; 

// TODO: 
// 1. border box issue 
// 2. transition issues 
// 3. proper html boxes (section, nav, article, main...)
// 4. proper css formatting and using proper rules 
// 5. pixels issue - use rem unless specific needs 

// responsive issue DONE
// add hamburger menu to top DONE
// sidebar-hidden style change - could be confusing in the future 
// add view-content class below 


// Daily goal 
// finish resume page and decide if i want a portfolio page or anther page. 
// mr-1,2,3, css 
class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <SideBar />
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
