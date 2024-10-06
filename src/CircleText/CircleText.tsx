import React from 'react';

const CircleText = () => {
  const text = 'Scroll down for work together ';

  return (
    <div className="circle">
      <div className="circle-text">
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${index * (360 / text.length)}deg) translate(50px)`, // Adjusted translation for a smaller circle
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <img
        src="/assets/images/webora-mouse.png"
        alt="Mouse Icon"
        className="mouse-icon"
      />
    </div>
  );
};

export default CircleText;
