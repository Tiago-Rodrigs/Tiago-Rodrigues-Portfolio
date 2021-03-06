import { React, Component } from "react";
import Header from "../../components/header";
import Pagination from "../../components/pagination";
import "./style.css";
import "../../global.css";
import Percentage from "../../components/percentage";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Pagination page="about" about="active-btn" home="inactive-btn" />

        <br />
        <br />
        <br />

        <div className="about-container">
          <h1>Who am I?</h1>

          <p>
            Hello 🙂 My name is Tiago, I'm 24 years old and a technology and
            sports enthusiast. In my free time I like to go to nature, read
            books and spend time with my family. I'm a hardworking, organized,
            focused and determined person. I'm self-taught and I enjoy learning
            new things - especially things that are challenging to learn. My
            purpose in life is to help people and develop myself.
          </p>

          <br />
        </div>

        <br />

        <div className="about-container">
          <h1>What are my skills?</h1>

          <Percentage technology="HTML" percentage="95%" />
          <Percentage technology="CSS" percentage="95%" />
          <Percentage technology="JAVASCRIPT" percentage="90%" />
          <Percentage technology="FIGMA" percentage="90%" />

          <Percentage technology="REACT JS" percentage="85%" />
          <Percentage technology="GIT" percentage="80%" />
          <Percentage technology="NODE JS" percentage="35%" />
          <Percentage technology="FIREBASE" percentage="30%" />
          <Percentage technology="MONGODB" percentage="27%" />
        </div>

        <button
          className="cv-btn"
          type="submit"
          onClick={() =>
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/react-app-acd6d.appspot.com/o/CV_Tiago%20Rodrigues%20Pereira.pdf?alt=media&token=7b7b22df-0e7b-44c3-bfa8-adb2769b5863"
            )
          }
        >
          Download CV{" "}
        </button>
      </div>
    );
  }
}

export default About;
