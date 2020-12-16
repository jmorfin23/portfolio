import React, {Component} from 'react'; 
import './index.css'; 
import { Button } from '../Ui/button'; 

export class ContactForm extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            name: "", 
            email: "", 
            subject: "", 
            message: ""
        }
    }

    handleSendForm = e => {
        e.preventDefault(); 
        console.log('inside handle send form'); 

        console.log(this.state)
    }

    render() {
        const { name, email, subject, message } = this.state; 
        return(
            <form className="contact-form margin-top-sm" onClick={e => this.handleSendForm(e)}>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input onChange={e => this.setState({name: e.target.value})} name="name" value={name}></input>
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input onChange={e => this.setState({email: e.target.value})} name="email" value={email}></input>
                </div>
                <div className="form-row">
                    <label htmlFor="subject">Subject</label>
                    <input onChange={e => this.setState({subject: e.target.value})} name="subject" value={subject}></input>
                </div>
                <div className="form-row">
                    <textarea onChange={e => this.setState({message: e.target.value})} name="message" value={message}></textarea>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        )
    }

}
