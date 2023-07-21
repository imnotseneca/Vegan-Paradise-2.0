import './menu.css'
import Options from "../components/Menu-section/Options"
import Foodcard from "../components/Menu-section/Foodcard"
import {menuData} from '../data/menuData'
import {useState} from 'react'




// export default function Menu() {
//   const [foodType, setFoodType] = useState(menuData[0].foodType);

//   const handleOptionClick = (foodType) => {
//     setFoodType(foodType);
//   };

//   return (
//     <section id="menu" className="menu-section">
//       <h2 className="menu-header">Our menu</h2>
//       <Options handleOptionClick={handleOptionClick} />
//       <div className="menu-container">
//         <Foodcard foodType={foodType} />
//       </div>
//     </section>
//   );
// }
// eslint-disable-next-line react/prop-types
export default function Menu({handleAddToCart, productsInCart, isDisabled}) {
  const [foodType, setFoodType] = useState("Hamburguers");

  const handleOptionClick = (selectedFoodType) => {
    setFoodType(selectedFoodType);
  };

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-header">Our menu</h2>
      <p className='menu-paragraph'>Slide and click on logos to see our selection!</p>
      <Options menuData={menuData} handleOptionClick={handleOptionClick} />
      <div className="menu-container">
        <Foodcard menuData={menuData} foodType={foodType} handleAddToCart={handleAddToCart} productsInCart={productsInCart} isDisabled={isDisabled}/>
      </div>
    </section>
  );
}

