import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
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

  const navItems = props.props.map((element) => {
    if (element.navbar) {
      return (
        <>
          <MdOutlineRestaurantMenu />
          <li key={element.id} className="navbar-item">
            <a href={element.path} className="navbar-link">
              {element.title}
            </a>
          </li>
        </>
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
        <nav className={sideBar ? "nav-bar-open" : "nav-bar"}>
          {!sideBar ? (
            <button className="nav-btn" onClick={showSideBar}>
              <FaBars />
            </button>
          ) : (
            <Sidebar
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
