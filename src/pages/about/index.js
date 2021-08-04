import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header'
import Packages from '../../components/packages';
import react_icon from '../../assets/react.png';
import html_icon from '../../assets/html.png';
import git_icon from '../../assets/git.png';
import css_icon from '../../assets/css.png';
import js_icon from '../../assets/js.png';
import figma_icon from '../../assets/figma-1.svg';
import firebase_icon from '../../assets/firebase-1.svg';
import nodejs_icon from '../../assets/nodejs-icon.svg';
import mongodb_icon from '../../assets/mongodb-icon-1.svg';
import './style.css';


class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="about-container">
                    <Link to="/">
                        <h1 className="portfolio-title">Portfolio</h1>
                    </Link>
                    <Link to="about">
                        <h1 className="about-title">Service</h1>
                    </Link>

                    <br />
                    <div className="ball-container">
                        <div className="ball2"></div>
                        <hr />
                    </div>

                    <br />
                    <br />
                    <br />

                    <div className="introduction">
                        <h1>Who am I?</h1>
                        <p>Hello! My name is Tiago. I have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.

                            On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Frontend Development Tools.

                            In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                            <br /><strong>Below is a list of my current technical skills:</strong>
                        </p>
                        <br />
                        <br />

                        <div className="skills-container">
                            <img src={html_icon}/>
                            <img src={css_icon}/>
                            <img src={js_icon}/>
                            <img src={react_icon}/>
                            <img src={git_icon}/>
                            <img src={nodejs_icon}/>
                            <img src={mongodb_icon}/>
                            <img src={firebase_icon}/>
                            <img src={figma_icon}/>
                        </div>

                    </div>
                    <br />



                    <br />

                    <div >

                        <br />
                        <br />
                        <br />
                        <Packages />

                    </div>

                </div>

            </div>
        );
    }
}

export default About;