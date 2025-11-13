import useTheme from '../../hooks/useTheme';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <span className="material-icons">
        {isDarkMode ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;