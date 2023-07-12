/* eslint-disable react/prop-types */
import "./cartlist.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartList({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  const productsCartList = products.map((product) => {
    return (
      <div className="cartlist-product" key={product.id}>
        <div className="cartlist-product-info">
          <div className="cartlist-product-description">
            <h3 className="cartlist-product-title">{product.foodName}</h3>
              <img  className='cartlist-product-image' src={product.imageURL} alt={product.foodName} />
            <p>{product.foodDesc}</p>
          </div>
          <span className="cartlist-product-price">
            Amount: ${product.price * product.count}
          </span>
          <select
            className="cartlist-count"
            value={product.count}
            onChange={(event) => {
              onQuantityChange(product.id, event.target.value);
            }}
          >
            {[...Array(10).keys()].map((number) => {
              const num = number + 1;
              return (
                <option value={num} key={num}>
                  {num}
                </option>
              );
            })}
          </select>
          <button
            className="btn remove-btn"
            onClick={() => onProductRemove(product)}
          >
            <RiDeleteBin6Line size={14} />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div
      className="cartlist-modal"
      style={{ display: visibility ? "block" : "none" }}
    >
      <div className="cartlist">
        <div className="cartlist-header">
          <h2>Cart List</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={24} />
          </button>
        </div>
        <div className="cartlist-products">
          {products.length === 0 && (
            <span className="cartlist-empty">
              {" "}
              Your cart is currently empty{" "}
            </span>
          )}
          {products.length > 0 && productsCartList}
          {products.length > 0 && (
            <button className="btn checkout-btn">Complete your order</button>
          )}
        </div>
      </div>
    </div>
  );
}
