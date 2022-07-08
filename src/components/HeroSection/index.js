import React, { useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Florida State University Associate Chapter of Lambda Phi Epsilon</HeroH1>
        <HeroP>Check out our interest form!</HeroP>
        <HeroBtnWrapper>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeA6GiAzEllXXPCTMpwLRO6MLDnGHKrIgxwEZntYZn1DBW2hA/viewform" target="_blank">
            <Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Interest Form {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </a>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
