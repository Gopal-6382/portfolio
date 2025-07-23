// src/components/ModalContent.jsx
import { DeveloperPillar, TimelineItem } from "./Helper";
import { Modal, Button } from "react-bootstrap";
import { TypewriterEffect } from "./Helper";
import "../Sass/Modal.scss";
export const ModalContent = ({ modalType, handleClose }) => {
  const modalStyle = {
    background: "#f6f9d4",
    color: "#333",
    border: "none",
  };

  switch (modalType) {
    case "about":
      return (
        <>
          <Modal.Header closeButton style={modalStyle}>
            <Modal.Title
              style={{
                color: "#2a2a2a",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="modal-title-icon">G</span>
              About Gopal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ ...modalStyle, padding: "0" }}>
            <div className="modal-about-container">
              {/* Developer Hero Section */}
              <div className="modal-hero-section">
                <div className="modal-avatar">
                  <div className="modal-avatar-inner">👨💻</div>
                </div>

                <h2 className="modal-hero-title">Gopal Krishnan</h2>

                <p className="modal-hero-subtitle">
                  <TypewriterEffect
                    text={[
                      "Frontend Specialist | React Craftsman",
                      "UI/UX Advocate | Performance Optimizer",
                      "Clean Code Evangelist",
                    ]}
                  />
                </p>
              </div>

              {/* Developer DNA Section */}
              <div className="modal-dna-section">
                <DeveloperPillar
                  icon="</>"
                  title="Technical Stack"
                  items={[
                    { name: "MongoDb", level: 90 },
                    { name: "Express.js", level: 95 },
                    { name: "React", level: 95 },
                    { name: "Node.js", level: 90 },
                  ]}
                  color="#0066cc"
                />
              </div>

              {/* CTA Section */}
              <div className="modal-cta-section">
                <p className="modal-cta-text">
                  Ready to build something exceptional?
                </p>
                <div className="modal-cta-buttons">
                  <button
                    className="modal-cta-primary"
                    onClick={() => {
                      handleClose();
                      window.location.hash = "#section-4";
                    }}
                  >
                    <span>View My Projects</span>
                    <span>→</span>
                  </button>
                  <button className="modal-cta-secondary">
                    <a
                      className="modal-cta-link"
                      href="../assets/Resume/resume.pdf"
                      download
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </>
      );

    case "hire":
      return (
        <>
          <Modal.Header closeButton style={modalStyle}>
            <Modal.Title className="modal-title">Why Hire Me?</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ ...modalStyle, padding: "2rem" }}>
            <div className="modal-hire-grid">
              <DeveloperPillar
                icon="💼"
                title="Freelance Availability"
                items={[
                  "Currently accepting new projects",
                  "Flexible engagement models",
                  "Remote collaboration expert",
                ]}
                color="#0066cc"
                isList={true}
              />
              <DeveloperPillar
                icon="⚙️"
                title="Development Philosophy"
                items={[
                  "Mobile-first approach",
                  "Component-driven architecture",
                  "Pixel-perfect implementation",
                  "Performance budget awareness",
                ]}
                color="#2a2a2a"
                isList={true}
              />
              <DeveloperPillar
                icon="🛠️"
                title="Working Style"
                items={[
                  "Agile methodology",
                  "Daily progress updates",
                  "Transparent communication",
                ]}
                color="#2a2a2a"
                isList={true}
              />
            </div>

            <div className="modal-hire-cta">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  handleClose();
                  window.location.hash = "#contact";
                }}
                className="modal-hire-button"
                href="#section-5"
              >
                Get in Touch
              </Button>
            </div>
          </Modal.Body>
        </>
      );

    case "resume":
      return (
        <>
          <Modal.Header closeButton style={modalStyle}>
            <Modal.Title className="modal-title">
              My Professional Journey
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ ...modalStyle, padding: "2rem" }}>
            <div className="modal-resume-grid">
              <div>
                <h3 className="modal-resume-section-title">Education</h3>
                <TimelineItem
                  year="2022-2025"
                  title="Bacholor Of Computer Application"
                  description="Specialized in Web Developement"
                />
              </div>

              <div>
                <h3 className="modal-resume-section-title">
                  Career Highlights
                </h3>
                <TimelineItem
                  year="2023"
                  title="Tutore"
                  description="Working in the tutorial center"
                />
              </div>
              <div>
                <h3 className="modal-resume-section-title">Project</h3>
                <TimelineItem
                  year="2024"
                  title="Bus Finder App"
                  description="I Build  the  Bus finder app in Android studio"
                />
              </div>
            </div>

            <div className="modal-resume-cta">
              <Button
                variant="success"
                size="lg"
                className="modal-resume-button"
              >
                <a
                  className="modal-resume-link"
                  href="../assets/Resume/resume.pdf"
                  download
                >
                  Download Full Resume (PDF)
                </a>
              </Button>
            </div>
          </Modal.Body>
        </>
      );

    default:
      return null;
  }
};
