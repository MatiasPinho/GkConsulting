import { useEffect } from "react";
import { LogoVariant } from "../../assets/icons/LogoVariant";
import Typewriter from "typewriter-effect/dist/core";
import "./Hero.css";
export const Hero = () => {
  useEffect(() => {
    const typewriter = new Typewriter(".hero-section__subtitle", {
      strings: [
        "Potenciamos el crecimiento empresarial a través de una estructura solida.",
      ],
      autoStart: true,
      loop: true,
      delay: 20,
      deleteSpeed: 18,
      wrapperClassName: ".hero-section__subtitle",
    }).start();

    return () => {
      typewriter.stop();
    };
  }, []);
  return (
    <section className="hero-section-container" rel="preload">
      <section className="hero-section">
        <LogoVariant />
        <h1 className="hero-section__title">
          Consultoria <strong> y Servicios </strong>
        </h1>

        <h2 className="hero-section__subtitle">
          Potenciamos el crecimiento empresarial a través de una estructura.
        </h2>
        <a
          href="/#about-id"
          className="hero-section__button button-a"
          title="Ir al formulario de contacto"
          aria-label="Ir al formulario de contacto"
        >
          Leer más
        </a>
      </section>
    </section>
  );
};
