import { useEffect } from "react";
import { LogoVariant } from "../../assets/icons/LogoVariant";
import Typewriter from "typewriter-effect/dist/core";
import "./Hero.css";
export const Hero = () => {
  useEffect(() => {
    const typewriter = new Typewriter(".hero-section__subtitle", {
      strings: [
        "Potenciamos el crecimiento empresarial a través de una estructura.",
      ],
      autoStart: true,
      loop: true, // Repetir el efecto de máquina de escribir infinitamente
      delay: 20,
      deleteSpeed: 18,
      wrapperClassName: ".hero-section__subtitle", // Clase del contenedor
    }).start();

    return () => {
      typewriter.stop(); // Detener el efecto al desmontar el componente
    };
  }, []);
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
