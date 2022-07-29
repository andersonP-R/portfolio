import Image from "next/image";
import {
  AboutContainer,
  Description,
  FaceCont,
  ImgContainer,
  TableCont,
  Wrapper,
} from "../styles/aboutStyles";

export const About = () => {
  return (
    <AboutContainer id="about">
      <Wrapper>
        {/* <FaceCont>
          <Image src="/images/face4.png" layout="fill" />
        </FaceCont> */}
        <ImgContainer>
          <Image src="/images/person-sillh.png" layout="fill" />
        </ImgContainer>
        <Description>
          <div className="title-container">
            <div className="t-1">About</div>
            <div className="t-2">Me</div>
          </div>

          <p className="p-1">
            Hello! My name is Anderson and I build things for the web. Usually
            work whit HTML, CSS, JavaScript and React.
          </p>
          <p className="p-2">
            I enjoy creating things that help people to achieve their purposes
            using tecnology to make useful tools,
          </p>
        </Description>
        <TableCont>
          <Image src="/images/board-2.png" layout="fill" />
        </TableCont>
      </Wrapper>
    </AboutContainer>
  );
};
