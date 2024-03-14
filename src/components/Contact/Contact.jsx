import "./Contact.css";
import { Email } from "../../assets/icons/Email";
import { Location } from "../../assets/icons/Location";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Phone } from "../../assets/icons/Phone";
import { Instagram } from "../../assets/icons/Instagram";
import { Telegram } from "../../assets/icons/Telegram";
export const Contact = () => {
  return (
    <section className="contact-container">
      <section className="contact">
        <h5 className="contact__title">Contactanos.</h5>
        <div className="contact__form_container">
          <aside className="contact__aside">
            <div className="contact__social-icons-circle">
              <Location />
            </div>
            <div className="contact__social-icons-circle">
              <Phone />
            </div>
            <div className="contact__social-icons-circle">
              <Telegram />
            </div>
          </aside>
          <form className="contact__form" action="">
            <label className="contact__label" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="contact__input"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Carmen Barbieri"
            />
            <label className="contact__label" htmlFor="email">
              Correo electronico
            </label>
            <input
              className="contact__input"
              type="email"
              id="email"
              name="email"
              placeholder="carmenbarbiere@gkconsulting.com"
            />
            <label className="contact__label" htmlFor="message">
              Tu mensaje
            </label>
            <textarea
              className="contact__textarea"
              name="message"
              id="message"
            ></textarea>
            <button className="contact__button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};
