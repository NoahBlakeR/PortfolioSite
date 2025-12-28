import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div>
        <Logo />
        <p>UX designer focused on accessibility and thoughtful front-end craft.</p>
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="https://www.behance.net" aria-label="Behance">
          Behance
        </a>
        <a href="https://github.com" aria-label="GitHub">
          GitHub
        </a>
      </div>
      <div className="footer-meta">
        <span>Eindhoven, Netherlands</span>
        <span>Open to junior UX roles</span>
      </div>
    </div>
  </footer>
);

export default Footer;
