import "./Cv.css";
import { Link } from "react-router-dom";
const Cv = () => {
  return (
    <div className="presentation">
      <div className="presentation_heading">
        <h1>CV</h1>
      </div>
      <div className="docs-container">
        <div className="cv">
          <Link to="https://drive.google.com/file/d/17-c8CsCXJoF_y894mukNomVVZ0ZqUWxF/view?usp=share_link">
            Curriculum Vite
          </Link>
          <p className="cv-text">is being updated</p>
        </div>
      </div>
    </div>
  );
};

export default Cv;