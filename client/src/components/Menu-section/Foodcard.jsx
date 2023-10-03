/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./foodcard.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";


/*
generateStars function takes the "rating" property, converts it to a number, rounds it, and then creates an array of AiFillStar components based on that rounded number. The {generateStars(item.rating)} expression is then used to dynamically render the stars in the component.

This way, the number of stars will be based on the "rating" property of each food item in your data.js file.

*/
function generateStars(rating) {
  const numStars = Math.round(parseFloat(rating));
  const starsArray = Array.from({ length: numStars }, (_, index) => (
    <AiFillStar key={index} />
  ));
  return starsArray;
}

// eslint-disable-next-line react/prop-types
export default function Foodcard({
  menuData,
  foodType,
  handleAddToCart,
  productsInCart,
}) {
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
          <img
            src={item.imageURL}
            width={250}
            height={200}
            alt={item.alt}
            className="food-img"
          />
          <div className="foodcard-description">
            <h3 className="food-name">{item.foodName}</h3>
            <span className="food-description">{item.foodDesc}</span>
            <div>
              <span className="food-price">
                <IconContext.Provider
                  value={{ color: "yellow", title: "stars rating" }}
                >
                  {generateStars(item.rating)}
                </IconContext.Provider>
              </span>
            </div>
            <p className="food-price-text">
              Price per unit:{" "}
              <span className="food-price-number">${item.price}</span>
            </p>
          </div>
          <div className="cart-interaction">
            <button
              className="addcart-button"
              onClick={() => handleAddToCart(item)}
              aria-label="Add-ToCart-Button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
