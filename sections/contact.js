import { ContactWrapper } from "../styles/contactStyles";
import Image from "next/image";
import { MainContainer } from "../styles/GlobalStyles";

export const Contact = () => {
  return (
    <MainContainer id="contact">
      <ContactWrapper>
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
      </ContactWrapper>
    </MainContainer>
  );
};
