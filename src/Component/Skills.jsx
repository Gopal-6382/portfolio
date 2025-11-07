import { useState } from "react";
import "../Sass/skill.scss";

const iconFiles = import.meta.glob("../assets/Icons/*.svg", { eager: true });

const iconNames = [
  "aiscript-light",
  "androidstudio-dark",
  "bootstrap",
  "c",
  "cpp",
  "css",
  "expressjs-dark",
  "figma-dark",
  "github-dark",
  "gradle-dark",
  "html",
  "idea-dark",
  "java-dark",
  "mongodb",
  "mysql-dark",
  "linux-dark",
  "nodejs-dark",
  "react-dark",
  "sass",
  "sqlite",
  "stackoverflow-dark",
  "vite-dark",
  "vscode-dark",
  "windows-light",
];

const skills = iconNames.map((name) => {
  const filename = `skill-icons--${name}.svg`;
  const path = `../assets/Icons/${filename}`;
  const icon = iconFiles[path]?.default ?? null;

  return {
    name: name
      .replace(/-/g, " ")
      .replace(/(dark|light)/gi, "")
      .trim()
      .toUpperCase(),
    icon,
  };
});

const SkillGame = () => {
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const cards = (showAllSkills ? skills : [...skills, ...skills]).map(
    (skill, index) => ({
      ...skill,
      id: index,
    }),
  );

  const handleFlip = (id) => {
    if (showAllSkills) return;
    if (flipped.length === cards.length || matched.includes(id)) return;
    if (flipped.includes(id)) return;
    if (flipped.length >= 2) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].name === cards[secondId].name) {
        setMatched((prev) => [...prev, firstId, secondId]);
      }
      setTimeout(() => {
        setFlipped((prev) => prev.filter((id) => matched.includes(id)));
      }, 1000);
    }
  };

  const handleToggleMode = () => {
    setShowAllSkills((prev) => !prev);
    setFlipped([]);
    setMatched([]);
  };

  return (
    <section id="section-3" className="skill-section">
      <div className="header">
        <h1 className="section-title">Skill Matching Game</h1>
        <button className="flip-all-button" onClick={handleToggleMode}>
          {showAllSkills ? "Play Game" : "Show All Skills"}
        </button>
      </div>

      <div className="skill-game">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`skill-card ${
              flipped.includes(card.id) ||
              matched.includes(card.id) ||
              showAllSkills
                ? "flipped"
                : ""
            }`}
            onClick={() => handleFlip(card.id)}
          >
            <div className="card-inner">
              <div className="card-front" />
              <div className="card-back">
                {card.icon && (
                  <img src={card.icon} alt={card.name} className="skill-icon" />
                )}
                <p className="skill-name">{card.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillGame;
