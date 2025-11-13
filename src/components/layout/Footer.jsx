import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-minimal">
      <div className="footer-content">
        {/* Left: Copyright */}
        <div className="footer-left">
          <p>© {currentYear} Vonne Dew</p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-center">
          <Link to="/" className="footer-link">Home</Link>
          <span className="footer-divider">·</span>
          <Link to="/projects" className="footer-link">Projects</Link>
          <span className="footer-divider">·</span>
          <a
            href="https://github.com/VawnDyu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>

        {/* Right: Made with love */}
        <div className="footer-right">
          <p>Made with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;