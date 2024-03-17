import "./Services.css";
import { CardServices } from "../CardServices/CardServices";
export const Services = () => {
  const servicesDescriptions_1 = {
    description_1: [
      "Constitución de empresas (S.R.L., S.A., S.A.U., S.A.S, Fundaciones, etc.)",
      "Libros Societarios",
      "Gerencia de Empresas",
      "Gestión de Contratos",
      "Resolución de disputas",
      "Coordinación y Capacitación legal interna",
      "Trámites en IGJ y DPPJ",
      "Asesoramiento online",
      "Trámites en organismos Públicos, Provinciales y Nacionales",
    ],
  };

  const servicesDescriptions_2 = {
    description_1: [
      "Análisis y Planificación Financiera",
      "Liquidación de Impuestos mensuales",
      "Regularización Impositiva",
      "Ganancias y Bienes Personales",
      "Monotributo",
      "Coordinación y Capacitación en contabilidad interna",
      "Trámites en AFIP y organismos provinciales / municipales",
      "Asesoramiento online",
    ],
  };

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
          <CardServices
            title="Servicios Contables"
            servicesDescriptions_1={servicesDescriptions_1}
          />
          {
            <CardServices
              title="Servicios Contables"
              servicesDescriptions_2={servicesDescriptions_2}
            />
          }
        </section>
      </section>
    </section>
  );
};
