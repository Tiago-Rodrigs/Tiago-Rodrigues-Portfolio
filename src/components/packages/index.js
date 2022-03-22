import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Packages extends Component {
  changeOption =  (option) => {
    if (option !== null) {
       document.getElementById(option).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  render() {
    return (
      <div className="packages-container">
        <div className="packages-title">
          <a onClick={() => this.changeOption("basic")}>Basic</a>

          <a onClick={() => this.changeOption("standard")}>Standard</a>

          <a onClick={() => this.changeOption("premium")}>Premium</a>
        </div>

        <div className="packages-options">
          <div className="package" id="basic">
            <div className="basic-selection"></div>
            <article className="container-package">
              <ul className="container-package-options">
                <li>
                  <i class="fa fa-check green"></i>1 Page
                </li>
                <li>
                  <i class="fa fa-check green"></i>Include Source Code
                </li>
                <li>
                  <i class="fa fa-check green"></i>Responsive Design
                </li>
                <li>
                  <i class="fa fa-check gray"></i>Logo
                </li>
                <li>
                  <i class="fa fa-check gray"></i>Design Customization
                </li>
              </ul>

              <div className="time-delivary">
                <i class="fa fa-clock"></i>
                <p>1 Day Delivery</p>
              </div>

              <div className="btn-container">
                <Link to="/contact?msg=Basic">Request quote</Link>
                <Link to="/contact">Customize a package</Link>
              </div>
            </article>
          </div>

          <div className="package" id="standard">
            <div className="standard-selection"></div>
            <article className="container-package">
              <ul className="container-package-options">
                <li>
                  <i class="fa fa-check green"></i>3 Pages
                </li>
                <li>
                  <i class="fa fa-check green"></i>Include Source Code
                </li>
                <li>
                  <i class="fa fa-check green"></i>Responsive Design
                </li>
                <li>
                  <i class="fa fa-check gray"></i>Logo
                </li>
                <li>
                  <i class="fa fa-check gray"></i>Design Customization
                </li>
              </ul>

              <div className="time-delivary">
                <i class="fa fa-clock"></i>
                <p>3 Days Delivery</p>
              </div>

              <div className="btn-container">
                <Link to="/contact?msg=Standard">Request quote</Link>
                <Link to="/contact">Customize a package</Link>
              </div>
            </article>
          </div>

          <div className="package" id="premium">
            <div className="premium-selection"></div>
            <article className="container-package">
              <ul className="container-package-options">
                <li>
                  <i class="fa fa-check green"></i>5 Pages
                </li>
                <li>
                  <i class="fa fa-check green"></i>Include Source Code
                </li>
                <li>
                  <i class="fa fa-check green"></i>Responsive Design
                </li>
                <li>
                  <i class="fa fa-check green"></i>Logo
                </li>
                <li>
                  <i class="fa fa-check green"></i>Design Customization
                </li>
              </ul>

              <div className="time-delivary">
                <i class="fa fa-clock"></i>
                <p>5 Days Delivery</p>
              </div>

              <div className="btn-container">
                <Link to="/contact?msg=Premium">Request quote</Link>
                <Link to="/contact">Customize a package</Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;
