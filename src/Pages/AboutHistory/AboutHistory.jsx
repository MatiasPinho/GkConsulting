import React from "react";
import { CardHistory } from "../../components/CardHistory/CardHistory";
import { Link } from "react-router-dom";
import cardsInfo from "../../../data/cardsInfo.json";
import { Helmet } from "react-helmet-async";
import "./AboutHistory.css";

export const AboutHistory = () => {
  return (
    <>
      <Helmet>
        <title>
          Historia de GK Consulting: Innovación y Eficiencia en Acción
        </title>
        <meta
          name="description"
          content="Descubre la historia detrás de GK Consulting. Conoce a nuestra abogada, apasionadas por brindar soluciones integrales que impulsen el crecimiento de tu empresa. Desde su formación hasta sus logros profesionales, conoce cómo han innovado y contribuido al éxito empresarial."
        />
        <meta
          property="og:description"
          content="Descubre la historia detrás de GK Consulting. Conoce a nuestra abogada y contadora, apasionadas por brindar soluciones integrales que impulsan el crecimiento empresarial. Desde su formación hasta sus logros, descubre cómo han innovado y contribuido al éxito empresarial con su enfoque en la innovación y la eficiencia."
        />

        <meta
          property="og:title"
          content="GK Consulting: Innovación y Eficiencia para tu Empresa"
        ></meta>
        <link
          rel="canonical"
          href="https://gk-consulting.vercel.app/aboutHistory"
        ></link>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://i.pinimg.com/originals/b4/8d/8c/b48d8c3719b4ca01d8ee36ca1a4e585c.png"
        />
      </Helmet>
      <section className="about-history-container">
        <div className="line-separator-top"></div>

        <section className="about-history">
          {cardsInfo.CardInfo_1 && (
            <CardHistory
              name={cardsInfo.CardInfo_1.name}
              surname={cardsInfo.CardInfo_1.surname}
              description={cardsInfo.CardInfo_1.description}
              img={cardsInfo.CardInfo_1.img}
            />
          )}
          {cardsInfo.CardInfo_2 && (
            <CardHistory
              name={cardsInfo.CardInfo_2.name}
              surname={cardsInfo.CardInfo_2.surname}
              description={cardsInfo.CardInfo_2.description}
              img={cardsInfo.CardInfo_2.img}
            />
          )}
        </section>
        <section className="about-work">
          <div className="about-work-content">
            <h1 className="about-work__title">
              <strong className="alternative-strong">Trabajá</strong> con
              Nosotras
            </h1>
            <Link
              aria-label="Ir a formulario de contacto"
              title="Ir a formulario de contacto"
              className="about-work__contact button-a"
              to="/#contact-id"
            >
              Contactanos
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};
