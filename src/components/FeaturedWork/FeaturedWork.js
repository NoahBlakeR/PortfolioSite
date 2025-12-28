import { Link } from 'react-router-dom';
import SectionHead from '../SectionHead/SectionHead';
import './FeaturedWork.css';

const FeaturedWork = () => (
  <section id="work" className="section work section-rose">
    <div className="container">
      <SectionHead
        eyebrow="Featured work"
        title="Spotlight projects built for clarity and care."
        lead="Two full case studies: an accessibility Chrome extension and a connected-care onboarding concept."
      />

      <div className="project-grid">
        <article className="project-card reveal" style={{ '--delay': '0ms' }}>
          <div className="project-cover cover-1" role="img" aria-label="Soft rose gradient"></div>
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
);

export default FeaturedWork;
