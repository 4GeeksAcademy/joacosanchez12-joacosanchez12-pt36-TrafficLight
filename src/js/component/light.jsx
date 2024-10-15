import React from 'react';

const Light = ({ color, isActive, onClick }) => {
  return (
    <div
      className={`light ${color} ${isActive ? 'glow' : ''}`}
      onClick={onClick}
    ></div>
  );
};

export default Light;