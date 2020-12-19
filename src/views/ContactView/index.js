import React from 'react'; 
import './index.css'; 
import { ContactForm } from '../../component/contact-form'; 
import { SocialLinks } from '../../component/social-links'; 

export const ContactView = () => {
    return(
        <div className="view-content text-centered">
            <div className="contact-heading padding-xl">
                <h1>Contact</h1>
                <p className="margin-top-sm fw-200">
                    Interested in hiring me for a project? Please send me a message using the form
                    below! 
                </p>
                <p className="margin-top-sm fw-200">Want to stay connected? Follow my social media platforms below! </p>
                <SocialLinks />
            </div>
            <div className="contact-container padding-xl">
                <h2>Send me a message!</h2>
                <ContactForm /> 
            </div>
        </div>
    )
}