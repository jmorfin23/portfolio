import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { AboutView } from './views/AboutView'; 
import { ProjectsView } from './views/ProjectsView'; 
import { ContactView } from './views/ContactView'; 
import { SideBar } from './component/sidebar';
import { ResumeView } from './views/ResumeView'; 

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
// resume changing sidebar width from 243 to 246 

// Daily goal 
// finish resume page and decide if i want a portfolio page or anther page. 
// mr-1,2,3, css 
class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <SideBar />
        <Switch>
          <Route exact path={"/about-me"} render={() => <AboutView /> }/>
          <Route exact path={"/portfolio"} render={() => <ProjectsView /> } />
          <Route exact path={"/resume"} render={() =>  <ResumeView /> }/>
          <Route exact path={"/contact"} render={() => <ContactView /> }/>
        </Switch>
        {/* <Footer />  */}
      </div>
    );
  }
}

export default App;
