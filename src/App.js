import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const HomePage = () => (
  <main id="main">
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
          <p className="note">
            Currently transitioning my professional name to Noah Rhodes.
          </p>
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
            Mapped patient and clinician journeys to reduce setup friction
            and designed accessible flows for a pilot concept.
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

    <section className="clients section section-white reveal" style={{ '--delay': '0ms' }}>
      <div className="container">
        <p className="eyebrow">Collaborated with</p>
        <div className="client-row">
          <span>Philips</span>
          <span>Fontys</span>
          <span>Studio Krom</span>
          <span>Studio Myo</span>
          <span>Independent</span>
        </div>
      </div>
    </section>

    <section id="work" className="section work section-rose">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Spotlight projects built for clarity and care.</h2>
          </div>
          <p className="lead">
            Two full case studies: an accessibility Chrome extension and a
            connected-care onboarding concept.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card reveal" style={{ '--delay': '0ms' }}>
            <div
              className="project-cover cover-1"
              role="img"
              aria-label="Soft rose gradient"
            ></div>
            <div className="project-body">
              <div className="project-tags">
                <span className="tag">Accessibility</span>
                <span className="tag">Chrome Extension</span>
                <span className="tag">Research</span>
                <span className="tag">Front-End</span>
              </div>
              <h3>Digital Accessibility - Studio Krom</h3>
              <p>
                Researched ADHD accessibility needs and designed a browser
                extension that improves focus, readability, and user control.
              </p>
              <div className="project-meta">
                <div>
                  <span className="meta-label">Role</span>
                  <span className="meta-value">UX + UI + Front-End</span>
                </div>
                <div>
                  <span className="meta-label">Deliverables</span>
                  <span className="meta-value">
                    Research synthesis, UI design, React build
                  </span>
                </div>
              </div>
              <Link className="text-link" to="/work#studio-krom">
                View case study
              </Link>
            </div>
          </article>

          <article className="project-card reveal" style={{ '--delay': '80ms' }}>
            <div
              className="project-cover cover-2"
              role="img"
              aria-label="Warm blush gradient with soft glow"
            ></div>
            <div className="project-body">
              <div className="project-tags">
                <span className="tag">Internship</span>
                <span className="tag">Health tech</span>
                <span className="tag">Onboarding</span>
              </div>
              <h3>Philips Connected Care</h3>
              <p>
                Designed onboarding and education flows for a connected care
                concept, translating clinical needs into clear, accessible
                steps.
              </p>
              <div className="project-meta">
                <div>
                  <span className="meta-label">Role</span>
                  <span className="meta-value">UX Design Intern</span>
                </div>
                <div>
                  <span className="meta-label">Deliverables</span>
                  <span className="meta-value">
                    Journey maps, wireframes, usability testing
                  </span>
                </div>
              </div>
              <Link className="text-link" to="/work#philips">
                View case study
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      id="process"
      className="section process section-white reveal"
      style={{ '--delay': '0ms' }}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Process</p>
            <h2>Structured, collaborative, and grounded in evidence.</h2>
          </div>
          <p className="lead">
            I keep teams aligned with lightweight rituals and clear
            artifacts, then validate decisions quickly with users.
          </p>
        </div>
        <div className="process-grid">
          <div className="process-card">
            <span className="step">01</span>
            <h3>Discover</h3>
            <p>
              Stakeholder interviews, accessibility audits, and competitive
              scans to understand constraints and opportunities.
            </p>
          </div>
          <div className="process-card">
            <span className="step">02</span>
            <h3>Frame</h3>
            <p>
              Problem statements, personas, and journey maps to align on the
              strongest outcomes.
            </p>
          </div>
          <div className="process-card">
            <span className="step">03</span>
            <h3>Prototype</h3>
            <p>
              Wireframes to hi-fi flows and interactive prototypes that are
              ready for feedback.
            </p>
          </div>
          <div className="process-card">
            <span className="step">04</span>
            <h3>Validate</h3>
            <p>
              Usability testing, iteration notes, and handoff to keep
              delivery smooth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="section about section-cream reveal" style={{ '--delay': '0ms' }}>
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2>Designing for people first, platforms second.</h2>
          <p className="lead">
            UX designer with a Media Design background from Fontys University
            of Applied Sciences in Eindhoven, focused on UX/UI, accessibility
            research, and front-end development.
          </p>
          <ul className="about-list">
            <li>Accessibility-first design, including ADHD-friendly interfaces.</li>
            <li>Wireframing, prototyping, and user testing with clear documentation.</li>
            <li>Front-end builds in React and experiments with 3D web experiences.</li>
          </ul>
        </div>
        <div className="about-cards">
          <div className="mini-card">
            <h3>Core skills</h3>
            <div className="tag-list">
              <span className="tag">Figma</span>
              <span className="tag">Wireframing</span>
              <span className="tag">Prototyping</span>
              <span className="tag">UX research</span>
              <span className="tag">UI design</span>
              <span className="tag">Accessibility</span>
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">User testing</span>
              <span className="tag">HTML/CSS</span>
              <span className="tag">Chrome extensions</span>
              <span className="tag">Three.js</span>
            </div>
          </div>
          <div className="mini-card">
            <h3>Education</h3>
            <ul className="principles">
              <li>Associate Degree, Media Design - Fontys University of Applied Sciences</li>
              <li>Propedeuse HBO Media Design - Fontys (2019)</li>
              <li>HAVO - Comenius Lyceum Amsterdam (2018)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      id="project-archive"
      className="section archive section-white reveal"
      style={{ '--delay': '0ms' }}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Additional work</p>
            <h2>More projects beyond the spotlight.</h2>
          </div>
          <p className="lead">
            Branding exploration, web experiments, and smaller builds.
          </p>
        </div>
        <div className="table-wrap">
          <table className="archive-table">
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Focus</th>
                <th scope="col">Role</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Branding Project - Studio Myo</td>
                <td>Visual identity + 3D assets</td>
                <td>Brand + UX Design</td>
                <td>2025</td>
              </tr>
              <tr>
                <td>Portfolio Website Development</td>
                <td>React + 3D web experience</td>
                <td>UX + Front-End</td>
                <td>2025</td>
              </tr>
              <tr>
                <td>Todo List Application</td>
                <td>React app with API + state</td>
                <td>Front-End</td>
                <td>2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="contact" className="section contact section-rose reveal" style={{ '--delay': '0ms' }}>
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something accessible.</h2>
          <p className="lead">
            Based in Eindhoven, NL. Available for junior UX roles.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:noah.blake.rhodes@gmail.com">
            noah.blake.rhodes@gmail.com
          </a>
          <a className="btn ghost" href="tel:+31632819070">
            +31 6 32819070
          </a>
        </div>
      </div>
    </section>
  </main>
);

const WorkPage = () => (
  <main id="main">
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

    <section
      className="section work-detail section-white reveal"
      id="studio-krom"
      style={{ '--delay': '60ms' }}
    >
      <div className="container">
        <div className="work-detail-header">
          <div>
            <p className="eyebrow">Case study</p>
            <h2>Digital Accessibility - Studio Krom</h2>
            <p className="lead">
              Designed and built an accessibility-focused Chrome extension for
              ADHD users, owning UX, UI, and front-end execution.
            </p>
          </div>
          <div className="work-meta">
            <div>
              <span className="meta-label">Role</span>
              <span className="meta-value">UX + UI + Front-End</span>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <span className="meta-value">Accessibility Chrome extension</span>
            </div>
            <div>
              <span className="meta-label">Tools</span>
              <span className="meta-value">Figma, React, Chrome extensions</span>
            </div>
            <div>
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2025</span>
            </div>
          </div>
        </div>
        <div className="work-media-grid">
          <div className="work-media wide">
            <span>Project overview image</span>
          </div>
          <div className="work-media">
            <span>Research snapshot</span>
          </div>
          <div className="work-media">
            <span>UI flow / prototype</span>
          </div>
        </div>
        <div className="work-detail-grid">
          <div className="work-detail-card">
            <h3>Challenge</h3>
            <p>
              ADHD users needed quick control over distractions and readability
              without adding more UI noise.
            </p>
          </div>
          <div className="work-detail-card">
            <h3>Approach</h3>
            <ul>
              <li>Researched ADHD accessibility needs and daily pain points.</li>
              <li>Mapped tasks and flows, then designed wireframes and UI.</li>
              <li>Built a functional React extension to validate the concept.</li>
            </ul>
          </div>
          <div className="work-detail-card">
            <h3>Outcome</h3>
            <p>
              Delivered a working prototype with documentation and testing notes
              to support future iterations.
            </p>
          </div>
        </div>
        <div className="work-detail-cta">
          <Link className="btn primary" to="/#contact">
            Request full case study
          </Link>
          <Link className="btn ghost" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>

    <section
      className="section work-detail section-rose reveal"
      id="philips"
      style={{ '--delay': '120ms' }}
    >
      <div className="container">
        <div className="work-detail-header">
          <div>
            <p className="eyebrow">Internship</p>
            <h2>Philips Connected Care</h2>
            <p className="lead">
              Onboarding and education flows for a connected care concept,
              translating clinical workflows into calm, accessible steps.
            </p>
            <p className="work-note">Selected details are intentionally high-level.</p>
          </div>
          <div className="work-meta">
            <div>
              <span className="meta-label">Role</span>
              <span className="meta-value">UX Design Intern</span>
            </div>
            <div>
              <span className="meta-label">Focus</span>
              <span className="meta-value">Onboarding and service flows</span>
            </div>
            <div>
              <span className="meta-label">Tools</span>
              <span className="meta-value">Figma, FigJam, accessibility checks</span>
            </div>
            <div>
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2024</span>
            </div>
          </div>
        </div>
        <div className="work-media-grid">
          <div className="work-media wide">
            <span>Onboarding journey map</span>
          </div>
          <div className="work-media">
            <span>Flow states</span>
          </div>
          <div className="work-media">
            <span>Interface details</span>
          </div>
        </div>
        <div className="work-detail-grid">
          <div className="work-detail-card">
            <h3>Challenge</h3>
            <p>
              Aligning patient and clinician needs while keeping setup steps
              clear, safe, and easy to follow.
            </p>
          </div>
          <div className="work-detail-card">
            <h3>Approach</h3>
            <ul>
              <li>Mapped journeys for both patient and clinical workflows.</li>
              <li>Designed accessible flows with clear states and guidance.</li>
              <li>Collaborated with stakeholders to validate the concept.</li>
            </ul>
          </div>
          <div className="work-detail-card">
            <h3>Outcome</h3>
            <p>
              Delivered onboarding concepts, flow documentation, and usability
              insights for pilot direction.
            </p>
          </div>
        </div>
        <div className="work-detail-cta">
          <Link className="btn primary" to="/#contact">
            Request full case study
          </Link>
          <Link className="btn ghost" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  </main>
);

const App = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const root = document.documentElement;
    document.body.classList.add('loaded');

    let rafId = null;

    const updateScrollState = () => {
      rafId = null;
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      root.style.setProperty('--scroll-progress', progress.toString());

      if (prefersReducedMotion) {
        root.style.setProperty('--bg-shift', '0px');
        root.style.setProperty('--hero-shift', '0px');
        root.style.setProperty('--hero-shift-soft', '0px');
      } else {
        const bgShift = Math.min(scrollTop * 0.08, 120);
        const heroShift = Math.min(scrollTop * 0.06, 80);
        root.style.setProperty('--bg-shift', `${-bgShift}px`);
        root.style.setProperty('--hero-shift', `${-heroShift}px`);
        root.style.setProperty('--hero-shift-soft', `${-heroShift * 0.6}px`);
      }

      if (headerRef.current) {
        headerRef.current.classList.toggle('is-scrolled', scrollTop > 8);
      }
    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateScrollState();

    const revealItems = Array.from(document.querySelectorAll('.reveal'));

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return () => {
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId);
        }
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });

    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true"></div>

      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <div className="logo">Noah B.</div>
          <div className="nav-group">
            <button
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="nav-toggle-label">Menu</span>
              <span className="nav-toggle-bars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div
              className={`nav-panel ${menuOpen ? 'is-open' : ''}`}
              id="primary-nav"
            >
              <nav className="nav" aria-label="Primary">
                <Link to="/work" onClick={closeMenu}>
                  Work
                </Link>
                <Link to="/#process" onClick={closeMenu}>
                  Process
                </Link>
                <Link to="/#about" onClick={closeMenu}>
                  About
                </Link>
                <Link to="/#contact" onClick={closeMenu}>
                  Contact
                </Link>
              </nav>
            </div>
            <Link className="btn ghost nav-cta" to="/#contact" onClick={closeMenu}>
              Let&apos;s connect
            </Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo">Noah B.</div>
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
    </>
  );
};

export default App;
