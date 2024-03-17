import "./Header.css";
import { Menu as MenuIcon } from "../../assets/icons/Menu";
import { Logo as LogoIcon } from "../../assets/icons/Logo";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <LogoIcon className="header__logo" />
        <MenuIcon />
        <ul className="header__menu-ul">
          <li className="header__menu-li">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="header__menu-li">
            <a href="#services-id" className="header__menu-link">
              Servicios
            </a>
          </li>
          <li className="header__menu-li">
            <a href="#about-id" className="header__menu-link">
              Nosotras
            </a>
          </li>
          <li className="header__menu-li">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Historia
            </NavLink>
          </li>
          <li className="header__menu-li">
            <a href="#" className="header__menu-link">
              Blog
            </a>
          </li>
          <li className="header__menu-li header__menu-li--button">
            <a href="#contact-id" className="header__menu-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
