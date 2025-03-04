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
              <div className="t-1">Sobre</div>
              <div className="t-2">mí</div>
            </div>

            <p className="p-1">
              Me encanta construir cosas, convertir ideas en creaciones
              impactantes y funcionales. Desde sistemas escalables y algoritmos
              optimizados hasta experiencias de usuario intuitivas, me encanta
              resolver problemas y aprender continuamente en un campo en rápida
              evolución. <span className="p-2">Disfruto mucho programar.</span>
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
