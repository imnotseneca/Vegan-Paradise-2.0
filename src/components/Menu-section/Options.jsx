/* eslint-disable react/prop-types */
import { useState } from "react";
import "./options.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { menuData } from "../../data/menuData";

export default function Options({ handleOptionClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '50px',
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOptionSelection = (foodType) => {
    setSelectedOption(foodType);
    handleOptionClick(foodType);
  };

  const menuLogotypes = menuData.map((element) => {
    const isActive = selectedOption === element.foodType;

    return (
      <div
        className={`options--container ${isActive ? "active" : ""}`}
        key={element.id}
        onClick={() => handleOptionSelection(element.foodType)}
      >
        <div className="logo--container">
          <img
            src={element.logo.imageURL}
            alt={element.logo.alt}
            width={100}
            height={100}
            className="option--img"
          />
          <p>{element.foodText}</p>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{menuLogotypes}</Slider>;
}
