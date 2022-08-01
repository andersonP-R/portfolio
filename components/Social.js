import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Social = () => {
  const [hiddenSocial, setHiddenSocial] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 2950
        ? setHiddenSocial(true)
        : setHiddenSocial(false);
    });
  }, []);

  return (
    <SocialContainer hiddenSocial={hiddenSocial}>
      <a href="https://github.com/andersonP-R" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/andersonp-r/" target="_blank">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/legalmenterivera/" target="_blank">
        <FaInstagram />
      </a>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 10px;
  font-size: 25px;
  bottom: 210px;
  left: ${({ hiddenSocial }) => (hiddenSocial ? "-40px" : "0px")};
  transition: 0.2s ease;

  a {
    display: block;
    width: 40px;
    height: 40px;
    color: #9ea8ab;
    transition: 0.2s ease;

    &:hover {
      color: #eeeef8;
      font-size: 28px;
    }
  }
`;
