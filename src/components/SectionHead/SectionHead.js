import './SectionHead.css';

const SectionHead = ({ eyebrow, title, lead, children }) => (
  <div className="section-head">
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
    </div>
    {lead && <p className="lead">{lead}</p>}
    {children}
  </div>
);

export default SectionHead;
