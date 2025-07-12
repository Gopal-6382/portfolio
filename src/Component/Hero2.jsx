import  { useState } from "react";
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
    switch (modalType) {
      case "about":
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>I’m a frontend developer focused on building engaging user experiences using React and game-based interfaces.</p>
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
            <Modal.Header closeButton>
              <Modal.Title>Hire Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>I'm available for freelance or project-based work. Let's build something impactful!</p>
              <p>💻 Services: UI Design, Skill Games, React Websites</p>
              <Button variant="success" className="mt-3" onClick={() => window.location = "#contact"}>Contact Me</Button>
            </Modal.Body>
          </>
        );
      case "resume":
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>My Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Check out my resume or download it here:</p>
              <a href="/your-resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
            </Modal.Body>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="section-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/start2.svg" alt="Start2" className="star-2" />
            <h1 className="t-hero">
              I Design <div className="ic-main">⚛️</div> Top Notch Websites
            </h1>
            <div className="btnsection d-flex gap-3  mt-5">
              <button className="btn text-white rounded-5" onClick={() => handleShow("about")}>About Me</button>
              <button className="btn text-white rounded-5" onClick={() => handleShow("hire")}>Hire Me</button>
              <button className="btn text-white rounded-5" onClick={() => handleShow("resume")}>Resume</button>
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
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
