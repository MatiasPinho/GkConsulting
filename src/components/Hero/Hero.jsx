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
      <picture className="hero-picture">
        <source
          className="hero-section-container-background"
          srcSet="./hero_background.webp"
          media="(min-width: 721px)"
          sizes="(min-width: 721px) 1920px, 100vw"
          type="image/webp"
          alt="Imagen de fondo para pantallas grandes"
        />

        <source
          className="hero-section-container-background"
          srcSet="./hero_background1.webp"
          media="(max-width: 721px)"
          sizes="(max-width: 721px) 480px, 100vw"
          type="image/webp"
          alt="Imagen de fondo para pantallas pequeñas"
        />

        <img
          className="hero-section-container-background"
          src="./hero_background.webp"
          alt="Imagen de fondo alternativa para navegadores que no admiten WebP"
          width="1920"
          height="1080"
        />
      </picture>
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
