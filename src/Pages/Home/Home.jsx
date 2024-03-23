import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Helmet } from "react-helmet-async";
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>GK Consulting: Innovación y Eficiencia para tu Empresa</title>
        <meta
          name="description"
          content="Innovación y eficiencia son nuestra clave. Somos una consultora joven especializada en soluciones integrales para impulsar el crecimiento empresarial. Desde aspectos financieros y legales hasta planificación fiscal y resolución de conflictos, ofrecemos un enfoque personalizado para hacer a tu empresa más eficiente y competitiva."
        />
        <meta
          property="og:description"
          content="En GK Consulting, creemos que la innovación y la eficiencia son la clave para el éxito empresarial. Somos una consultora formada por una abogada y una contadora jóvenes, apasionadas por brindar soluciones integrales que impulsen el crecimiento de tu empresa. Descubre cómo nuestras soluciones personalizadas pueden hacer a tu empresa más eficiente y competitiva."
        ></meta>
        <meta
          property="og:title"
          content="GK Consulting: Innovación y Eficiencia para tu Empresa"
        ></meta>
        <link rel="canonical" href="https://gk-consulting.vercel.app/"></link>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://i.pinimg.com/originals/8e/f2/3e/8ef23e1394394a4776704de73a21ff40.png"
        />
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};
