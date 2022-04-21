import { React, Component, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import avatar from "../../assets/avatar-support.png";
import "./style.css";

const Contact = (props) => {
  window.scrollTo(0, 0);
  const form = useRef();

  const send = async (e) => {
    e.preventDefault();

    const loading = document.getElementById("loading-container");

    document.body.style.overflow = "hidden";

    loading.innerHTML = `
            <div class="loading-container">
                <h1>Sending...</h1>
                <i class="fa fa-spinner"></i>
            </div>
                `;
    window.scrollTo(0, 0);

    await emailjs
      .sendForm(
        "service_wzpk409",
        "template_3q57pte",
        form.current,
        "3p09YdxStxEqmlWdX"
      )
      .then(
        () => {
          loading.innerHTML = `
        <div class="loading-container">
        <h1>Message successfully sent.</h1>
        <i class="fa fa-check-circle"></i>

        </div>
        
   `;
        },
        (error) => {
          loading.innerHTML = `
        <div class="loading-container">
        <h1>${error.text}.
        Try it again another time</h1>
        <i class="fa fa-times"></i>
        </div>
        
   `;
        }
      );

    setTimeout(function () {
      window.location.replace("/");
      document.body.style.overflowY = "scroll";
    }, 3000);
  };

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

      <form className="contact-form" id="form" onSubmit={send} ref={form}>
        <div className="email-name-container">
          <label className="name">Name</label>
          <input type="name" id="name" name="from_name" required></input>
          <label className="email">Email</label>
          <input type="email" id="email" name="from_email" required></input>
        </div>

        <div className="message-container">
          <label>Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
