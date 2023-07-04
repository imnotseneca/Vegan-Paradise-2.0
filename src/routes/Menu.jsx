import './menu.css'
import Options from "../components/Menu-section/Options"
import Foodcard from "../components/Menu-section/Foodcard"
import {menuData} from '../data/menuData'
import {useState} from 'react'




export default function Menu() {
  const [foodType, setFoodType] = useState(menuData[0].foodType);

  const handleOptionClick = (foodType) => {
    setFoodType(foodType);
  };

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-header">Our menu</h2>
      <Options handleOptionClick={handleOptionClick} />
      <div className="menu-container">
        <Foodcard foodType={foodType} />
      </div>
    </section>
  );
}
