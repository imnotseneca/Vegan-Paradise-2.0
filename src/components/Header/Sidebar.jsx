/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import "./sidebar.css";

export default function Sidebar(props) {
  const navElements = props.navBarData.map((e) => {
    return (
        
      <li className="aside-item" key={e.id}>
        
        <a href={e.path}>{e.title}</a>
      </li>
    );
  });
  return (
    <aside className={props.sideBar ? 'aside-container active' : "aside-container"}>
      <div className="close-sidebar active">
        <button className={"nav-btn nav-close-btn"} onClick={props.showSideBar}>
          <FaTimes />
        </button>
      </div>
      <h3 className="aside-header">Vegan paradise</h3>
      <ul className="sidebar-categories">{navElements}</ul>
    </aside>
  );
}
