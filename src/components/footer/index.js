import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7510f7"
          fill-opacity="1"
          d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,90.7C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="footer-text">
        <footer>Copyright © My Portfolio by Tiago Rodrigues</footer>
      </div>
    </div>
  );
}

export default Footer;
