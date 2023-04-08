import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [ClickInfo, setClickInfo] = useState(false);
  const date = `March 6, 2023`;
  return (
    <>
      <div className="footer">
        <div className="f-container">
          <p className="f-text">John@John.md</p>
          <p className="f-text">&copy; All rights reserved. </p>
          <p className="f-text">
            &copy; All rights of the content of the site are reserved.
          </p>
        </div>
      </div>
      <div
        className={ClickInfo ? "info info_Clicked" : "info"}
        onClick={() => {
          setClickInfo(!ClickInfo);
        }}
      >
        <span>i</span>
        {ClickInfo && (
          <div className="info-panel">
            <p>Page updated {date}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;