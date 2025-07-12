import { useEffect, useRef, useState } from "react";
import { skills } from "../skills.js";
import "../Sass/skill.scss";

const shuffleArray = (arr) => {
  return [...arr, ...arr]
    .map((item) => ({ ...item, id: Math.random() }))
    .sort(() => 0.5 - Math.random());
};

const SkillGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setCards(shuffleArray(skills));
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.relatedTarget)) {
        setFlipped([]);
      }
    };

    const node = sectionRef.current;
    if (node) {
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleFlip = (card) => {
    if (
      flipped.length === 2 ||
      flipped.some((f) => f.id === card.id) ||
      matched.includes(card.name)
    ) {
      return;
    }

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].name === newFlipped[1].name) {
        setMatched((prev) => [...prev, card.name]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <section id="Skills" className="skill-section" ref={sectionRef}>
      <h2 className="section-title">Skill Matching Game</h2>
      <div className="skill-game">
        {cards.map((card) => {
          const isFlipped =
            flipped.some((f) => f.id === card.id) ||
            matched.includes(card.name);

          return (
            <div
              key={card.id}
              className={`skill-card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(card)}
            >
              <div className="card-inner">
                <div className="card-front" />
                <div className="card-back">
                  <img src={card.icon} alt={card.name} className="skill-icon" />
                  <p className="skill-name text-capitalize">{card.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillGame;
