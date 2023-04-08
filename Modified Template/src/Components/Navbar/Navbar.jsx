import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import "./Ssidebar.css";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState("false");
  const [inputText, setInputText] = useState("");
  const [Search, setSearch] = useState(false);
  const [toggleSideBar, SetToggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const ClearText = () => {
    setInputText("");
  };
  
  return (
    <>
      {Search && (
        <div
          className={isScrolled ? "searchBar searchBar-Shadow" : "searchBar"}
        >
          <div className="searchBar-wrap">
            <AiOutlineArrowLeft
              style={{ marginLeft: "25px", fontSize: "20px", color: "#656565" }}
              onClick={() => {
                setSearch(!Search);
              }}
            />
            <div className="searchbox">
              <div className="search-wrap">
                <AiOutlineSearch
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "#656565",
                  }}
                />
                <input
                  type="text"
                  placeholder="Search this site"
                  onChange={handleChange}
                  value={inputText}
                />
                {inputText.length > 0 && (
                  <RxCross1
                    style={{
                      marginRight: "15px",
                      fontSize: "20px",
                      color: "#656565",
                    }}
                    onClick={ClearText}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className={isScrolled ? "nav_shadow" : ""}>
        <div className="navbar-wrapper">
          <div className="nav-left">
            <GiHamburgerMenu
              className="ham"
              style={{
                margin: " 0px 25px",
                fontSize: "20px",
                color: "#656565",
              }}
              onClick={() => {
                SetToggleSidebar(!toggleSideBar);
              }}
            />
            <Link to="/">
              <span className="name">John Doe</span>
            </Link>
          </div>
          <div className="menu">
            <ul>
              <Link to="/">
                {" "}
                <li style={{ fontWeight: "bold" }}>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/cv">
                <li>Cv</li>
              </Link>
              <Link to="/vides">
                <li>Ortopedic Videos</li>
              </Link>
              <Link to="/presentation">
                <li>Presenation</li>
              </Link>
            </ul>
            <div className="search">
              <AiOutlineSearch
                style={{ fontSize: "25px" }}
                onClick={() => {
                  setSearch(!Search);
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {toggleSideBar && (
        <div className={toggleSideBar ? "sidebar" : "sidebar scliked"}>
          <div className="sidebar-wrapper">
            <div className="sidebar-cross">
              <RxCross1
                style={{ fontSize: "20px", color: "#fff" }}
                onClick={() => {
                  SetToggleSidebar(!toggleSideBar);
                }}
              />
            </div>
            <div className="sidebar-entities">
              <div className="item">
                <Link to="/">Home</Link>
              </div>
              <div className="item">
                <Link to="/about">About</Link>
              </div>
              <div className="item">
                <Link to="/cv">Cv</Link>
              </div>
              <div className="item">
                <Link to="/vides">Ortopedic Videos</Link>
              </div>
              <div className="item">
                <Link to="/presentation">Presentation</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;