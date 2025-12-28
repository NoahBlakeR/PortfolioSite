import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = forwardRef(({ menuOpen, onToggleMenu, onCloseMenu }, ref) => (
  <header className="site-header" ref={ref}>
    <div className="container header-inner">
      <Logo onClick={onCloseMenu} />
      <div className="nav-group">
        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={onToggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="nav-toggle-label">Menu</span>
          <span className="nav-toggle-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`} id="primary-nav">
          <nav className="nav" aria-label="Primary">
            <Link to="/work" onClick={onCloseMenu}>
              Work
            </Link>
            <Link to="/#process" onClick={onCloseMenu}>
              Process
            </Link>
            <Link to="/#about" onClick={onCloseMenu}>
              About
            </Link>
            <Link to="/#contact" onClick={onCloseMenu}>
              Contact
            </Link>
          </nav>
        </div>
        <Link className="btn ghost nav-cta" to="/#contact" onClick={onCloseMenu}>
          Let&apos;s connect
        </Link>
      </div>
    </div>
  </header>
));

Header.displayName = 'Header';

export default Header;
