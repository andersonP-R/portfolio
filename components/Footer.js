import styled from "styled-components";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";
import { Colors } from "../styles/GlobalStyles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="social-container">
          <a
            href="https://github.com/andersonP-R"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andersonp-r/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/legalmenterivera/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <h2>Designed and build by Anderson Rivera</h2>
        <a href="#hero" className="toTop">
          <FaChevronUp />
        </a>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 10vh;
  padding: 0px 100px;

  @media screen and (max-width: 960px) {
    padding: 0px 80px;
  }

  @media screen and (max-width: 750px) {
    padding: 0px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 0px 25px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 12vh;
  margin: 0px auto;
  border: 1px solid ${Colors["white-color"]};
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    justify-content: space-between;
    border: none;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: 7vh;
    margin-bottom: 50px;
    gap: 10px;
  }

  .social-container {
    font-size: 20px;

    a {
      color: ${Colors["gray-color"]};
      transition: 0.2s ease;

      padding-right: 15px;

      &:last-child {
        padding-right: 0px;
      }

      &:hover {
        color: ${Colors["white-color"]};
      }
    }
  }

  h2 {
    color: ${Colors["gray-color"]};
    font-size: 16px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
  }

  .toTop {
    padding: 5px 10px;
    color: ${Colors["gray-color"]};
    border: 1px solid ${Colors["gray-color"]};
    cursor: pointer;
    z-index: 10;
    transition: 0.2s ease;

    &:hover {
      color: ${Colors["white-color"]};
      background-color: ${Colors["gray-color"]}4d;
    }

    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;
