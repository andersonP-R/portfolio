import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";
import { HeroWrapper } from "../styles/heroStyles";
import { motion } from "framer-motion";
import { heroImgVariants, heroVariants } from "../utils/animationVariants";

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
          <motion.div
            className="img-container"
            initial="hidden"
            animate="show"
            variants={heroImgVariants}
            transition={{ delay: 1.2, duration: 0.2, type: "tween" }}
          >
            <Image src="/images/image-removebg.png" layout="fill" />
          </motion.div>
          <motion.span
            className="box-1"
            initial="hidden"
            animate="show"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ delay: 1.8, duration: 0.2, type: "tween" }}
          ></motion.span>
        </div>
      </HeroWrapper>
    </MainContainer>
  );
};
