import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UseScrollPosition } from "../../hooks/UseScrollPosition";
import { useLocation } from "react-router-dom";
import { LogoVariant } from "../../assets/icons/LogoVariant";

export const Header = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isActivesHovers = UseScrollPosition();
  const body = document.body;
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  isMenuClicked
    ? body.classList.add("overflow")
    : body.classList.remove("overflow");

  return (
    <header className="header">
      <nav className="header__nav">
        <LogoVariant className="header__logo" />
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
              aria-label="Ir al inicio"
              title="Ir al inicio"
              className={
                isActivesHovers.Home &&
                currentURL !== "/aboutHistory" &&
                currentURL !== "/blog"
                  ? "active-li"
                  : ""
              }
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
              aria-label="Ir a servicios"
              title="Ir a servicios"
              className={
                isActivesHovers.Services &&
                currentURL !== "/aboutHistory" &&
                currentURL !== "/blog"
                  ? "active-li"
                  : ""
              }
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
              aria-label="Ir a nosotras"
              title="Ir a nosotras"
              className={
                isActivesHovers.About &&
                currentURL !== "/aboutHistory" &&
                currentURL !== "/blog"
                  ? "active-li"
                  : ""
              }
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
              aria-label="Ir a contacto"
              title="Ir a contacto"
              className={
                isActivesHovers.Contact &&
                currentURL !== "/aboutHistory" &&
                currentURL !== "/blog"
                  ? "active-li"
                  : ""
              }
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#contact-id"
            >
              Contacto
            </Link>
          </li>
          <li className="header__menu-li">
            <Link
              aria-label="Ir a nuestro blog"
              title="Ir a nuestro blog"
              className={currentURL === "/blog" ? "active-li" : ""}
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
              aria-label="Ir a nuesta historia"
              title="Ir a nuesta historia"
              className={currentURL === "/aboutHistory" ? "active-li" : ""}
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/aboutHistory"
            >
              Historia
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
