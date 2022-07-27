import styled from "styled-components";
import Image from "next/image";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <h2>
          Designed and build by Anderson Rivera
          <div>
            <Image src="/images/logo-variant-gray3.png" layout="fill" />{" "}
          </div>
        </h2>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 15vh;
  padding: 10px;
  background-color: #1d1e22;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #9ea8ab;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    div {
      position: relative;
      width: 30px;
      height: 30px;
      margin-left: 5px;
    }
  }
`;
