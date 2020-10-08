import React from "react";
import "./SquaresAnimation.css";

function SquaresAnimation() {
  //squares animation
  const squares = (index) => {
    const random = (min, max) => Math.random() * (max - min) + min;
    const size = Math.floor(random(10, 120)); // math floor para arrendondar os valores
    const position = random(10, 89);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
    return (
      <li
        key={index}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          bottom: `-${size}px`,
          right: `${position}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`,
        }}
      ></li>
    );
  };

  return (
    <ul className="squares">
      {Array(10)
        .fill()
        .map((_, index) => squares(index))}
    </ul>
  );
}

export default SquaresAnimation;
