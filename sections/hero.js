import {
  Container,
  Description,
  ImgContainer,
  Wrapper,
} from "../styles/heroStyles";
import Image from "next/image";

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
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
          <Image src="/image-removebg.png" layout="fill" />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};
