import React, { useState } from "react";
import {
  InfoContainer,
  InfoH1,
  InfoButton,
  InfoButtonWrapper,
  ArrowForward,
  ArrowRight,
  InfoRow,
  Column1,
  Column2,
  ImgWrapper,
  Img,
  TextWrapper,
} from "./InfoPageElements";

const InfoPage = ({
  lightBg,
  lightText,
  id,
  imgStart,
  topLine,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  img2,
  alt,
  primary,
  dark,
  dark2,
  location,
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  console.log({ topLine });
  return (
    <>
      <InfoButtonWrapper>
        <InfoButton to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
          {hover ? <ArrowForward /> : <ArrowRight />}Back
        </InfoButton>
      </InfoButtonWrapper>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <InfoH1 lightText={lightText}>{topLine}</InfoH1>
            <TextWrapper darkText={darkText}>{description}</TextWrapper>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
            <ImgWrapper>
              <Img src={img2} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoPage;
