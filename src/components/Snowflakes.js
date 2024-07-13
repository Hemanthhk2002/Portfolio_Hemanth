import React from 'react';
import '../App.css';

const Snowflakes = ({ count = 50 }) => {
  const snowflakes = Array.from({ length: count });

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}
    </>
  );
};

export default Snowflakes;
