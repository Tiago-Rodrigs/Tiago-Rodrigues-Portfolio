import { React, Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import background from "../../assets/background.mp4";
import poster_video from "../../assets/background-poster.png";
import "./style.css";

class Header extends Component {
  share = async () => {
    const toShare = {
      title: "Frontend Web Developer - Portfoilio Website",
      text: "Tiago Rodrigues is a web developer who specializes in building (and occasionally designing) exceptional digital experiences.",
      url: document.location.href,
    };

    try {
      await navigator.share(toShare);
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className="background wrapper">
          <h1 className="typing-demo">I love coding :)</h1>

          <Link to="/contact">
            <button className="btn-background">SAY HELLO</button>
          </Link>

          <video
            loop={true}
            muted={true}
            autoPlay={true}
            id="homeVideo"
            poster={poster_video}
          >
            <source src={background} type="video/mp4" />
          </video>
        </div>

        <img src={avatar} alt="avatar" className="avatar" />

        <div className="header-title">
          <h1>Tiago Rodrigues</h1>
          <h2>Frontend Developer</h2>
        </div>

        <i className="fa fa-share header-share" onClick={this.share} />
      </div>
    );
  }
}

export default Header;
