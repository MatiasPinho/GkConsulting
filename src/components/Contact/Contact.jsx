import "./Contact.css";
import { Email } from "../../assets/icons/Email";
import { Location } from "../../assets/icons/Location";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Phone } from "../../assets/icons/Phone";
import { Instagram } from "../../assets/icons/Instagram";
import { Telegram } from "../../assets/icons/Telegram";

export const Contact = () => {
  return (
    <section id="contact-id" className="contact-container">
      <section className="contact__margin">
        <h5 className="contact__title">
          Contacta con <strong>nosotras</strong>
        </h5>
        <section className="contacts">
          <section className="contact">
            <div className="contact__form-container">
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
          <section class="contact__information">
            <p class="contact__information-paragraph">
              Curabitur tempor, sem at hendrerit maximus, elit turpis ornare
              nunc, sit amet bibendum tortor lacus ut dolor. Fusce mi arcu,
              iaculis at tortor eu, efficitur iaculis leo. Aenean lacinia libero
              turpis, sit amet euismod lectus facilisis non. Aliquam vestibulum
              semper lacus, nec facilisis velit faucibus eget.
            </p>

            <ul class="contact__information-list">
              <li class="contact__information-item">
                <span class="contact__information-icon">
                  <Location />
                </span>
                <span class="contact__information-details">
                  <p>
                    <strong>Dirección:</strong>
                  </p>
                  <p>Avenida brasil 332</p>
                </span>
              </li>
              <li class="contact__information-item">
                <span class="contact__information-icon">
                  <Phone />
                </span>
                <span class="contact__information-details">
                  <p>
                    <strong>Telefono:</strong>
                  </p>
                  <p>Avenida brasil 332</p>
                </span>
              </li>
              <li class="contact__information-item">
                <span class="contact__information-icon">
                  <Linkedin />
                </span>
                <span class="contact__information-details">
                  <p>
                    <strong>LinkedIn:</strong>
                  </p>
                  <p>Avenida brasil 332</p>
                </span>
              </li>
              <li class="contact__information-item">
                <span class="contact__information-icon">
                  <Instagram />
                </span>
                <span class="contact__information-details">
                  <p>
                    <strong>Instagram:</strong>
                  </p>
                  <p>Avenida brasil 332</p>
                </span>
              </li>
              <li class="contact__information-item">
                <span class="contact__information-icon">
                  <Email />
                </span>
                <span class="contact__information-details">
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <p>Avenida brasil 332</p>
                </span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};
