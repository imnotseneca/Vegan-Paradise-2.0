/**
 * CartList Component
 *
 * This component represents a cart list for displaying and managing items in a shopping cart.
 * It includes functionality for removing products, adjusting quantities, and generating a text
 * message for order details.
 *
 * @component
 * @param {boolean} visibility - Controls the visibility of the cart modal.
 * @param {Array} products - An array of products in the cart.
 * @param {Function} onProductRemove - Callback function when a product is removed from the cart.
 * @param {Function} onClose - Callback function when the cart modal is closed.
 * @param {Function} onQuantityChange - Callback function when the quantity of a product is changed.
 * @returns {JSX.Element} JSX representation of the CartList component.
 *
 * @example
 * // Example usage of CartList component
 * <CartList
 *   visibility={true}
 *   products={[{ id: 1, foodName: 'Pizza', price: 10, count: 2, imageURL: 'pizza.jpg' }]}
 *   onProductRemove={(product) => handleProductRemove(product)}
 *   onClose={() => handleClose()}
 *   onQuantityChange={(productId, quantity) => handleQuantityChange(productId, quantity)}
 * />
 */

/* eslint-disable react/prop-types */
import "./cartlist.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMemo } from "react";

export default function CartList({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  function parseCurrency(value) {
    return value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  }
  const text = useMemo(() => {
    return products
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.count} - ${product.foodName} - ${parseCurrency(
              product.price * product.count
            )}\n`
          ),
        `Hi there! I want to make this order:\n\n`
      )
      .concat(
        `\n*Total:* ${parseCurrency(
          products.reduce(
            (total, product) => total + product.price * product.count,
            0
          )
        )}\n\n`
      )
      .concat(`*Please send it to:* [ADRESS]. [NAME] will receive it.\n`)
      .concat(`\n*Specifications:* [ADD_IF_ANY]`);
  }, [products]);

  const productsCartList = products.map((product) => {
    return (
      <div className="cartlist-product" key={product.id}>
        <div className="cartlist-product-info">
          <div className="cartlist-product-description">
            <h3 className="cartlist-product-title">{product.foodName}</h3>
            <img
              className="cartlist-product-image"
              src={product.imageURL}
              alt={product.foodName}
            />
            <p>{product.foodDesc}</p>
          </div>
          <span className="cartlist-product-price">
            Amount: ${product.price * product.count}
          </span>
          <select
            className="cartlist-count"
            value={product.count}
            name={product.foodName}
            id={product.id}
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
            className="btn remove-btn btn-trash"
            onClick={() => onProductRemove(product)}
            aria-label="Remove-button"
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
          <button
            className="btn close-btn"
            onClick={onClose}
            aria-label="Close-button"
          >
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
            <div className="btn checkout-btn">
              <a
                aria-label="checkout-link"
                href={`https://wa.me/542346569585?text=${encodeURIComponent(
                  text
                )}`}
                rel="noreferrer"
                target="_blank"
              >
                Complete order
              </a>
                <img
                  className="wpp-logo"
                  src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff"
                  width={25}
                  height={20}
                  alt="wpp-logo"
                />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
