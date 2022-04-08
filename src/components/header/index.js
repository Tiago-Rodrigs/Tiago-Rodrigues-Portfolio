import { React, Component, useEffec } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="background">
        <div className="avatar-container">
          <div className="avatar-circle" data-aos="fade-right"></div>

          <img
            src={avatar}
            alt="avatar"
            className="avatar "
            data-aos="fade-down"
          />
        </div>

        <div className="header-title">
          <h1>Tiago Rodrigues</h1>

          <div className="header-subtitle">
            <h2>Junior Frontend Developer</h2>
            <a
              href="https://www.linkedin.com/in/tiago-rodrigues-7456211b2/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Tiago-Rodrigs" target="_blank">
              <i class="fa-brands fa-github-square"></i>
            </a>
            <a href="tel:+4917646796891" target="_blank">
              {" "}
              <i class="fa-solid fa-square-phone"></i>
            </a>
            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=tiagofrontendeveloper@outlook.com"
              target="_blank"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div>
          <Link to="/contact">
            <button className="btn-background">SAY HELLO</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
