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
            Hello, my name is Tiago, I am 24 years old and I am a technology and
            sports enthusiast. In my free time I like to go to nature, read
            books, and spend some time with my family. I am a hardworking,
            organized, focused, and determined person. I am self-taught and I
            enjoy learning new things (especially things that are challenging to
            learn). My purpose in life is to help people and develop myself.
        
          </p>

          <br />
        </div>

        <br />

        <div className="about-container">
          <h1>What are my skills?</h1>

          <Percentage technology="HTML" percentage="95%" />
          <Percentage technology="CSS" percentage="95%" />
          <Percentage technology="JAVASCRIPT" percentage="90%" />
          <Percentage technology="REACT JS" percentage="85%" />
          <Percentage technology="NODE JS" percentage="35%" />
          <Percentage technology="FIREBASE" percentage="30%" />
          <Percentage technology="MONGODB" percentage="27%" />
          <Percentage technology="FIGMA" percentage="90%" />
          <Percentage technology="GIT" percentage="80%" />
        </div>

        <button
          className="cv-btn"
          type="submit"
          onClick={() =>
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/react-app-acd6d.appspot.com/o/CV_Tiago%20Rodrigues%20Pereira.pdf?alt=media&token=d6ef8f22-21a7-41e5-8ac7-d8afc5003be6"
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
