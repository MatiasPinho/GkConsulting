import "./Services.css";
import { CardServices } from "../CardServices/CardServices";
import cardServices from "../../../data/cardsService.json";

export const Services = () => {
  return (
    <section id="services-id" className="services-section-container">
      <section className="services-section">
        <section className="services-section__info">
          <h3 className="services-section__title">
            Nuestros <strong>servicios</strong>
          </h3>
          <p className="services-section__description">
            En el dinámico mundo empresarial actual, entendemos la importancia
            de mantener una contabilidad interna ordenada y eficiente. Nuestra
            misión es allanar el camino hacia el éxito de su empresa,
            permitiéndole concentrarse en su núcleo de negocio mientras nosotros
            nos ocupamos de los aspectos legales y fiscales.
          </p>

          <p className="services-section__additional-info">
            Nuestros servicios abarcan un amplio espectro:
          </p>
        </section>
        <section className="services-section__cards-container">
          {cardServices.cardServices_1 && (
            <CardServices
              title={cardServices.cardServices_1.title}
              description={cardServices.cardServices_1.description}
            />
          )}
          {cardServices.cardServices_2 && (
            <CardServices
              title={cardServices.cardServices_2.title}
              description={cardServices.cardServices_2.description}
            />
          )}
        </section>
      </section>
      <div id="about-id"></div>
    </section>
  );
};
