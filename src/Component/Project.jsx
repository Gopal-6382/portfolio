import { useEffect, useState } from "react";
import projects from "../assets/Project.json";
import "../Sass/Project.scss";

const ProjectsSection = () => {
  const [animationState, setAnimationState] = useState({
    initialLoad: false,
    periodicFlicker: false,
  });
  const [flippedCard, setFlippedCard] = useState(null);
  const [autoFlipIndex, setAutoFlipIndex] = useState(0);

  useEffect(() => {
    // Initial animation (4s)
    const initialTimer = setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, initialLoad: true }));
    }, 100);

    // Repeating animation (every 20s)
    const flickerInterval = setInterval(() => {
      setAnimationState((prev) => ({ ...prev, periodicFlicker: true }));

      const resetTimer = setTimeout(() => {
        setAnimationState((prev) => ({ ...prev, periodicFlicker: false }));
      }, 4000);

      return () => clearTimeout(resetTimer);
    }, 20000);

    // Auto-flip cards every 3 seconds
    const flipInterval = setInterval(() => {
      setAutoFlipIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(flickerInterval);
      clearInterval(flipInterval);
    };
  }, []);

  useEffect(() => {
    // Flip the current card based on autoFlipIndex
    if (projects[autoFlipIndex]) {
      setFlippedCard(projects[autoFlipIndex].id);
      
      // Unflip after 2.5 seconds (before next flip)
      const unflipTimer = setTimeout(() => {
        setFlippedCard(null);
      }, 2500);
      
      return () => clearTimeout(unflipTimer);
    }
  }, [autoFlipIndex]);

  const toggleFlip = (projectId) => {
    setFlippedCard(prev => prev === projectId ? null : projectId);
  };

  return (
    <section className="projects-section">
      <div className="container-fluid">
        <div className="row gy-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`col-12 col-md-6 col-lg-4 col-xl-3 project mt-5 project-${project.id.replace(
                "project-",
                ""
              )}`}
            >
              <div
                className={`
                  project-card 
                  ${animationState.initialLoad ? "animate-in" : ""}
                  ${animationState.periodicFlicker ? "flicker-active" : ""}
                  ${flippedCard === project.id ? "flipped" : ""}
                `}
                style={{
                  animationDelay: `${Math.random() * 0.5}s`,
                  transitionDelay: `${Math.random() * 0.3}s`,
                }}
              >
                <div className="project-front">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>

                  <div className="project-body">
                    <h3>
                      {project.title}
                      {project.badge && (
                        <span className="badge">{project.badge}</span>
                      )}
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
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                    </button>
                    <button 
                      className="btn flip-btn btn-sm rounded-5"
                      onClick={() => toggleFlip(project.id)}
                    >
                      {flippedCard === project.id ? "Show Front" : "Details"}
                    </button>
                  </div>
                </div>

                <div className="project-back">
                  <h3>Project Details</h3>
                  <div className="back-content">
                    <p>{project.backContent || "More details about this project would go here. You can add challenges faced, technologies used, or lessons learned."}</p>
                  </div>
                  <div className="back-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <button 
                    className="btn btn-primary btn-sm rounded-5 mt-3"
                    onClick={() => toggleFlip(project.id)}
                  >
                    Back to Front
                  </button>
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