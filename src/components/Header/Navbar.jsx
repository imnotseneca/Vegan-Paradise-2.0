/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./navbar.css";

export default function Navbar({headerData }) {
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
  const navItems = headerData.map((element) => {
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
      {windowWidth > 896 ? (
        <nav className="nav-bar">
          <ul className="nav-menu">{navItems}</ul>
        </nav>
      ) : (
        <nav className={sideBar ? "nav-bar-open" : "nav-bar closed"}>
          {!sideBar ? (
            <button className="nav-btn" onClick={showSideBar} aria-label='side-bar-button'>
              <FaBars />
            </button>
          ) : (
            <Sidebar
              // eslint-disable-next-line react/prop-types
              navBarData={headerData}
              sideBar={sideBar}
              showSideBar={showSideBar}
            />
          )}
        </nav>
      )}
    </>
  );
}
