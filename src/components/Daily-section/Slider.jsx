import { useState } from "react";
import { daily } from "./dailydata";
import styled from "styled-components";

const CarouselImg = styled.img`
  max-width: 250px;
  width: 100%;
  height: auto;
`;

const CarouselContainer = styled.div`
background-color: rgba(243, 249, 245, 0.473);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: 2em;
font-family: 'Poppins';
opacity: 0;
transition: 1s;
&.loaded {
  opacity: 1;
}
`
const CarouselBtnContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 3em;
  gap: 2em;

`;
const CarouselBtn = styled.button`
  color: white;
  background-color: #a50600;
  padding: 15px;
  margin: 0;
  border:none;
  border-radius: 10%;
  cursor: pointer;
  opacity: 0.9;
  font-size: 1em;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export default function Slider() {
  const properties = daily.map((element) => element);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProperties, setSelectedProperties] = useState(properties[0]);
  const [loaded, setIsLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setIsLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedProperties(properties[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, properties, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, properties);
  };

  return (
    <>
      <CarouselContainer className={loaded ? "loaded" : ""} key={selectedProperties.id}>
        <h3 className="dailycard-header">{selectedProperties.title.toUpperCase()}</h3>
        <CarouselImg
          src={selectedProperties.imgURL}
          alt={selectedProperties.title}
          className='dailycard-img'
          onLoad={() => setIsLoaded(true)}
        />
        <p className="dailycard-price">at only: ${selectedProperties.price}</p>
        <p className="dailycard-paragraph">
          Ingredients: {selectedProperties.ingredients}{" "}
        </p>
      </CarouselContainer>
      <CarouselBtnContainer>
        <CarouselBtn onClick={previous}>{"<"}</CarouselBtn>
        <CarouselBtn onClick={next}>{">"}</CarouselBtn>
      </CarouselBtnContainer>
    </>
  );
}
