import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Soccer Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default DarkModeToggler;
