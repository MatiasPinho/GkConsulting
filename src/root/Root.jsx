// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
export const Root = ({ children }) => {
  return (
    <HelmetProvider>
      <Header />
      <main>{children}</main>
      <ScrollRestoration />
      <Footer />
    </HelmetProvider>
  );
};
