import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./navbar.css";

export default function Navbar(props) {
  const [sideBar, setSideBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // eslint-disable-next-line react/prop-types
  const navItems = props.props.map((element) => {
    if (element.navbar) {
      return (
        <li key={element.id} className="navbar-item">
          <a href={element.path} className="navbar-link">
            {element.title}
          </a>
        </li>
      );
    }
  });

  return (
    <>
      {windowWidth > 640 ? (
        <nav className="nav-bar">
          <ul className="nav-menu">{navItems}</ul>
        </nav>
      ) : (
        <nav className={sideBar ? "nav-bar-open" : "nav-bar closed"}>
          {!sideBar ? (
            <button className="nav-btn" onClick={showSideBar}>
              <FaBars />
            </button>
          ) : (
            <Sidebar
              // eslint-disable-next-line react/prop-types
              navBarData={props.props}
              sideBar={sideBar}
              showSideBar={showSideBar}
            />
          )}
        </nav>
      )}
    </>
  );
}