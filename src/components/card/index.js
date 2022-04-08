import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
function Card(props) {
  const [width, setWidth] = useState(window.innerWidth);

  const {
    title,
    description,
    img,
    technologies,
    codeLink,
    demoLink,
    designLink,
    display,
    type,
    functionalities,
  } = props;

  window.addEventListener("resize", () => {
    let width = window.innerWidth;

    setWidth(width);
  });

  // Which side the card will display
  return display === "left" ? (
    <div className="card-container">
      <div className="img-container">
        {/* Changing the icon according with the project type */}
        {type === "design" ? (
          <div className="black-container">
            <a href={designLink} target="_blank" title="Design">
              {" "}
              <i class="fa-brands fa-figma"></i>
            </a>
          </div>
        ) : (
          <div className="black-container">
            <a href={codeLink} target="_blank" title="Source code">
              {" "}
              <i class="fa-solid fa-code"></i>
            </a>
            <a href={demoLink} target="_blank" title="Live demo">
              <i class="fa-solid fa-eye"></i>
            </a>
          </div>
        )}

        <img src={img} alt="project" className="project-img" />
      </div>
      <div className="info-container blue-border" data-aos="fade-left">
        <h1>{title}</h1>
        <br />
        <br />
        <p>{description}</p>
        <br />
        <strong>User can:</strong>
        <br />
        {functionalities.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}

        <br />
        <div className="technologies-container">
          <strong>Technologies:</strong>
          {/* Mapping the technologies icons array  */}
          {technologies.map((icon) => {
            return <i class={`fa-brands ${icon} technologies-icon`}></i>;
          })}
        </div>
      </div>
    </div>
  ) : (
    <>
      {/* non mobile and tablets will display first the text than the image  */}
      {width >= 760 || width === undefined ? (
        <div className="card-container">
          <div className="info-container black-border" data-aos="fade-right">
            <h1>{title}</h1>
            <br />
            <br />

            <p>{description}</p>
            <br />
            <strong>User can:</strong>
            <br />
            {functionalities.map((item) => {
              return (
                <ul>
                  <li>{item}</li>
                </ul>
              );
            })}

            <br />
            <div className="technologies-container">
              <strong>Technologies:</strong>
              {/* Mapping the technologies icons array  */}
              {technologies.map((icon) => {
                return <i class={`fa-brands ${icon} technologies-icon`}></i>;
              })}
            </div>
          </div>

          <div className="img-container">
            {type === "design" ? (
              <div className="black-container">
                <a href={designLink} target="_blank" title="Design">
                  {" "}
                  <i class="fa-brands fa-figma"></i>
                </a>
              </div>
            ) : (
              <div className="black-container">
                <a href={codeLink} target="_blank" title="Source code">
                  {" "}
                  <i class="fa-solid fa-code"></i>
                </a>
                <a href={demoLink} target="_blank" title="Live demo">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
            )}
            <img src={img} alt="project" className="project-img" />
          </div>
        </div>
      ) : (
        <div className="card-container">
          {/*mobile and tablets will display first the image than the text  */}
          <div className="img-container">
            {type === "design" ? (
              <div className="black-container">
                <a href={designLink} target="_blank" title="Design">
                  {" "}
                  <i class="fa-brands fa-figma"></i>
                </a>
              </div>
            ) : (
              <div className="black-container">
                <a href={codeLink} target="_blank" title="Source code">
                  {" "}
                  <i class="fa-solid fa-code"></i>
                </a>
                <a href={demoLink} target="_blank" title="Live demo">
                  <i class="fa-solid fa-eye"></i>
                </a>
              </div>
            )}
            <img src={img} alt="project" className="project-img" />
          </div>
          <div className="info-container black-border" data-aos="fade-left">
            <h1>{title}</h1>
            <br />
            <br />

            <p>{description}</p>
            <br />
            <strong>User can:</strong>
            <br />
            {functionalities.map((item) => {
              return (
                <ul>
                  <li>{item}</li>
                </ul>
              );
            })}

            <br />
            <div className="technologies-container">
              <strong>Technologies:</strong>
              {/* Mapping the technologies icons array  */}
              {technologies.map((icon) => {
                return <i class={`fa-brands ${icon} technologies-icon`}></i>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Card;
