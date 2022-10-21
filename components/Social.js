import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Colors } from "../styles/GlobalStyles";

export const Social = () => {
  const [hiddenSocial, setHiddenSocial] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 4000
        ? setHiddenSocial(true)
        : setHiddenSocial(false);
    });
  }, []);

  return (
    <SocialContainer hiddenSocial={hiddenSocial}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        transition={{ delay: 1.8, duration: 0.2, type: "tween" }}
      >
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
      </motion.div>
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
  font-size: 20px;
  bottom: 210px;
  left: ${({ hiddenSocial }) => (hiddenSocial ? "-40px" : "0px")};
  transition: 0.2s ease;

  a {
    display: block;
    width: 30px;
    height: 30px;
    color: ${Colors["gray-color"]};
    transition: 0.2s ease;

    &:hover {
      color: #eeeef8;
      font-size: 22px;
    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;
