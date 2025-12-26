import { useEffect, useRef } from 'react';

const App = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    document.body.classList.add('loaded');

    const handleScroll = () => {
      if (!headerRef.current) {
        return;
      }
      headerRef.current.classList.toggle('is-scrolled', window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const revealItems = Array.from(document.querySelectorAll('.reveal'));

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return () => window.removeEventListener('scroll', handleScroll);
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
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <div className="logo">Noah Rhodes</div>
          <nav className="nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn ghost" href="#contact">
            Book a consult
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">UX Designer + Product Strategist</p>
              <h1>
                Designing calm, confident experiences that help people move fast
                and feel safe.
              </h1>
              <p className="lead">
                I partner with teams to turn complex systems into friendly,
                responsive products. From discovery through delivery, I focus on
                clarity, craft, and accessibility.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#work">
                  View projects
                </a>
                <a className="btn ghost" href="#contact">
                  Let&apos;s talk
                </a>
              </div>
              <ul className="hero-tags">
                <li>Research-led</li>
                <li>Systems thinking</li>
                <li>Design to dev</li>
              </ul>
            </div>
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="pill">Currently</span>
                <span className="status-dot" aria-hidden="true"></span>
                <span className="subtle">Open to select collaborations</span>
              </div>
              <h2>Unifying a multi-product platform into one cohesive experience.</h2>
              <p>
                Leading UX for a scalable design system and cross-platform IA
                that keeps enterprise workflows steady and human.
              </p>
              <div className="hero-card-meta">
                <div>
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">Navigation, workflow, handoff</span>
                </div>
                <div>
                  <span className="meta-label">Tools</span>
                  <span className="meta-value">Figma, FigJam, Maze</span>
                </div>
              </div>
              <a className="text-link" href="#work">
                See featured work
              </a>
            </div>
          </div>
        </section>

        <section className="clients section reveal" style={{ '--delay': '0ms' }}>
          <div className="container">
            <p className="eyebrow">Trusted by teams</p>
            <div className="client-row">
              <span>Urban Mobility Lab</span>
              <span>Harbor Health</span>
              <span>Northwind Logistics</span>
              <span>Brightleaf Finance</span>
              <span>Atlas Education</span>
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Featured work</p>
                <h2>Case studies that blend clarity, warmth, and a little edge.</h2>
              </div>
              <p className="lead">
                Each project highlights how I bring structure to messy problems
                while keeping the interface simple and accessible.
              </p>
            </div>

            <div className="project-grid">
              <article
                className="project-card feature reveal"
                style={{ '--delay': '0ms' }}
              >
                <div
                  className="project-cover cover-1"
                  role="img"
                  aria-label="Abstract blue and teal gradient with grid texture"
                ></div>
                <div className="project-body">
                  <div className="project-tags">
                    <span className="tag">Mobile + Web</span>
                    <span className="tag">Transit</span>
                  </div>
                  <h3>CityPulse Mobility</h3>
                  <p>
                    Reimagined the trip planner to make route decisions faster
                    for everyday riders, reducing cognitive load and improving
                    clarity across disruptions.
                  </p>
                  <div className="project-meta">
                    <div>
                      <span className="meta-label">Role</span>
                      <span className="meta-value">Lead UX</span>
                    </div>
                    <div>
                      <span className="meta-label">Deliverables</span>
                      <span className="meta-value">
                        Journey maps, prototyping, testing
                      </span>
                    </div>
                  </div>
                  <a className="text-link" href="#project-archive">
                    View case study
                  </a>
                </div>
              </article>

              <article className="project-card reveal" style={{ '--delay': '60ms' }}>
                <div
                  className="project-cover cover-2"
                  role="img"
                  aria-label="Warm coral and sand gradient"
                ></div>
                <div className="project-body">
                  <div className="project-tags">
                    <span className="tag">SaaS</span>
                    <span className="tag">B2B</span>
                  </div>
                  <h3>Freightline Console</h3>
                  <p>
                    Created a dashboard for logistics teams that turns dense
                    operational data into a calm, glanceable command center.
                  </p>
                  <a className="text-link" href="#project-archive">
                    View case study
                  </a>
                </div>
              </article>

              <article className="project-card reveal" style={{ '--delay': '120ms' }}>
                <div
                  className="project-cover cover-3"
                  role="img"
                  aria-label="Soft mint and navy gradient"
                ></div>
                <div className="project-body">
                  <div className="project-tags">
                    <span className="tag">Fintech</span>
                    <span className="tag">Mobile</span>
                  </div>
                  <h3>Sprout Savings</h3>
                  <p>
                    Designed a guided onboarding flow for first-time investors
                    with clear, friendly risk education and optional guardrails.
                  </p>
                  <a className="text-link" href="#project-archive">
                    View case study
                  </a>
                </div>
              </article>

              <article className="project-card reveal" style={{ '--delay': '180ms' }}>
                <div
                  className="project-cover cover-4"
                  role="img"
                  aria-label="Deep blue and amber gradient"
                ></div>
                <div className="project-body">
                  <div className="project-tags">
                    <span className="tag">Healthcare</span>
                    <span className="tag">Service design</span>
                  </div>
                  <h3>Beacon Patient Hub</h3>
                  <p>
                    Aligned care team workflows with patient expectations,
                    creating a unified portal for appointments, results, and
                    messaging.
                  </p>
                  <a className="text-link" href="#project-archive">
                    View case study
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="section process reveal"
          style={{ '--delay': '0ms' }}
        >
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Process</p>
                <h2>Intentional, collaborative, and grounded in evidence.</h2>
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
                  Stakeholder interviews, analytics review, and competitive
                  audits to understand constraints and opportunities.
                </p>
              </div>
              <div className="process-card">
                <span className="step">02</span>
                <h3>Define</h3>
                <p>
                  Problem framing, JTBD, and prioritized journeys to focus the
                  roadmap on what matters most.
                </p>
              </div>
              <div className="process-card">
                <span className="step">03</span>
                <h3>Design</h3>
                <p>
                  Low-fidelity flows, interactive prototypes, and systems-first
                  UI to keep experiences coherent.
                </p>
              </div>
              <div className="process-card">
                <span className="step">04</span>
                <h3>Validate</h3>
                <p>
                  Usability testing, accessibility checks, and iteration notes
                  that guide the build phase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about reveal" style={{ '--delay': '0ms' }}>
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Designing for people first, platforms second.</h2>
              <p className="lead">
                I blend research rigor with bold visual systems to make
                complicated workflows feel approachable. I care deeply about
                inclusive design, clear hierarchy, and practical handoff.
              </p>
              <ul className="about-list">
                <li>Accessibility-first layouts, tested with real assistive workflows.</li>
                <li>Visual systems that scale across teams and products.</li>
                <li>Workshops that turn ambiguity into shared direction.</li>
              </ul>
            </div>
            <div className="about-cards">
              <div className="mini-card">
                <h3>Core skills</h3>
                <div className="tag-list">
                  <span className="tag">User research</span>
                  <span className="tag">IA + flows</span>
                  <span className="tag">Prototyping</span>
                  <span className="tag">Design systems</span>
                  <span className="tag">Workshop facilitation</span>
                  <span className="tag">Accessibility</span>
                </div>
              </div>
              <div className="mini-card">
                <h3>Design principles</h3>
                <ul className="principles">
                  <li>Reduce friction before adding features.</li>
                  <li>Make states visible and predictable.</li>
                  <li>Build trust through clarity and tone.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="project-archive"
          className="section archive reveal"
          style={{ '--delay': '0ms' }}
        >
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Archive</p>
                <h2>More work across product categories.</h2>
              </div>
              <p className="lead">
                A quick look at other projects, partnerships, and experiments.
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
                    <td>PulsePay Kiosk</td>
                    <td>Retail self-service UX</td>
                    <td>Lead Designer</td>
                    <td>2024</td>
                  </tr>
                  <tr>
                    <td>HarborCare App</td>
                    <td>Telehealth onboarding</td>
                    <td>UX + UI</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>Atlas Learn</td>
                    <td>Curriculum builder</td>
                    <td>Product Strategy</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>Northwind Ops</td>
                    <td>Operational dashboards</td>
                    <td>Design Systems</td>
                    <td>2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact reveal" style={{ '--delay': '0ms' }}>
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something people want to use.</h2>
              <p className="lead">
                Email me or schedule a call. I respond within two business days.
              </p>
            </div>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:noah.blake.rhodes@gmail.com">
                noah.blake.rhodes@gmail.com
              </a>
              <a
                className="btn ghost"
                href="https://calendly.com/"
                aria-label="Schedule a call on Calendly"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo">Noah Rhodes</div>
            <p>UX designer helping teams build accessible, beautiful products.</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.behance.net" aria-label="Behance">
              Behance
            </a>
            <a href="https://www.dribbble.com" aria-label="Dribbble">
              Dribbble
            </a>
          </div>
          <div className="footer-meta">
            <span>Based in Boston, MA</span>
            <span>Available for remote work</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
