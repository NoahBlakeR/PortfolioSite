import { Link } from 'react-router-dom';
import './WorkHero.css';

const WorkHero = () => (
  <section className="section work-hero section-cream reveal" style={{ '--delay': '0ms' }}>
    <div className="container work-hero-grid">
      <div>
        <p className="eyebrow">Selected work</p>
        <h1>Case studies with context, craft, and clarity.</h1>
        <p className="lead">
          Two in-depth projects showing how I approach accessibility,
          onboarding, and front-end build quality.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/#contact">
            Request full case study
          </Link>
          <Link className="btn ghost" to="/">
            Back to home
          </Link>
        </div>
      </div>
      <div className="work-hero-card">
        <p className="eyebrow">What I deliver</p>
        <ul className="work-hero-list">
          <li>Accessibility-first UX and UI</li>
          <li>Front-end builds with React</li>
          <li>Research synthesis and testing</li>
          <li>Clear documentation and handoff</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WorkHero;
