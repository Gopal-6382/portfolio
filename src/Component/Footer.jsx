import "../Sass/Footer.scss";
import insta from "../assets/Social/insta.svg";
import linkden from "../assets/Social/linkden.svg";
import git from "../assets/Social/git.svg";
import wattsapp from "../assets/Social/wattsapp.svg";

// Define your social links directly (no JSON needed)
const socialLinks = [
  {
    name: "GitHub",
    src: git,
    link: "https://github.com/Gopal-6382",
  },
  {
    name: "linkden",
    src: linkden,
    link: "https://linkedin.com/in/gopalkrishnan-dev",
  },
  {
    name: "WhatsApp",
    src: wattsapp,
    link: "https://wa.me/+916382972585",
  },
  {
    name: "Instagram",
    src: insta,
    link: "https://www.instagram.com/gopal_krishnan_gk",
  },
];

export const Footer = () => {
  return (
    <footer className="section-6 beder">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Social Icons - Right on desktop, Bottom on mobile */}
          <div className="col-12 col-md-4 pt-2 pt-md-0 order-1 pe-md-5 order-md-3">
            <ul className="social-icons">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name}`}
                  >
                    <img
                      src={social.src}
                      alt={social.name}
                      className="social-icon"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Text - Center */}
          <div className="col-12 col-md-4 order-3 order-md-2 text-center">
            <p className="contact-prompt">Click icons to contact</p>
          </div>

          {/* Copyright - Left on desktop, Top on mobile */}
          <div className="col-12 col-md-4 ps-md-5 order-1  text-center text-md-start">
            <p className="copyright order-1">
              All rights reserved &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
