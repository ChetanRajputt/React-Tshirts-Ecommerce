import React, { useState } from 'react';

const Test = () => {
  const [zoom, setZoom] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setZoom(true);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  return (
    <div 
      className="relative overflow-hidden w-64 h-64" 
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/mug-white.jpg" 
        alt="Zoomable" 
        className={`transform ${zoom ? 'scale-150' : 'scale-100'} transition-transform duration-300`}
        style={{ transformOrigin: `${offset.x}% ${offset.y}%` }}
      />
    </div>
  );
};

export default Test;
