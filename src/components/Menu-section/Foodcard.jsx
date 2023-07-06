import "./foodcard.css";
import {AiOutlineStar} from 'react-icons/ai'


export default function Foodcard({ menuData, foodType }) {
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
          <span>{item.foodName}</span>
          <span>Price: ${item.price}</span>
          <div>
            <span>{item.rating}</span>
            <AiOutlineStar/>
          </div>
          </div>
          <div className="cart-interaction">
  
            <div>
              <button className="minus-button">-</button>
              <span>1</span>
              <button className="add-button">+</button>
            </div>
            <button
              className="add-button"
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
