import { Link } from "react-router-dom";
import "./style.css";
function Pagination(props) {
  return (
    <div className="pagination-container">
      <Link to="/">
        <h1 className={`home-title ${props.home}`}>Portfolio</h1>
      </Link>
      <Link to="about">
        <h1 className={`about-title ${props.about}`}>About</h1>
      </Link>

      <hr className="line" />
    </div>
  );
}
export default Pagination;
