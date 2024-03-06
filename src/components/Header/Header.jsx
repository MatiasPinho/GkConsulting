import "./Header.css";
import { Menu as MenuIcon } from "../../assets/icons/Menu";
import { Logo as LogoIcon } from "../../assets/icons/Logo";
export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-header">
        <LogoIcon />
        <MenuIcon />
      </nav>
    </header>
  );
};
