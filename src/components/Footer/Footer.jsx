import { Linkedin } from "../../assets/icons/Linkedin";
import { Instagram } from "../../assets/icons/Instagram";
import { Email } from "../../assets/icons/Email";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { LogoVariant } from "../../assets/icons/LogoVariant";
export const Footer = () => {
  return (
    <footer id="footer-id" className="footer">
      <section className="footer-container">
        <nav className="footer__nav">
          <ul className="footer_nav-list">
            <li className="footer__nav-item">
              <NavLink
                to="/"
                aria-label="Ir al inicio"
                title="Ir al inicio"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <a
                href="#services-id"
                aria-label="Ir a Servicios"
                title="Ir a servicios"
              >
                Servicios
              </a>
            </li>
            <li className="footer__nav-item">
              <a
                href="#about-id"
                aria-label="Ir a nosotras"
                title="Ir a nosotras"
              >
                Nosotras
              </a>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/aboutHistory"
                aria-label="Ir a nuestra historia"
                title="Ir a nuestra historia"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Historia
              </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                aria-label="Ir a nuestro blog"
                title="Ir a nuestro blog"
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__logo">
          <LogoVariant />
        </div>
        <div className="footer__contact">
          <p className="footer__contact-title">Contactanos:</p>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <a
                aria-label="Ir a linkedIn"
                title="Ir a linkedIn"
                href="https://www.linkedin.com/company/gkconsultingcompany/"
              >
                <Linkedin />
              </a>
            </li>
            <li className="footer__contact-item">
              <a
                aria-label="Ir a instagram"
                title="Ir a instagram"
                href="https://www.instagram.com/gkconsultingcompany/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              >
                <Instagram />
              </a>
            </li>
            <li className="footer__contact-item">
              <a
                aria-label="Ir al gmail"
                title="Ir al gmail"
                href="mailto:info@gkconsulting.com.ar "
              >
                <Email />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">
          ©2024 GKConsulting. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
