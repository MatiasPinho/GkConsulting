import { Logo } from "../../assets/icons/Logo";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Instagram } from "../../assets/icons/Instagram";
import { Email } from "../../assets/icons/Email";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-container">
        <nav className="footer__nav">
          <ul className="footer_nav-list">
            <li className="footer__nav-item">Inicio</li>
            <li className="footer__nav-item">Servicios</li>
            <li className="footer__nav-item">Nosotras</li>
            <li className="footer__nav-item">Blog</li>
          </ul>
        </nav>
        <div className="footer__logo">
          <img className="footer__logo-img" src="./gk_logo.png" alt="" />
        </div>
        <div className="footer__contact">
          <p className="footer__contact-title">Contactanos:</p>
          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <Linkedin />
            </li>
            <li className="footer__contact-item">
              <Instagram />
            </li>
            <li className="footer__contact-item">
              <Email />
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
