// src/components/HelperComponents.jsx
import React from "react";
// In Helper.jsx
import "../Sass/Helper.scss";
export const TypewriterEffect = ({
  text,
  typingSpeed = 70,
  eraseSpeed = 30,
  delayBetween = 2000,
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayedText.length < text[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            text[currentIndex].substring(0, displayedText.length + 1),
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetween);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(
            text[currentIndex].substring(0, displayedText.length - 1),
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

export const DeveloperPillar = ({
  icon,
  title,
  items,
  color,
  isList = false,
}) => (
  <div className="developer-pillar">
    <h3 className="pillar-title" style={{ color }}>
      <span className="pillar-icon" style={{ color }}>
        {icon}
      </span>
      {title}
    </h3>

    {isList ? (
      <ul className="pillar-list">
        {items.map((item, i) => (
          <li key={i} className="pillar-list-item">
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <div className="pillar-skills">
        {items.map((item, i) => (
          <div key={i} className="skill-item">
            <div className="skill-header">
              <span>{item.name}</span>
              <span>{item.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${item.level}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const TimelineItem = ({ year, title, description }) => (
  <div className="timeline-item">
    <div className="timeline-dot" />
    <div className="timeline-line" />
    <div className="timeline-year">{year}</div>
    <div className="timeline-event-title">{title}</div>
    <div className="timeline-description">{description}</div>
  </div>
);
