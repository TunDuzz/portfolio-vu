import React from 'react';

const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated stars using CSS */}
      <div className="star-field">
        {/* Large glowing stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="star-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Medium twinkling stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Small floating stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`float-${i}`}
            className="star-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarField;
