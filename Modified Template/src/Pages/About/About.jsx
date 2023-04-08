import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="presentation">
      <div className="presentation_heading">
        <h1>About</h1>
      </div>
      <div className="docs-container">
        <div className="cv">
          <Link to="/cv">Cv in English</Link>
          <p>Updating</p>
        </div>
      </div>
    </div>
  );
};

export default About;
