import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Apply theme changes to the document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;