import { MainContainer } from "../styles/GlobalStyles";
import { HeroWrapper } from "../styles/heroStyles";
import { motion } from "framer-motion";
import { heroVariants } from "../utils/animationVariants";
import { Svg } from "../components/Svg";

export const Hero = () => {
  return (
    <MainContainer id="hero">
      <HeroWrapper>
        <div className="desc-img-container">
          <div className="description">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 0.9, duration: 0.2, type: "tween" }}
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Anderson Rivera.
            </motion.h2>
            <motion.h3
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              I'm a Front-end developer
            </motion.h3>
            <motion.p
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Passionate about technology and specialized in front-end
              development, I build solutions that help people achieve their
              goals.
            </motion.p>
            <motion.a
              href="#about"
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Let's start
            </motion.a>
          </div>
          <div className="animation">
            <Svg />
          </div>
        </div>
      </HeroWrapper>
    </MainContainer>
  );
};
