import { useEffect, useState, useRef } from "react";
import { skills } from "../skills.js";
import "../Sass/skill.scss";

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

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;

      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const triggerHeight = window.innerHeight * 0.7;
      const releaseHeight = window.innerHeight * 0.3;
      
      // More sensitive trigger when scrolling down
      const triggerPoint = direction === 'down' ? triggerHeight : releaseHeight;
      
      const isInView = (
        rect.top <= triggerPoint &&
        rect.bottom >= releaseHeight
      );
      
      setIsVisible(isInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle reveal animation
  useEffect(() => {
    if (isVisible) {
      // Cancel any pending animation
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      
      // Show all cards
      setFlipped(cards.map(card => card.id));
      
      // Set timeout to hide cards
      animationRef.current = setTimeout(() => {
        setFlipped([]);
      }, 3000);
    } else {
      // Immediately hide cards when not visible
      setFlipped([]);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isVisible, cards]);

  const handleFlip = (id) => {
    // Don't allow flips during reveal or with matched cards
    if (flipped.length === cards.length || matched.includes(id)) return;
    
    // Don't allow flipping already flipped cards
    if (flipped.includes(id)) return;
    
    // Only allow 2 cards to be flipped at once
    if (flipped.length >= 2) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // Check for match if two cards are flipped
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
      <h2 className="section-title">Skill Matching Game</h2>
      <div className="skill-game">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`skill-card ${
              flipped.includes(card.id) || matched.includes(card.id) ? "flipped" : ""
            }`}
            onClick={() => handleFlip(card.id)}
          >
            <div className="card-inner">
              <div className="card-front" />
              <div className="card-back">
                <img src={card.icon} alt={card.name} className="skill-icon" />
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