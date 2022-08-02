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
          <h3>I'm a Front-end developer</h3>
          <p>
            Passionate about technology and specialized in front-end
            development, I build solutions that help people achieve their goals.
          </p>
          <a href="#about">Let's start</a>
        </Description>
        <ImgContainer>
          <Image src="/images/image-removebg.png" layout="fill" />
        </ImgContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};
