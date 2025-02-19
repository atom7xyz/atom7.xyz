import React from 'react';
import './ScrollButton.css';

const ScrollButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="scroll-button" onClick={onClick}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.5a1 1 0 01-.7-.29l-4.5-4.5a1 1 0 011.4-1.42L12 13.1l3.8-3.81a1 1 0 111.4 1.42l-4.5 4.5a1 1 0 01-.7.29z"/>
      </svg>
    </button>
  );
};

export default ScrollButton; 