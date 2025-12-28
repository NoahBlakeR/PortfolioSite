import './About.css';

const About = () => (
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
);

export default About;
