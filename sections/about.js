import Image from "next/image";
import {
  Container,
  Description,
  FaceCont,
  ImgContainer,
  TableCont,
  Wrapper,
} from "../styles/aboutStyles";

export const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <FaceCont>
          <Image src="/face-siluet.png" layout="fill" />
        </FaceCont>

        <ImgContainer>
          <Image src="/hand3.png" layout="fill" />
        </ImgContainer>
        <Description>
          <h1>About Me</h1>
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
          <Image src="/table.png" layout="fill" />
        </TableCont>
      </Wrapper>
    </Container>
  );
};
