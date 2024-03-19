// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
export const Root = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollRestoration />
      <Footer />
    </>
  );
};
