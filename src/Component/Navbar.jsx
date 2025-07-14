import { useEffect, useState } from "react";
import "../Sass/Nav.scss";

const navItems = [
  { id: 1, name: "Home", href: "#section-1" },
  { id: 2, name: "About", href: "#section-2" },
  { id: 3, name: "Skills", href: "#section-3" },
  { id: 4, name: "Projects", href: "#section-4" },
  { id: 5, name: "Contact", href: "#section-5" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("section-1");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Set initial active section from URL or default to section-1
    const hash = window.location.hash.substring(1);
    const validSection = navItems.some(item => item.href === `#${hash}`);
    setActiveSection(validSection ? hash : "section-1");

    // Scroll to section if hash exists
    if (validSection) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView();
      }, 100);
    }

    // Scroll handler for hiding navbar and detecting active section
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideNavbar(currentScroll > 50 && currentScroll > lastScrollY);
      lastScrollY = currentScroll;

      // Detect which section is currently in view
      document.querySelectorAll("section[id]").forEach(section => {
        const { top, height } = section.getBoundingClientRect();
        if (top <= 100 && top + height > 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);
    // Update URL without adding to history
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <div id="section-1" className={`section-1 ${hideNavbar ? "hide-on-scroll" : ""}`}>
      <div className="fixed-top mt-4 px-3 px-md-4">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-black bg-opacity-75 rounded-5 px-3">
            <div className="container-fluid position-relative">
              <button
                className={`navbar-toggler button-h ms-auto ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
              >
                <span className="burger-container">
                  <span className="burger-line top"></span>
                  <span className="burger-line middle"></span>
                  <span className="burger-line bottom"></span>
                </span>
              </button>

              <div className={`collapse navbar-collapse custom-collapse ${menuOpen ? "show" : ""}`}>
                <ul className="navbar-nav justify-content-between align-items-center w-100 fade-in-list">
                  {navItems.map((item) => (
                    <li
                      key={item.id}
                      className={`nav-item fade-in-item ${activeSection === item.href.substring(1) ? "active" : ""}`}
                    >
                      <a
                        onClick={() => handleNavClick(item.href.substring(1))}
                        className="nav-link"
                        href={item.href}
                      >
                        {item.name}
                        <span className="nav-underline"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <img src="/start.svg" alt="Logo" className="Star" />
      <img src="/start.svg" alt="Logo" className="Star-right" />
    </div>
  );
};