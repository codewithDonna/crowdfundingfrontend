import React, { useEffect, useState } from 'react';
import './StarField.css';

const StarField = () => {
  const [stars, setStars] = useState([]);
  const [cssKeyframes, setCssKeyframes] = useState('');

  // Create an array of stars
  useEffect(() => {
    const newStars = [];
    const keyframes = [];

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      const speed = Math.random() * 0.5 + 0.2;
      const direction = Math.random() < 0.5 ? 1 : -1; // Random direction (left to right or right to left)

      // Create unique keyframes for each star
      keyframes.push(`
        @keyframes moveStar-${i} {
          from {
            transform: translateX(${x}%) translateY(${y}%);
          }
          to {
            transform: translateX(${x + direction * 100}%) translateY(${y + direction * 100}%);
          }
        }
      `);

      newStars.push({
        id: i,
        x,
        y,
        size,
        speed,
      });
    }

    // Inject generated keyframes into the CSS
    setCssKeyframes(keyframes.join(' '));
    setStars(newStars);
  }, []);

  return (
    <div className="star-field">
      <style>{cssKeyframes}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.speed}s`,
            animationName: `moveStar-${star.id}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarField;
