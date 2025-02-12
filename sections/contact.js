import Image from "next/image";
import { ContactWrapper } from "../styles/contactStyles";
import { MainContainer } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
import { useScroll } from "../hooks/useScroll";
import { sectionsVariants } from "../utils/animationVariants";

export const Contact = () => {
  const [element, controls] = useScroll();

  return (
    <MainContainer id="contact">
      <ContactWrapper ref={element}>
        <motion.div
          className="main-container"
          animate={controls}
          variants={sectionsVariants}
          transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
        >
          <div className="buzon-container">
            <Image src="/images/buzon-6.png" layout="fill" alt="buzon" />
          </div>
          <div className="form-container">
            <h1 className="contact-title">¡Envíame un mensaje!</h1>
            <p className="contact-decrip">
              Intento responder a todos los correos lo antes posible. Si no
              obtiene respuesta el mismo día, seguro que la tendrá al siguiente.
              ¡Estaré encantado de saludarle! 😊
            </p>
            <a
              href="https://www.linkedin.com/in/andersonp-r/"
              target="_blank"
              rel="noreferrer"
            >
              Contáctame
            </a>
          </div>
          <div className="plane-container">
            <Image src="/images/plane.png" layout="fill" alt="plane" />
          </div>
        </motion.div>
      </ContactWrapper>
    </MainContainer>
  );
};
