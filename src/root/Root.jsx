// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
export const Root = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
