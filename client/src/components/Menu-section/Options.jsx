/**
 * Options Component
 *
 * This component displays a slider of options based on menuData.
 * Each option includes a logo, and clicking an option triggers a callback to handle the selected option.
 *
 * @component
 * @param {Function} handleOptionClick - Callback function triggered when an option is selected.
 * @returns {JSX.Element} JSX representation of the Options component.
 *
 * @example
 * // Example usage of Options component
 * <Options handleOptionClick={(foodType) => handleOptionSelection(foodType)} />
 */

/* eslint-disable react/prop-types */
import { useState } from "react";
import "./options.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { menuData } from "../../data/menuData";

export default function Options({ handleOptionClick }) {
  /**
   * State hook to manage the selected option.
   * @type {string|null}
   */
  const [selectedOption, setSelectedOption] = useState(null);

  /**
   * Settings for the Slick slider component.
   * @type {Object}
   */
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "50px",
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

  /**
   * Handles the selection of an option by updating the selectedOption state
   * and triggering the provided callback.
   * @param {string} foodType - The type of food associated with the selected option.
   * @returns {void}
   */

  const handleOptionSelection = (foodType) => {
    setSelectedOption(foodType);
    handleOptionClick(foodType);
  };

  /**
   * Maps over menuData to create an array of option elements for the slider.
   * @type {JSX.Element[]}
   */
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
