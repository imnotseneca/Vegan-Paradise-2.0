import "./foodcard.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

// eslint-disable-next-line react/prop-types
export default function Foodcard({ menuData, foodType }) {
  // eslint-disable-next-line react/prop-types
  const selectedMenuData = menuData.find((data) => data.foodType === foodType);

  if (!selectedMenuData) {
    return (
      <div className="foodcard--container">
        <p>No items found for this food type.</p>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    // Implement your logic for adding the item to the cart here
    console.log(`Added ${item.foodName} to cart`);
  };
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
            <div>
              <button className="minus-button">-</button>
              <span>1</span>
              <button className="add-button">+</button>
            </div>
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
