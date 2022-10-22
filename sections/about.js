import Image from "next/image";
import { Wrapper } from "../styles/aboutStyles";
import { MainContainer } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { sectionsVariants } from "../utils/animationVariants";

export const About = () => {
  const [element, controls] = useScroll();
  return (
    <MainContainer id="about">
      <Wrapper ref={element}>
        <motion.div
          className="img-desc-container"
          animate={controls}
          variants={sectionsVariants}
          transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
        >
          <div className="img-container">
            <Image src="/images/person-sillh.png" layout="fill" alt="person" />
          </div>

          <div className="description">
            <div className="title-container">
              <div className="t-1">About</div>
              <div className="t-2">Me</div>
            </div>

            <p className="p-1">
              Hello! My name is Anderson Rivera and I build things for the web.
              I am a self-taught person who likes to create things that others
              can use or need.
            </p>
            <p className="p-2">
              I usually work with React, JavaScript and some Python but I'm
              always open to learn new things.
            </p>

            <div className="table-container">
              <Image src="/images/board-2.png" layout="fill" alt="board" />
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </MainContainer>
  );
};
