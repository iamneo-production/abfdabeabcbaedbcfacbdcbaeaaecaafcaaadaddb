import React from 'react';

const AppBar = ({ title, onReset }) => {
  const handleResetClick = () => {
    if (typeof onReset === 'function') {
      onReset();
    }
  };

  return (
    <div className="app-bar">
      <h1>{title}</h1>
      <button className='button' onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default AppBar;
