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
          <Image src="/images/buzon.png" layout="fill" />
        </div>
        <div className="form-container">
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-decrip">Short description should be here</p>
          <form className="contact-form">
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="email" name="nombre" placeholder="Email" />
            <textarea name="asunto" placeholder="Asunto" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="plane-container">
          <Image src="/images/plane.png" layout="fill" />
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
};
