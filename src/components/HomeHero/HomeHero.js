import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = () => (
  <section className="hero section section-cream">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">UX Designer + Front-End</p>
        <h1>Designing accessible, confident experiences that feel calm and human.</h1>
        <p className="lead">
          UX designer focused on UI/UX and front-end development. I blend
          research, prototyping, and accessible UI to build products that
          reduce friction and build trust.
        </p>
        <p className="note">Currently transitioning my professional name to Noah Rhodes.</p>
        <div className="hero-actions">
          <Link className="btn primary" to="/work">
            View projects
          </Link>
          <Link className="btn ghost" to="/#contact">
            Let&apos;s talk
          </Link>
        </div>
        <ul className="hero-tags">
          <li>Accessibility research</li>
          <li>React + UI</li>
          <li>3D web experiments</li>
        </ul>
      </div>
      <div className="hero-card">
        <div className="hero-card-header">
          <span className="pill">Internship</span>
          <span className="status-dot" aria-hidden="true"></span>
          <span className="subtle">Philips | Health tech</span>
        </div>
        <h2>Reimagining onboarding for connected care.</h2>
        <p>
          Mapped patient and clinician journeys to reduce setup friction and
          designed accessible flows for a pilot concept.
        </p>
        <div className="hero-card-meta">
          <div>
            <span className="meta-label">Focus</span>
            <span className="meta-value">Onboarding, accessibility</span>
          </div>
          <div>
            <span className="meta-label">Tools</span>
            <span className="meta-value">Figma, FigJam, testing</span>
          </div>
        </div>
        <Link className="text-link" to="/work#philips">
          See internship spotlight
        </Link>
      </div>
    </div>
  </section>
);

export default HomeHero;
