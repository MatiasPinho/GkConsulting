import { LogoVariant } from "../../assets/icons/LogoVariant";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero-section-container">
      <section className="hero-section">
        <LogoVariant />
        <h1 className="hero-section__title">
          Consultoria <strong> y Servicios </strong>
        </h1>
        <h2 className="hero-section__subtitle">
          Potenciamos el crecimiento empresarial a través de una estructura.
        </h2>
        <a href="/#about-id" className="hero-section__button button-a">
          Leer más
        </a>
      </section>
    </section>
  );
};
