import SectionHead from '../SectionHead/SectionHead';
import './Process.css';

const Process = () => (
  <section id="process" className="section process section-white reveal" style={{ '--delay': '0ms' }}>
    <div className="container">
      <SectionHead
        eyebrow="Process"
        title="Structured, collaborative, and grounded in evidence."
        lead="I keep teams aligned with lightweight rituals and clear artifacts, then validate decisions quickly with users."
      />
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
);

export default Process;
