import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";
import { HeroWrapper } from "../styles/heroStyles";

export const Hero = () => {
  return (
    <MainContainer id="hero">
      <HeroWrapper>
        <div className="desc-img-container">
          <div className="description">
            <h1>Hi, my name is</h1>
            <h2>Anderson Rivera.</h2>
            <h3>I'm a Front-end developer</h3>
            <p>
              Passionate about technology and specialized in front-end
              development, I build solutions that help people achieve their
              goals.
            </p>
            <a href="#about">Let's start</a>
          </div>
          <div className="img-container">
            <Image src="/images/image-removebg.png" layout="fill" />
          </div>
          <span className="box-1"></span>
        </div>
      </HeroWrapper>
    </MainContainer>
  );
};
