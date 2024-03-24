import "./Contact.css";
import { Email } from "../../assets/icons/Email";
import { Location } from "../../assets/icons/Location";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Phone } from "../../assets/icons/Phone";
import { Instagram } from "../../assets/icons/Instagram";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
const templateUrl = import.meta.env.VITE_TEMPLATE_URL;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const [isEmailSend, setIsEmailSend] = useState(false);
  useEffect(() => {
    isEmailSend
      ? setTimeout(() => {
          setIsEmailSend(false);
        }, 3000)
      : null;
  }, [isEmailSend]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(apiUrl, templateUrl, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsEmailSend(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact-id" className="contact-container">
      <section className="contact__margin">
        <h5 className="contact__title">
          Contacta con <strong>nosotras</strong>
        </h5>
        <section className="contacts">
          <section className="contact">
            <div className="contact__form-container">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact__form"
                action=""
                aria-label="Formulario de contacto" // Añadido
              >
                <div
                  className={`success-message ${
                    isEmailSend ? "success-message-show" : ""
                  }`}
                >
                  <p>
                    ¡Tu mensaje se ha enviado con{" "}
                    <strong className="alternative-strong">éxito</strong>!
                  </p>
                </div>
                <label className="contact__label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="contact__input"
                  type="text"
                  id="nombre"
                  name="from_name"
                  placeholder=""
                  aria-label="Nombre"
                  required
                />
                <label className="contact__label" htmlFor="email">
                  Correo electronico
                </label>
                <input
                  className="contact__input"
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder=""
                  aria-label="Email"
                  required
                />
                <label className="contact__label" htmlFor="message">
                  Tu mensaje
                </label>
                <textarea
                  className="contact__textarea"
                  name="message"
                  id="message"
                  aria-label="Mensaje"
                  required
                ></textarea>
                <button
                  className="contact__button button-a"
                  type="submit"
                  value="Send"
                  aria-label="Enviar email"
                  title="Enviar email"
                >
                  Enviar
                </button>
              </form>
            </div>
          </section>
          <section className="contact__information">
            <p className="contact__information-paragraph">
              Curabitur tempor, sem at hendrerit maximus, elit turpis ornare
              nunc, sit amet bibendum tortor lacus ut dolor. Fusce mi arcu,
              iaculis at tortor eu, efficitur iaculis leo.
            </p>

            <ul className="contact__information-list">
              <li className="contact__information-item">
                <span className="contact__information-icon">
                  <Location />
                </span>
                <span className="contact__information-details">
                  <p>
                    <strong>Dirección:</strong>
                  </p>
                  <p>Pronto</p>
                </span>
              </li>
              <li className="contact__information-item">
                <span className="contact__information-icon">
                  <Phone />
                </span>
                <span className="contact__information-details">
                  <p>
                    <strong>Telefono:</strong>
                  </p>
                  <p>Pronto</p>
                </span>
              </li>
              <li className="contact__information-item">
                <a
                  className="contact__information-icon"
                  href="https://www.linkedin.com/company/gkconsultingcompany/"
                  aria-label="LinkedIn de GKConsulting"
                  title="Ir a LinkedIn de GkConsulting"
                >
                  <Linkedin />
                </a>
                <span className="contact__information-details">
                  <p>
                    <strong>LinkedIn:</strong>
                  </p>
                  <p> GKConsulting</p>
                </span>
              </li>
              <li className="contact__information-item">
                <a
                  className="contact__information-icon"
                  href="https://www.instagram.com/gkconsultingcompany/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  aria-label="Instagram de GKConsulting"
                  title="Ir a Instagram de GkConsulting"
                >
                  <Instagram />
                </a>
                <span className="contact__information-details">
                  <p>
                    <strong>Instagram:</strong>
                  </p>
                  <p>gkconsultingcompany</p>
                </span>
              </li>
              <li className="contact__information-item">
                <a
                  className="contact__information-icon"
                  href="mailto:info@gkconsulting.com.ar"
                  aria-label="Email de GKConsulting"
                  title="Ir al gmail de GkConsulting"
                >
                  <Email />
                </a>
                <span className="contact__information-details">
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <p>info@gkconsulting.com.ar</p>
                </span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};
