import { useEffect, useState } from "react";
import "../Sass/Nav.scss";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "#section-1" },
    { id: 2, name: "About", href: "#section-2" },
    { id: 3, name: "Skill", href: "#section-3" },
    { id: 4, name: "Projects", href: "#section-4" },
    { id: 5, name: "Contact", href: "#section-5" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHideNavbar(true); // Hide on scroll down
      } else {
        setHideNavbar(false); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="section-1" className={`section-1 ${hideNavbar ? "hide-on-scroll" : ""}`}>
      <div className="fixed-top mt-4 px-3 px-md-4">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-black bg-opacity-75 rounded-5 px-3">
            <div className="container-fluid position-relative">
              <button
                className={`navbar-toggler button-h ms-auto ${menuOpen ? "open" : ""}`}
                type="button"
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

              <div className={`collapse navbar-collapse custom-collapse ${menuOpen ? "show" : ""}`} id="navbarContent">
                <ul className="navbar-nav  justify-content-between  align-items-center w-100 fade-in-list ">
                  {navItems.map((item, index) => (
                    <li
                      className={`nav-item  fade-in-item ${index === navItems.length - 1 ? "last-nav-item" : ""}`}
                      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                      key={item.id}
                    >
                      <a
                        onClick={() => setMenuOpen(false)}
                        className="nav-link text-white hover-effect"
                        href={item.href}
                      >
                        {item.name}
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
