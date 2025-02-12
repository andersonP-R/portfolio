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
            <motion.h3 //h1
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 0.9, duration: 0.2, type: "tween" }}
            >
              Hola, mi nombre es
            </motion.h3>
            <motion.h2 //h2
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Anderson Rivera.
            </motion.h2>
            <motion.h1 //h3
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Soy desarrollador de <span style={{ color: "" }}>software</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              dedicado a crear soluciones innovadoras centradas en el usuario.
              Con un enfoque en el diseño limpio, la funcionalidad sin fisuras y
              los sistemas escalables, doy vida a las ideas a través del{" "}
              <span style={{ color: "#0061af" }}>código y la creatividad.</span>
            </motion.p>
            <motion.a
              href="#about"
              initial="hidden"
              animate="show"
              variants={heroVariants}
              transition={{ delay: 1, duration: 0.2, type: "tween" }}
            >
              Comencemos
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
