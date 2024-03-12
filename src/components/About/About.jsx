import "./About.css";
export const About = () => {
  return (
    <section className="about-container">
      <div className="about">
        <article className="about__info">
          <h4 className="about__info-heading">
            <strong>¿Quienes</strong> somos <strong>?</strong>
          </h4>
          <div className="about__info-container">
            <p className="about__info-paragraph">
              En GK Consulting, creemos que la innovación y la eficiencia son la
              clave para el éxito empresarial. Somos una consultora formada por
              una abogada y una contadora jóvenes, apasionadas por brindar
              soluciones integrales que impulsen el crecimiento de tu empresa.
            </p>
            <p className="about__info-paragraph">
              Nos especializamos en ofrecer soluciones que van más allá de lo
              convencional. Desde lo financiero y cumplimiento legal, hasta
              asesoría fiscal, resolución de conflictos empresariales y
              laborales, auditorías pre cierre anual, análisis de presupuestos,
              planificación financiera, y revisión de contratos. Estamos aquí
              para cubrir todas las facetas que aseguren el éxito de tu negocio.
            </p>
            <p className="about__info-paragraph">
              Después de trabajar con diversas empresas y estudios jurídicos y
              contables, hemos comprendido la importancia de la eficiencia en el
              mundo empresarial. Nuestra misión es innovar y aportar todo lo
              necesario para hacer a las empresas más eficientes y competitivas
              en un mercado en constante cambio.
            </p>
            <p className="about__info-paragraph">
              En GK Consulting , creemos que cada cliente es único y merece un
              enfoque personalizado. Nuestro objetivo es en encontrar soluciones
              creativas y adaptativas para cada desafío que enfrenta tu empresa.
            </p>
            <p className="about__info-paragraph">
              Estamos aquí para brindarte las soluciones que necesitas para
              alcanzar el éxito. ¡Conócenos y descubre la diferencia!
            </p>
          </div>
        </article>
      </div>
      <div className="about__images-container">
        <article className="about__images">
          <img
            className="about__image about__image--1"
            src="./about_image.webp"
            alt=""
          />

          <img
            className="about__image about__image--2"
            src="./about_image2.webp"
            alt=""
          />
          <img
            className="about__image about__image--3"
            src="./about_image3.webp"
            alt=""
          />
        </article>
      </div>
    </section>
  );
};
