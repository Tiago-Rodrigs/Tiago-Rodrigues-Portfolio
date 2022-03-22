import { Link } from "react-router-dom";
import "./style.css";
function ImageCard(props) {
  /* This is a image card component, when hovered the user has to buttons options. One is a links to the website/design
   and the another one redirect a message to the contact page
   */
  return (
    <div className="image-home">
      <div className="link-website">
        <a href={props.link} target="_blank" rel="noreferrer">
          SEE {props.type}
        </a>
        <Link to={`/contact?msg=${props.message}`}>REQUEST QUOTE</Link>
      </div>
      <img src={props.thumbnail} alt={`${props.message} project`} />
    </div>
  );
}
export default ImageCard;
