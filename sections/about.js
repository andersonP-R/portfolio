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
              I love to build things—turning ideas into impactful, functional
              creations. From scalable systems and optimized algorithms to
              intuitive user experiences, I thrive on solving problems and
              continuously learning in a fast-evolving field.{" "}
              <span className="p-2">Building is who I am.</span>
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
