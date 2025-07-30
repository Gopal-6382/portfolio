import { useEffect, useState, useRef } from "react";
import "../Sass/skill.scss";

// 🧠 Load icons
const iconFiles = import.meta.glob('../assets/Icons/*.svg', { eager: true });

// 🧩 Define skills locally
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
  const [cards] = useState([...skills, ...skills].map((skill, index) => ({
    ...skill,
    id: index
  })));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;

      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const triggerHeight = window.innerHeight * 0.7;
      const releaseHeight = window.innerHeight * 0.3;
      const triggerPoint = direction === 'down' ? triggerHeight : releaseHeight;

      const isInView = (
        rect.top <= triggerPoint &&
        rect.bottom >= releaseHeight
      );
      setIsVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      if (animationRef.current) clearTimeout(animationRef.current);
      setFlipped(cards.map(card => card.id));
      animationRef.current = setTimeout(() => setFlipped([]), 3000);
    } else {
      setFlipped([]);
    }

    return () => clearTimeout(animationRef.current);
  }, [isVisible, cards]);

  const handleFlip = (id) => {
    if (flipped.length === cards.length || matched.includes(id)) return;
    if (flipped.includes(id)) return;
    if (flipped.length >= 2) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      if (cards[firstId].name === cards[secondId].name) {
        setMatched(prev => [...prev, firstId, secondId]);
      }
      setTimeout(() => {
        setFlipped(prev => prev.filter(id => matched.includes(id)));
      }, 1000);
    }
  };

  return (
    <section id="section-3" className="skill-section" ref={sectionRef}>
      <h1 className="section-title">Skill Matching Game</h1>
      <div className="skill-game">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`skill-card ${flipped.includes(card.id) || matched.includes(card.id) ? "flipped" : ""}`}
            onClick={() => handleFlip(card.id)}
          >
            <div className="card-inner">
              <div className="card-front" />
              <div className="card-back">
                {card.icon && (
                  <img
                    src={card.icon}
                    alt={card.name}
                    className="skill-icon"
                  />
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
