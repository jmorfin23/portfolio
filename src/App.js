import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import { AboutView } from './views/AboutView'; 
import { PortfolioView } from './views/PortfolioView'; 
import { ContactView } from './views/ContactView'; 
import { SideBar } from './component/sidebar';
import { ResumeView } from './views/ResumeView'; 
import { NotFound } from './component/not-found'; 

const App = () => {
    return (
      <div className="site-wrapper">
        <SideBar />
        <main className="view-content fw-200">
          <Switch>
            <Route exact path={["/", "/about-me"]} render={() => <AboutView /> }/>
            <Route exact path={"/portfolio"} render={() => <PortfolioView /> } />
            <Route exact path={"/resume"} render={() =>  <ResumeView /> }/>
            <Route exact path={"/contact"} render={() => <ContactView /> }/>
            <Route render={() => <NotFound /> } /> 
          </Switch>
        </main>
      </div>
    );
}

export default App;
