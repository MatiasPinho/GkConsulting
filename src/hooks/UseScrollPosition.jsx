import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UseScrollPosition = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const [isActiveHovers, setIsActiveHovers] = useState({
    Home: true,
    Services: false,
    About: false,
    History: false,
    Blog: false,
    Contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSection = null;

      if (currentURL === "/aboutHistory" || currentURL === "/blog") {
        return;
      }

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
        ...prev,
        Home:
          activeSection === "Home" &&
          currentURL !== "/aboutHistory" &&
          currentURL !== "/blog",
        Services: activeSection === "Services",
        About: activeSection === "About",
        Contact: activeSection === "Contact",
      }));
    };

    if (currentURL !== "/aboutHistory" && currentURL !== "/blog") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentURL]);

  return isActiveHovers;
};
