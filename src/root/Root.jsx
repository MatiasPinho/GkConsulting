// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
export const Root = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
