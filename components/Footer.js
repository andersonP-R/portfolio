import styled from "styled-components";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="social-container">
          <a href="https://github.com/andersonP-R" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/andersonp-r/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/legalmenterivera/" target="_blank">
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
  min-height: 15vh;
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
  justify-content: space-around;
  align-items: center;

  .social-container {
    font-size: 25px;

    a {
      color: #9ea8ab;
      transition: 0.2s ease;

      padding-right: 15px;

      &:last-child {
        padding-right: 0px;
      }

      &:hover {
        color: #eeeef8;
      }
    }
  }

  h2 {
    color: #9ea8ab;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }

  .toTop {
    padding: 5px 10px;
    color: #9ea8ab;
    border: 1px solid #9ea8ab;
    cursor: pointer;
    z-index: 10;
    transition: 0.2s ease;

    &:hover {
      color: #eeeef8;
      background-color: #9ea8ab4d;
    }
  }
`;
