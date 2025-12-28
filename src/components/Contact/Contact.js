import './Contact.css';

const Contact = () => (
  <section id="contact" className="section contact section-rose reveal" style={{ '--delay': '0ms' }}>
    <div className="container contact-card">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something accessible.</h2>
        <p className="lead">Based in Eindhoven, NL. Available for junior UX roles.</p>
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
);

export default Contact;
