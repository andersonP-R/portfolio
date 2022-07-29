import {
  HeroContainer,
  Description,
  ImgContainer,
  HeroWrapper,
} from "../styles/heroStyles";
import Image from "next/image";

export const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroWrapper>
        <Description>
          <h1>Hi, my name is</h1>
          <h2>Anderson Rivera.</h2>
          <h3>I'm a software developer</h3>
          <p>
            Passionate bout tecnology and the best coder in the wordl. Dominando
            tecnologias como React, vue y Angular js
          </p>
          <a href="#about">Lets start</a>
        </Description>
        <ImgContainer>
          <Image src="/images/image-removebg.png" layout="fill" />
        </ImgContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};
