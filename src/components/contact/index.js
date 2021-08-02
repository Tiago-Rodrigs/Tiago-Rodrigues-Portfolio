import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import './style.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: window.location.hash.slice(14),
            greeting: "How can I help you today?"
        }
        window.scrollTo(0, 0)

    }

    send = async () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('message').value;
        let form = document.getElementById('form');
        let greeting = document.getElementById('greeting');

        greeting.innerHTML = "Wait just a second!"

        

        form.innerHTML = `
            <div class="loading-container">
                <i class="fa fa-spinner"></i>

            </div>
                `;
        window.scrollTo(0,0);

        await fetch('https://emailsendeer.herokuapp.com/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                message: msg,
                email: email
            })
        }).then(() => {

            greeting.innerHTML = "You've sent successfully your request."
            form.innerHTML = `
                <i class="fa fa-check-circle"></i>
       `;
            setTimeout(() => {
                document.body.innerHTML = "";
                document.location.replace('/')
                window.scrollTo(0, 0)
            }, 3000);

        })
            .catch(error => {
                // enter your logic for when there is an error (ex. error toast)
                console.log(error)
            })



    }

    render() {
        return (
            <div >
                <div className="background-form">
                    <Link to="/">
                        <i className="fa fa-arrow-left contact-arrow" />
                    </Link>

                    <img src={avatar} className="contact-avatar" />
                    <a href="tel:+351937397475" >
                        <i className="fa fa-phone contact-phone" />
                    </a>

                </div>
                <br />
                <br />
                <br />

                <h1 className="greeting" id="greeting">
                    Thanks for taking the time to reach out.<br />
                    {this.state.msg.length === 0 ? "How can I help you today?" : "Please fill in the form below!"}
                </h1>


                <form className="contact-form" id="form">

                    <div className="email-name-container">
                        <label className="name">Name</label><input type="name" id="name" required></input>
                        <label className="email">Email</label><input type="email" id="email" required></input>
                    </div>

                    <div className="message-container">
                        <label>Message</label>
                        <textarea id="message" >{this.state.msg.length !== 0 ? `Hello, I would like to request a quote for the ${this.state.msg} package/website.` : ""}</textarea>
                        <button onClick={() => this.send()}>Submit</button>
                    </div>
                </form>


            </div>
        );
    }
}

export default Contact;