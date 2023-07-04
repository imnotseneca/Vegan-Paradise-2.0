import "./foodcard.css";

// export default function Foodcard () {
//     return (
//         <div className="foodcard--container">
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//             <div className="singlecard-container">
//                 <img src="https://res.cloudinary.com/dd8ikgzov/image/upload/v1686597560/Vegan-Paradise/foodplate_wqbeqd.png" alt="" className="food-img"/>
//                 <span>Random foodplate</span>
//                 <div className="cart-interaction">
//                     <span>$1</span>
//                     <div>
//                         <button className='minus-button'>-</button>
//                         <span>1</span>
//                         <button className="add-button">+</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

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
          <span>{item.foodName}</span>
          <div className="cart-interaction">
            <span>$1</span>
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
