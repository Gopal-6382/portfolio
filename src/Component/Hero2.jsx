import { useState } from "react";
import BoardSvg from "./Hero";
import "../Sass/Hero.scss";
import { Modal, Button } from "react-bootstrap"; // assuming Bootstrap is installed

export const Hero2 = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleShow = (type) => {
    setModalType(type);
    setShow(true);
  };

  const handleClose = () => setShow(false);
const renderModalContent = () => {
    // Consistent style for all modals
    const modalStyle = {
        background: '#f6f9d4',
        color: '#333',
        border: 'none'
    };

    switch (modalType) {
      case "about":
        return (
          <>
            <Modal.Header closeButton style={modalStyle}>
              <Modal.Title style={{ color: '#333' }}>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalStyle}>
              <p>
                I'm a frontend developer focused on building engaging user
                experiences using React and game-based interfaces.
              </p>
              <ul>
                <li>🧠 Skill games</li>
                <li>⚛️ Modern UI design</li>
                <li>🎯 Interactive web features</li>
              </ul>
            </Modal.Body>
          </>
        );
      case "hire":
        return (
          <>
            <Modal.Header closeButton style={modalStyle}>
              <Modal.Title style={{ color: '#333' }}>Hire Me</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalStyle}>
              <p>
                I'm available for freelance or project-based work. Let's build
                something impactful!
              </p>
              <p>💻 Services: UI Design, Skill Games, React Websites</p>
              <Button
                variant="success"
                className="mt-3"
                onClick={() => (window.location = "#contact")}
              >
                Contact Me
              </Button>
            </Modal.Body>
          </>
        );
      case "resume":
        return (
          <>
            <Modal.Header closeButton style={modalStyle}>
              <Modal.Title style={{ color: '#333' }}>My Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalStyle}>
              <p>Check out my resume or download it here:</p>
              <a
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>
            </Modal.Body>
          </>
        );
      default:
        return null;
    }
};

  return (
    <div id="section-2" className="section-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/start2.svg" alt="Start2" className="star-2" />
            <h1 className="t-hero">
              I Design And Develop {" "}
              {" "}
              Top Notch Websites
            </h1>
            <div className="tech-stack d-flex gap-3 py-2">
                {[
                  { name: "MongoDB", path: "/Icons/skill-icons--mongodb.svg" },
                  {
                    name: "Express",
                    path: "/Icons/skill-icons--expressjs-dark.svg",
                  },
                  { name: "React", path: "/Icons/skill-icons--react-dark.svg" },
                  {
                    name: "Node.js",
                    path: "/Icons/skill-icons--nodejs-dark.svg",
                  },
                ].map((tech, index) => (
                  <img
                    key={index}
                    src={`/public${tech.path}`}
                    alt={tech.name}
                    className="tech-icon"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                ))}
              </div>
            <div className="btnsection d-flex gap-3  mt-5">
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("about")}
              >
                About Me
              </button>
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("hire")}
              >
                Hire Me
              </button>
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("resume")}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 board position-relative">
            <img src="/Hero-Arrow.svg" alt="Arrow" className="hero-arrow " />
            <BoardSvg imageUrl="/IMG_20230126_214810.jpg" className="b-svg" />
            <img src="/bulb.svg" alt="Bulb" className="bulb" />
            <img src="/Hero-Star.svg" alt="Hero Star" className="hero-star" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} fullscreen>
        {renderModalContent()}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
