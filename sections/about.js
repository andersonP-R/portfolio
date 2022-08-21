import Image from "next/image";
import {
  Description,
  ImgContainer,
  TableCont,
  Wrapper,
} from "../styles/aboutStyles";
import { MainContainer } from "../styles/GlobalStyles";

export const About = () => {
  return (
    <MainContainer id="about">
      <Wrapper>
        <div className="img-desc-container">
          <div className="img-container">
            <Image src="/images/person-sillh.png" layout="fill" />
          </div>

          <div className="description">
            <div className="title-container">
              <div className="t-1">About</div>
              <div className="t-2">Me</div>
            </div>

            <p className="p-1">
              Hello! My name is Anderson and I build things for the web. I am a
              self-taught person who likes to create things that others can use
              or need.
            </p>
            <p className="p-2">
              I usually work with React, JavaScript and some Python but I'm
              always open to learn new things.
            </p>

            <div className="table-container">
              <Image src="/images/board-2.png" layout="fill" />
            </div>
          </div>
        </div>
      </Wrapper>
    </MainContainer>
  );
};
