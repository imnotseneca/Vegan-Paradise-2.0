import "./process.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default function Process(props) {
  // eslint-disable-next-line react/prop-types
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
  // eslint-disable-next-line react/prop-types
  const processList = props.processData.map((element) => {
    return (
      <div className="process-item" key={element.id}>
        <img src={element.imageURL} alt={element.alt} className="process-img" />
        <p className="process-description">{element.processText}</p>
      </div>
    );
  });
  return <Slider {...settings}>{processList}</Slider>;
}
