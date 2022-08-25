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
            <Image src="/images/buzon-6.png" layout="fill" />
          </div>
          <div className="form-container">
            <h1 className="contact-title">Get in touch</h1>
            <p className="contact-decrip">
              I may not respond to your email the same day, but I will certainly
              reply with a "Hello" the next day.
            </p>
            <a
              href="mailto:gamer1999r@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Say Hello!
            </a>
          </div>
          <div className="plane-container">
            <Image src="/images/plane.png" layout="fill" />
          </div>
        </motion.div>
      </ContactWrapper>
    </MainContainer>
  );
};
