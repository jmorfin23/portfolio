import React, { useState } from 'react'; 
import './index.css';
import { ToggleButton } from '../toggleButton'; 
import { ProfileInfo } from '../profile-info'; 
import { SocialLinks } from '../social-links';
import { NavLinks } from '../nav-links'; 
import { HireMe } from '../hire-me'; 

export const SideBar = () => {
    const [toggle, setToggle] = useState(false); 
    return(
        <header className={`sidebar-container padding-sm${toggle ? " height-auto" : ""}`}>
            <div className="sidebar-heading">
                <ToggleButton toggleNav={() => setToggle(!toggle)} />
                <h3 className="margin-auto">Jonathan Morfin</h3>
            </div>
            <div className={`sidebar-content${toggle ? " sidebar-hidden" : ""}`}>
                <ProfileInfo /> 
                <SocialLinks /> 
                <NavLinks hideSideBar={() => setToggle(true)}/> 
                <HireMe /> 
            </div> 
        </header>
    )
};
