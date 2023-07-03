import "./header.css";
import Navbar from "./Navbar";

export default function Header(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <header>
      <a href="/">
        <img
          src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597831/Vegan-Paradise/vegan-logo_yvuv0t.png"
          alt="vegan-logo"
          className="vegan-logo"
        />
      </a>
      <Navbar props={props.headerData} />
    </header>
  );
}
