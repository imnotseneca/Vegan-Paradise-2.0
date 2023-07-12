/* eslint-disable no-unused-vars */
import "./foodcard.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

// eslint-disable-next-line react/prop-types
export default function Foodcard({ menuData, foodType, handleAddToCart, productsInCart }) {
  // eslint-disable-next-line react/prop-types
  const selectedMenuData = menuData.find((data) => data.foodType === foodType);

  if (!selectedMenuData) {
    return (
      <div className="foodcard--container">
        <p>No items found for this food type.</p>
      </div>
    );
  }
  
  return (
    <div className="foodcard--container">
      {selectedMenuData.items.map((item, index) => (
        <div className="singlecard-container" key={index}>
          <img src={item.imageURL} alt={item.alt} className="food-img" />
          <div className="foodcard-description">
            <h4 className="food-name">{item.foodName}</h4>
            <span className="food-description">{item.foodDesc}</span>
            <span className="food-price">Price per unit: ${item.price}</span>
            <div>
              <span className="food-price">
                <IconContext.Provider
                  value={{ color: "yellow", title: "stars rating" }}
                >
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </IconContext.Provider>
              </span>
            </div>
          </div>
          <div className="cart-interaction">
            <button
              className="addcart-button"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
