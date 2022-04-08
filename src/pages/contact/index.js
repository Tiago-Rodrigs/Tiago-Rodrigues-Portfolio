import { React, Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/avatar-contact.png";
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    this.send = this.send.bind(this);
  }

  async send(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const form = document.getElementById("loading-container");

    document.body.style.overflow = "hidden";

    form.innerHTML = `
            <div class="loading-container">
                <h1>Sending...</h1>
                <i class="fa fa-spinner"></i>
            </div>
                `;
    window.scrollTo(0, 0);

    await axios({
      method: "post",
      url: "",
      data: {
        name,
        message,
        email,
        terms: true,
      },
    })
      .then(() => {
        form.innerHTML = `
            <div class="loading-container">
            <h1>Successfully sent.</h1>
            <i class="fa fa-check-circle"></i>
    
            </div>
            
       `;
      })
      .catch((error) => {
        form.innerHTML = `
            <div class="loading-container">
            <h1>${error.message}.
            Try it again another time</h1>
            <i class="fa fa-times"></i>
            </div>
            
       `;
      });

    setTimeout(
      function () {
        this.props.history.replace("/");
        document.body.style.overflowY = "scroll";
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <div className="contact-container">
        <div id="loading-container">{/* this is the loading screen */}</div>

        <div className="background-form">
          <Link to="/">
            <i className="fa fa-arrow-left contact-arrow" />
          </Link>

          <img src={avatar} className="contact-avatar" />
          <a href="tel:+4917646796891">
            <i className="fa fa-phone contact-phone" />
          </a>
        </div>
        <br />
        <br />
        <br />

        <h1 className="greeting" id="greeting">
          Thanks for taking the time to reach out 🙂 
        </h1>

        <form className="contact-form" id="form" onSubmit={this.send}>
          <div className="email-name-container">
            <label className="name">Name</label>
            <input type="name" id="name" required></input>
            <label className="email">Email</label>
            <input type="email" id="email" required></input>
          </div>

          <div className="message-container">
            <label>Message</label>
            <textarea id="message" required></textarea>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
