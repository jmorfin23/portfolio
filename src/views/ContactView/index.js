import React from 'react'; 
import './index.css'; 
import { ContactForm } from '../../component/contact-form'; 
import { SocialLinks } from '../../component/social-links'; 

export const ContactView = () => {
    return(
        <div className="text-centered">
            <section className="contact-heading padding-3">
                <h1 className="fs-25">Contact</h1>
                <p className="mt-1">
                    Interested in hiring me for a project? Please send me a message using the form
                    below! 
                </p>
                <p className="mt-1">Want to stay connected? Follow my social media platforms below! </p>
                <SocialLinks />
            </section>
            <section className="contact-container padding-3">
                <h2>Send me a message!</h2>
                <ContactForm /> 
            </section>
        </div>
    )
}