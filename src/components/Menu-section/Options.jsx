import "./options.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {menuData} from "../../data/menuData";

// eslint-disable-next-line react/prop-types
export default function Options({ handleOptionClick }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    autoplaySpeed: 1000,
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
  const menuLogotypes = menuData.map((element) => {
    return (
      <div className="options--container" key={element.id} onClick={() => handleOptionClick(element.foodType)}>
        <div className="logo--container">
          <img
            src={element.logo.imageURL}
            alt={element.logo.alt}
            className="option--img"
          />
          <p>{element.foodText}</p>
        </div>
      </div>
    );
  });
  return <Slider {...settings}>{menuLogotypes}</Slider>;
}
