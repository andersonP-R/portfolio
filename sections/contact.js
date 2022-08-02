import {
  ContactContainer,
  ContactWrapper,
  Plane,
} from "../styles/contactStyles";
import Image from "next/image";

export const Contact = () => {
  return (
    <ContactContainer id="contact">
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
          <form className="contact-form">
            <input type="text" name="nombre" placeholder="Name" />
            <input type="email" name="nombre" placeholder="Email" />
            <textarea name="asunto" placeholder="Subject" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="plane-container">
          <Image src="/images/plane.png" layout="fill" />
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
};
