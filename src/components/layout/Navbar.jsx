import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <nav className="navbar-minimal">
      <div className="navbar-content">
        {/* Logo/Name */}
        <Link to="/" className="navbar-logo">
          Vonne Dew
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${!isProjectsPage ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isProjectsPage ? 'active' : ''}`}
          >
            Projects
          </Link>

          {/* Theme Toggle */}
          <div className="navbar-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

/*
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <nav className="navbar-minimal">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo-mono">
          VD
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${!isProjectsPage ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isProjectsPage ? 'active' : ''}`}
          >
            Projects
          </Link>

          <div className="navbar-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/


export default Navbar;