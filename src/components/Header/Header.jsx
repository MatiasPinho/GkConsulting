import "./Header.css";
import { Menu as MenuIcon } from "../../assets/icons/Menu";
import { Logo as LogoIcon } from "../../assets/icons/Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
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
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="header__menu-li">
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#services-id"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Servicios
            </NavLink>
          </li>
          <li className="header__menu-li">
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#about-id"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Nosotras
            </NavLink>
          </li>
          <li className="header__menu-li">
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/aboutHistory"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Historia
            </NavLink>
          </li>
          <li className="header__menu-li">
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="header__menu-li header__menu-li--button">
            <NavLink
              onClick={() => {
                return setIsMenuClicked(false);
              }}
              to="/#contact-id"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
