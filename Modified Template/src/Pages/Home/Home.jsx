import "./Home.css";
import Symbol from "../../Assets/symbol.png";
import { useState } from "react";
const Home = () => {
  const [anime, setAnime] = useState("false");
  return (
    <div className="home">
      <p className="home-heading">Home</p>
      <div className="home-container">
        <div className="home-wrapper">
          <div className="home-img">
            <img src={Symbol} />
          </div>
          <div className="anime-box">
            <div className="normal-text">John Doe</div>
            <div className="tilted-text">
              <div className="tilt">J</div>
              <div className="tilt">D</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;