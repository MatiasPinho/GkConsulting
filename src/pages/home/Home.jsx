import { LogoVariant } from "../../assets/icons/LogoVariant";
import "./Home.css";
export const Home = () => {
  return (
    <section className="hero-section-container">
      <section className="hero-section">
        <LogoVariant />
        <h1 className="hero-title">
          Lorem ipsum <strong> is a door </strong>
        </h1>
        <h2 className="hero-subtitle">
          Consectetur adipiscing elit. Suspendisse sit amet laoreet auguee.
        </h2>
        <button className="hero-button">Leer más</button>
      </section>
    </section>
  );
};
