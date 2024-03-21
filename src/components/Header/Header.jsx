import "./Header.css";
import { Menu as MenuIcon } from "../../assets/icons/Menu";
import { Logo as LogoIcon } from "../../assets/icons/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Home } from "../../Pages/Home/Home";

export const Header = () => {
  const [isActivesHovers, setIsActiveHovers] = useState({
    Home: true,
    Services: false,
    About: false,
    History: false,
    Blog: false,
    Contact: false,
  });
  console.log(isActivesHovers.Home);
  window.onscroll = () => {
    const scrollPosition = scrollY;
    let activeSection = null;

    if (scrollPosition < 400) {
      activeSection = "Home";
    } else if (scrollPosition >= 400 && scrollPosition < 1400) {
      activeSection = "Services";
    } else if (scrollPosition >= 1400 && scrollPosition < 1900) {
      activeSection = "About";
    } else if (scrollPosition >= 1900) {
      activeSection = "Contact";
    }

    setIsActiveHovers((prev) => ({
      Home: activeSection === "Home",
      Services: activeSection === "Services",
      About: activeSection === "About",
      History: false, // assuming History is not in the scroll position logic
      Blog: false, // assuming Blog is not in the scroll position logic
      Contact: activeSection === "Contact",
    }));
  };

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  console.log(isMenuClicked);
  return (
    <header className="header">
      <nav className="header__nav">
        <LogoIcon className="header__logo" />
        <div
          className={`menu-toggle ${isMenuClicked ? "menu-toggle-open" : ""}`}
          onClick={() => {
            return setIsMenuClicked(!isMenuClicked);
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul
          className={`header__menu-ul ${
            isMenuClicked ? "header__menu-ul-active" : ""
          }`}
        >
          <li className="header__menu-li">
            <Link
              className={isActivesHovers.Home ? "active-li" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="header__menu-li">
            <Link
              className={isActivesHovers.Services ? "active-li" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#services-id"
            >
              Servicios
            </Link>
          </li>
          <li className="header__menu-li">
            <Link
              className={isActivesHovers.About ? "active-li" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#about-id"
            >
              Nosotras
            </Link>
          </li>
          <li className="header__menu-li">
            <Link
              className={isActivesHovers.Home ? "active" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/aboutHistory"
            >
              Historia
            </Link>
          </li>
          <li className="header__menu-li">
            <Link
              className={isActivesHovers.Home ? "active" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="header__menu-li header__menu-li--button">
            <Link
              className={isActivesHovers.Contact ? "active-li" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#contact-id"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
