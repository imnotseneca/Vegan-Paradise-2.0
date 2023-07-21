/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './cartbutton.css'


export default function CartButton ({ onClick, productCount  }) {
    const hasProducts = productCount > 0;
  return (
    <button className={`cart-button ${hasProducts ? 'has-products' : ''}`} onClick={onClick} aria-label='Cart-Button'>
      <AiOutlineShoppingCart />
      {hasProducts && <span className="product-count">{productCount}</span>}
    </button>
  );
}
