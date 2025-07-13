import { useEffect, useState, useRef } from "react";
import projects from "../assets/Project.json";
import "../Sass/Project.scss";

const ProjectsSection = () => {
  const [animationState, setAnimationState] = useState({
    initialLoad: false,
    periodicFlicker: false,
  });
  const [flippedCards, setFlippedCards] = useState([]);
  const containerRef = useRef(null);
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, initialLoad: true }));
    }, 100);

    const flickerInterval = setInterval(() => {
      setAnimationState((prev) => ({ ...prev, periodicFlicker: true }));
      const resetTimer = setTimeout(() => {
        setAnimationState((prev) => ({ ...prev, periodicFlicker: false }));
      }, 4000);

      return () => clearTimeout(resetTimer);
    }, 20000);

    // Handle scroll to unflip cards
    const handleScroll = () => {
      setFlippedCards([]);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      clearTimeout(initialTimer);
      clearInterval(flickerInterval);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const toggleFlip = (projectId, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setFlippedCards((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section className="projects-section" ref={containerRef}>
      <div className="container-fluid">
        <div className="row gy-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4 col-xl-3 project">
              <div
                className={`project-card ${animationState.initialLoad ? "animate-in" : ""} ${
                  animationState.periodicFlicker ? "flicker-active" : ""
                } ${flippedCards.includes(project.id) ? "flipped" : ""}`}
                onClick={(e) => !isTouchDevice && toggleFlip(project.id, e)}
                onTouchEnd={(e) => isTouchDevice && toggleFlip(project.id, e)}
              >
                {/* Front Side */}
                <div className="project-front">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-body">
                    <h3>
                      {project.title}
                      {project.badge && <span className="badge">{project.badge}</span>}
                    </h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button
                      className="btn btn-primary btn-sm rounded-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      View Project
                    </button>
                    <button
                      className="btn flip-btn btn-sm rounded-5"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.git, "_blank");
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="project-back">
                  <h3>{project.backTitle || "Project Details"}</h3>
                  <div className="back-content">
                    {(project.backContent || []).map((para, i) => (
                      <p className="p" key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;