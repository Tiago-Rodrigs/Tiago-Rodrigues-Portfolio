import { Link } from "react-router-dom";
import "./style.css";
function Pagination(props) {
  return (
    <div>
      <Link to="/">
        <h1 className={`home-title ${props.home}`}>Portfolio</h1>
      </Link>
      <Link to="about">
        <h1 className={`about-title ${props.about}`}>Service</h1>
      </Link>

      <br />

      <div className="ball-container">
        <div className={`ball-${props.page}`}></div>
        <hr />
      </div>
    </div>
  );
}
export default Pagination;
