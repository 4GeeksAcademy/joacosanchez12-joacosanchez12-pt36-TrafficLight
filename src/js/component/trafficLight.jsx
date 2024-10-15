import React, { useState } from 'react';
import Light from './light.jsx';
import "./trafficLight.css"

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);

  const cycleColors = () => {
    setColor(prevColor => {
      const currentIndex = colors.indexOf(prevColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      return colors[nextIndex];
    });
  };

  const addPurple = () => {
    if (!colors.includes('purple')) {
      setColors([...colors, 'purple']);
    }
  };

  return (
    <div>
      <div className="traffic-light">
        {colors.map(lightColor => (
          <Light 
            key={lightColor}
            color={lightColor}
            isActive={color === lightColor}
            onClick={() => setColor(lightColor)}
          />
        ))}
      </div>
      <button type="button" className="btn btn-secondary m-2" onClick={cycleColors}>Cycle Colors</button>
      <button type="button" className="btn btn-secondary m-2" onClick={addPurple}>Add Purple</button>
    </div>
  );
};

export default TrafficLight;