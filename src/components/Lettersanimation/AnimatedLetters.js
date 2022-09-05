import React from 'react';

function AnimatedLetters({ letters }) {
  return (
    <>
      {letters.map((letter, index) => {
        return <span key={index}>{letter}</span>;
      })}
    </>
  );
}

export default AnimatedLetters;
