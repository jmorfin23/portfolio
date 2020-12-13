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
        <>
            <div className={`sidebar${toggle ? " sidebar-hidden" : ""}`}>
                <ProfileInfo /> 
                <SocialLinks /> 
                <NavLinks hideSideBar={() => setToggle(true)}/> 
                <HireMe /> 
            </div>
            <ToggleButton toggle={toggle} toggleNav={() => setToggle(!toggle)} /> 
        </>
    )
};
