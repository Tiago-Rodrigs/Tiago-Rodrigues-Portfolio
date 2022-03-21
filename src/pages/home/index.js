import { React, Component } from "react";
import Header from "../../components/header";
import loja from "../../assets/online-store.jpg";
import dog from "../../assets/dog-search.jpg";
import startup from "../../assets/startup.jpg";
import wedding from "../../assets/wedding.JPG";
import dkorr from "../../assets/dkorr.png";
import beezy from "../../assets/beezy.png";
import emailTemplate from "../../assets/email template.jpg";
import Pagination from "../../components/pagination";
import ImageCard from "../../components/image";
import "../../global.css";

class Home extends Component {
  render() {
    // Array of images and information about projects
    let projects = [
      {
        message: "startup",
        link: "https://www.figma.com/file/n71kIcyf0Axl8tILcXM07R/Softunit",
        thumbnail: startup,
        type: "DESIGN",
      },

      {
        message: "startup",
        link: "https://beezy-challenge.netlify.app/",
        thumbnail: beezy,
        type: "WEBSITE",
      },

      {
        message: "startup",
        link: "https://dkorr.fr",
        thumbnail: dkorr,
        type: "WEBSITE",
      },
      {
        message: "wedding",
        link: "https://this-is-a-wedding-demo.netlify.app/index.html",
        thumbnail: wedding,
        type: "WEBSITE",
      },
      {
        message: "store",
        link: "https://www.figma.com/file/VljQOUwgcAdO4xMw4SqyoP/Sua-promocao-clt-Manuel?node-id=0%3A1",
        thumbnail: loja,
        type: "DESIGN",
      },

      {
        message: "blog",
        link: "https://www.figma.com/file/Wb3Xt8bofbgdgG3RMQvMO0/Untitled?node-id=5%3A7",
        thumbnail: dog,
        type: "DESIGN",
      },
      {
        message: "email",
        link: "https://www.figma.com/file/HGiDPPPFA7ikn7OTNbVzd4/email-template?node-id=0%3A1",
        thumbnail: emailTemplate,
        type: "DESIGN",
      },
    ];
    return (
      <div>
        {/* Header Component */}
        <Header />
        <div className="container">
          {/* Pagination Component. All of the props are to identify the page and style. */}
          <Pagination
            page="home"
            about="white-background"
            home="black-background"
          />

          <br />
          <br />
          <br />

          <div className="image-container">
            {/* Gets all the information from projects array and send one by one to the image component */}
            {projects.map((item) => {
              return (
                <ImageCard
                  thumbnail={item.thumbnail}
                  message={item.message}
                  link={item.link}
                  type={item.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
