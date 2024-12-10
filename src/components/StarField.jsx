// src/components/StarField.js
import React, { useEffect, useState } from 'react';
import './StarField.css';

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];

    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,  // Random x position (percentage)
        y: Math.random() * 100,  // Random y position (percentage)
        size: Math.random() * 2 + 0.5,  // Random size of the star
        speed: Math.random() * 2 + 3,  // Random speed for the animation
        direction: Math.random() < 0.5 ? 1 : -1,  // Random direction for the movement
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="star-field">
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
            animationDirection: star.direction === 1 ? 'normal' : 'reverse',
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarField;
