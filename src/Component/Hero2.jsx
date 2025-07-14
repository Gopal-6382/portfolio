import { useState, useEffect } from "react";
import BoardSvg from "./Hero";
import "../Sass/Hero.scss";
import { Modal, Button } from "react-bootstrap";
import img1 from "../assets/img/IMG_20230126_214810.jpg";

// ===== Helper Components =====
const TypewriterEffect = ({
  text,
  typingSpeed = 70,
  eraseSpeed = 30,
  delayBetween = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayedText.length < text[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            text[currentIndex].substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetween);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(
            text[currentIndex].substring(0, displayedText.length - 1)
          );
        }, eraseSpeed);
      } else {
        setCurrentIndex((currentIndex + 1) % text.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    currentIndex,
    isTyping,
    delayBetween,
    eraseSpeed,
    text,
    typingSpeed,
  ]);

  return <>{displayedText}</>;
};

const DeveloperPillar = ({ icon, title, items, color, isList = false }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      border: "1px solid rgba(0,0,0,0.05)",
      marginBottom: "1.5rem",
    }}
  >
    <h3
      style={{
        fontWeight: 700,
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: color,
      }}
    >
      <span
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: `${color}10`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          color: color,
        }}
      >
        {icon}
      </span>
      {title}
    </h3>

    {isList ? (
      <ul style={{ paddingLeft: "1rem", marginBottom: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.75rem", lineHeight: "1.5" }}>
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <div style={{ display: "grid", gap: "1rem" }}>
        {items.map((item, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.25rem",
              }}
            >
              <span>{item.name}</span>
              <span>{item.level}%</span>
            </div>
            <div
              style={{
                height: "6px",
                background: "#f0f0f0",
                borderRadius: "3px",
              }}
            >
              <div
                style={{
                  width: `${item.level}%`,
                  height: "100%",
                  background: color,
                  borderRadius: "3px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const TimelineItem = ({ year, title, description }) => (
  <div
    style={{
      position: "relative",
      paddingLeft: "2rem",
      marginBottom: "1.5rem",
      "&:last-child": { marginBottom: 0 },
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: "#0066cc",
        border: "3px solid #f0f4ff",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "7px",
        top: "16px",
        bottom: "-1.5rem",
        width: "2px",
        background: "#e0e0e0",
      }}
    />
    <div style={{ fontWeight: 600, color: "#0066cc" }}>{year}</div>
    <div style={{ fontWeight: 700, margin: "0.25rem 0" }}>{title}</div>
    <div style={{ color: "#666", lineHeight: "1.5" }}>{description}</div>
  </div>
);

// ===== Main Component =====
export const Hero2 = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleShow = (type) => {
    setModalType(type);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const renderModalContent = () => {
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
                <span
                  style={{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    background:
                      "linear-gradient(135deg, #0066cc 0%, #004499 100%)",
                    borderRadius: "6px",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  G
                </span>
                About Gopal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ ...modalStyle, padding: "0" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                {/* Developer Hero Section */}
                <div
                  style={{
                    background:
                      "linear-gradient(95deg, #f6f9d4 0%, #f0f4ff 100%)",
                    padding: "2.5rem",
                    textAlign: "center",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: "white",
                      margin: "0 auto 1.5rem",
                      border: "3px solid white",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#e0e5ff",
                        fontSize: "3rem",
                      }}
                    >
                      👨💻
                    </div>
                  </div>

                  <h2
                    style={{
                      fontWeight: 800,
                      margin: "0.5rem 0",
                      fontSize: "2.2rem",
                      background:
                        "linear-gradient(90deg, #2a2a2a 0%, #0066cc 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Gopal Krishna
                  </h2>

                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: "#555",
                      maxWidth: "600px",
                      margin: "0 auto",
                      lineHeight: "1.6",
                    }}
                  >
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                    padding: "2.5rem",
                  }}
                >
                  {/* Technical Pillar */}
                  <DeveloperPillar
                    icon="</>"
                    title="Technical Stack"
                    items={[
                      { name: "React", level: 90 },
                      { name: "TypeScript", level: 85 },
                      { name: "CSS/Sass", level: 95 },
                      { name: "Node.js", level: 70 },
                    ]}
                    color="#0066cc"
                  />

                  {/* Process Pillar */}
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

                  {/* Career Highlights */}
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <h3
                      style={{
                        fontWeight: 700,
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "#2a2a2a",
                      }}
                    >
                      <span
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: "#f6f9d4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                        }}
                      >
                        🚀
                      </span>
                      Career Highlights
                    </h3>

                    <div style={{ marginTop: "1.5rem" }}>
                      <TimelineItem
                        year="2023-Present"
                        title="Freelance Frontend Developer"
                        description="Delivered 8+ production-ready web apps with React"
                      />
                      <TimelineItem
                        year="2021-2023"
                        title="UI Developer @ Startup"
                        description="Built design system used by 5+ products"
                      />
                      <TimelineItem
                        year="2020"
                        title="Open Source Contributor"
                        description="Merged PRs to 3 popular React libraries"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div
                  style={{
                    background: "#f8f9fa",
                    padding: "2rem",
                    textAlign: "center",
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "1.5rem",
                      color: "#555",
                    }}
                  >
                    Ready to build something exceptional?
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    <button
  style={{
    background: "#0066cc",
    color: "white",
    border: "none",
    padding: "0.75rem 2rem",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}
  onClick={() => {
    handleClose(); 
    window.location.hash = "#section-4"; 
  }}
>
  <span>View My Projects</span>
  <span>→</span>
</button>
                    <button
                      style={{
                        background: "white",
                        color: "#0066cc",
                        border: "1px solid #0066cc",
                        padding: "0.75rem 2rem",
                        borderRadius: "8px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      <a
                        style={{ textDecoration: "none", color: "#0066cc" }}
                        href="/public/resume.pdf"
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
              <Modal.Title
                style={{
                  color: "#2a2a2a",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                Why Hire Me?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ ...modalStyle, padding: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
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

              <div
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    handleClose();
                    window.location.hash = "#contact";
                  }}
                  style={{
                    padding: "0.75rem 2rem",
                    fontWeight: 600,
                  }}
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
              <Modal.Title
                style={{
                  color: "#2a2a2a",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                My Professional Journey
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ ...modalStyle, padding: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      marginBottom: "1.5rem",
                      color: "#0066cc",
                    }}
                  >
                    Education
                  </h3>
                  <TimelineItem
                    year="2018-2022"
                    title="Computer Science Degree"
                    description="Specialized in Human-Computer Interaction"
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      marginBottom: "1.5rem",
                      color: "#0066cc",
                    }}
                  >
                    Experience
                  </h3>
                  <TimelineItem
                    year="2022-Present"
                    title="Freelance Developer"
                    description="12+ completed projects"
                  />
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <Button
                  variant="success"
                  size="lg"
                  href="/your-resume.pdf"
                  target="_blank"
                  style={{
                    padding: "0.75rem 2rem",
                    fontWeight: 600,
                  }}
                >
                  <a
                    style={{ textDecoration: "none" }}
                    href="/public/resume.pdf"
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

  return (
    <div id="section-2" className="section-2">
      <div className="container">
        <div className="row">
          <div className="col-12 hero1 pe-md-5 col-md-6">
            <img src="/start2.svg" alt="Start2" className="star-2" />
            <h1 className="t-hero">I Design And Develop Top Notch Websites</h1>
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
          <div className="col-12 hero-2 col-md-6 board position-relative">
            <img src="/Hero-Arrow.svg" alt="Arrow" className="hero-arrow " />
            <BoardSvg imageUrl={img1} className="b-svg" />
            <img src="/bulb.svg" alt="Bulb" className="bulb" />
            <img src="/Hero-Star.svg" alt="Hero Star" className="hero-star" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        {renderModalContent()}
        <Modal.Footer style={{ background: "#f6f9d4", borderTop: "none" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
