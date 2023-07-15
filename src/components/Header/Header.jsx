/* eslint-disable react/prop-types */
import "./header.css";
import Navbar from "./Navbar";
import CartButton from '../Cart/CartButton'

export default function Header({ headerData, onClick, productCount }) {
  // eslint-disable-next-line react/prop-types
  return (
    <header>
      <a href="/">
        <img
          src="https://res.cloudinary.com/dd8ikgzov/image/upload/c_pad,w_40,h_40/v1686597831/Vegan-Paradise/vegan-logo_yvuv0t.webp"
          alt="vegan-logo"
          className="vegan-logo"
        />
      </a>
      <Navbar
        headerData={headerData}
        onClick={onClick}
        productCount={productCount}
      />
      <CartButton onClick={onClick} productCount={productCount} />
    </header>
  );
}
