import React, { useState, useEffect } from "react";

const Letter = ({ letter, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span
      className={`inline-block text-8xl font-bold transition-all duration-300 transform
        ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        ${isHovered ? "text-red-500 scale-125" : "text-yellow-500"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {letter}
    </span>
  );
};

const App = () => {
  const name = "JIVUMA";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center">
      <div className="p-8 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
        {name.split("").map((letter, index) => (
          <Letter key={index} letter={letter} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
