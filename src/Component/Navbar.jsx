import { useEffect, useState, useCallback } from "react";
import "../Sass/Nav.scss";
import star from "../assets/Hero/start.svg";

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
  const [lastClickedSection, setLastClickedSection] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll to section with callback when complete
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Only scroll if not already at this section
    const { top } = element.getBoundingClientRect();
    if (Math.abs(top) > 10) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Handle hash changes from URL or navigation
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.substring(1);
    const isValidSection = navItems.some(item => item.href === `#${hash}`);
    
    if (isValidSection && hash !== activeSection) {
      setActiveSection(hash);
      scrollToSection(hash);
    } else if (!isValidSection) {
      // Default to section-1 if invalid hash
      setActiveSection("section-1");
      window.history.replaceState(null, "", "#section-1");
      scrollToSection("section-1");
    }
  }, [activeSection, scrollToSection]);

  useEffect(() => {
    // Initial setup
    handleHashChange();

    // Set up hashchange listener
    window.addEventListener('hashchange', handleHashChange);

    // Scroll handler for hiding navbar and detecting active section
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      // Clear any pending timeout
      clearTimeout(scrollTimeout);

      // Hide/show navbar logic
      const currentScroll = window.scrollY;
      setHideNavbar(currentScroll > 50 && currentScroll > lastScrollY);
      lastScrollY = currentScroll;

      // Detect active section with debounce
      scrollTimeout = setTimeout(() => {
        let newActiveSection = "section-1";
        document.querySelectorAll("section[id]").forEach(section => {
          const { top, height } = section.getBoundingClientRect();
          if (top <= 100 && top + height > 100) {
            newActiveSection = section.id;
          }
        });

        // Only update if different from current and not recently clicked
        if (newActiveSection !== activeSection && newActiveSection !== lastClickedSection) {
          setActiveSection(newActiveSection);
          window.history.replaceState(null, "", `#${newActiveSection}`);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, handleHashChange, lastClickedSection]);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    
    // Don't do anything if clicking the currently active section
    if (sectionId === activeSection) return;

    setMenuOpen(false);
    setLastClickedSection(sectionId);
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    scrollToSection(sectionId);

    // Reset lastClickedSection after scroll would complete
    setTimeout(() => setLastClickedSection(null), 1000);
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
                        onClick={(e) => handleNavClick(item.href.substring(1), e)}
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

      <img src={star} alt="Logo" className="Star" />
      <img src={star} alt="Logo" className="Star-right" />
    </div>
  );
};