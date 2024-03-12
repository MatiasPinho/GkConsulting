import "./Home.css";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";
import { About } from "../../components/About/About";
export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
};
