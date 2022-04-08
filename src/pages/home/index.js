import { React, Component } from "react";
import Header from "../../components/header";
import projects from "../../projects";
import Pagination from "../../components/pagination";
import Card from "../../components/card";
import "../../global.css";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      {/* Header Component */}
      <Header />

      <div>
        {/* Pagination Component. All of the props are to identify the page and style. */}
        <Pagination page="home" about="inactive-btn" home="active-btn" />

        <div className="portfolio-container">
          {projects.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                img={item.img}
                technologies={item.technologies}
                codeLink={item.codeLink}
                demoLink={item.demoLink}
                designLink={item.designLink}
                display={item.display}
                type={item.type}
                functionalities={item.functionalities}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
