import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { AboutView } from './views/AboutView'; 
import { PortfolioView } from './views/PortfolioView'; 
import { ContactView } from './views/ContactView'; 
import { SideBar } from './component/sidebar';
import { ResumeView } from './views/ResumeView'; 
import { NotFound } from './component/not-found'; 

// TODO: 
// 1. border box issue 
// 2. transition issues 
// 3. proper html boxes (section, nav, article, main...)
// 4. proper css formatting and using proper rules 
// 5. pixels issue - use rem unless specific needs 

// sidebar-hidden style change - could be confusing in the future 
// add view-content class below 


const App = () => {
    return (
      <div className="site-wrapper">
        <SideBar />
        <Switch>
          <Route exact path={["/", "/about-me"]} render={() => <AboutView /> }/>
          <Route exact path={"/portfolio"} render={() => <PortfolioView /> } />
          <Route exact path={"/resume"} render={() =>  <ResumeView /> }/>
          <Route exact path={"/contact"} render={() => <ContactView /> }/>
          <Route render={() => <NotFound /> } /> 
        </Switch>
      </div>
    );
}

export default App;
