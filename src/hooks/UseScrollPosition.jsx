import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UseScrollPosition = () => {
  const location = useLocation();
  const [isActiveHovers, setIsActiveHovers] = useState({
    Home: true,
    Services: false,
    About: false,
    Contact: false,
  });

  useEffect(() => {
    const currentURL = location.pathname;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSection = "Home";

      if (currentURL === "/aboutHistory" || currentURL === "/blog") {
        return;
      }

      const sections = [
        { name: "Services", start: 400, end: 1400 },
        { name: "About", start: 1400, end: 1900 },
        { name: "Contact", start: 1900 },
      ];

      sections.forEach((section) => {
        if (
          scrollPosition >= section.start &&
          (scrollPosition < section.end || !section.end)
        ) {
          activeSection = section.name;
        }
      });

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
  }, [location.pathname]);

  return isActiveHovers;
};
