import React, {Component} from 'react'; 
import './index.css'; 
import { Button } from '../Ui/button'; 
import ReCAPTCHA from "react-google-recaptcha";


export class ContactForm extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: "", 
            email: "", 
            subject: "", 
            message: "", 
            error: false, 
            status: "Submit", 
            token: ""
        }

        this.initialState = this.state

    }

    handleSendForm = async e => {
        e.preventDefault(); 
        
        const { name, email, subject, message, token } = this.state; 
        
        if (!name || !email || !subject || !message || !token) {
            return this.setState({error: true}); 
        }
        
        this.setState({status: 'Sending...'})
     
        const form = {
            name: name, 
            email: email, 
            subject: subject, 
            message: message
        }; 

        const response = await fetch(process.env.REACT_APP_CONTACT_EMAIL_API_URL, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, 
            body: JSON.stringify(form)
        }); 

        const res = await response.json(); 

        this.setState({status: res.status}); 

        //reset form
        setTimeout(() => this.setState( this.initialState ), 3000); 

    }

    render() {
        const { name, email, subject, message, error, status } = this.state; 
        return(
            <form className="contact-form mt-1 margin-l-r-auto" onSubmit={e => this.handleSendForm(e)}>
                <div className="form-row flex-column">
                    <div className="form-row">
                        <div className="form-item align-start">
                            <input className="padding-05 fs-1" onChange={e => this.setState({name: e.target.value})} name="name" value={name} placeholder="Name" type="text"></input>
                            {(error && !name) ? (<label className="form-error mt-05" htmlFor="name">Please fill out your name</label>): null}
                        </div>
                        <div className="form-item align-start">
                            <input className="padding-05 fs-1" onChange={e => this.setState({email: e.target.value})} name="email" value={email} placeholder="Email" type="email"></input>
                            {(error && !email) ? (<label className="form-error mt-05" htmlFor="email">Please fill out your email</label>): null}
                        </div>
                    </div>
                    <div className="form-item">
                        <input className="padding-05 fs-1" onChange={e => this.setState({subject: e.target.value})} name="subject" value={subject} placeholder="Subject" type="text"></input>
                        {(error && !subject) ? (<label className="form-error mt-05" htmlFor="subject">Please add a subject</label>): null}
                    </div>
                    <div className="form-item">
                        <textarea className="padding-05 fs-1" onChange={e => this.setState({message: e.target.value})} name="message" value={message} rows="18" placeholder="Write your message here." type="text"></textarea>
                        {(error && !message) ? (<label className="form-error mt-05" htmlFor="message">Please fill out your message</label>): null}
                    </div>
                    <div className="mb-05 padding-l-r-025">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            onChange={token => this.setState({token: token})}
                            onExpired={() => this.setState({token: ""})}
                        />
                    </div>
                    <div className="form-item">
                        <Button className="form-submit padding-05 fs-1" type="submit">{status}</Button>
                    </div>
                </div>
            </form>
        )
    }
}
