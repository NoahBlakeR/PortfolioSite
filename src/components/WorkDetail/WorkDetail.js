import { Link } from 'react-router-dom';
import './WorkDetail.css';

const WorkDetail = ({
  id,
  eyebrow,
  title,
  lead,
  note,
  metaItems,
  mediaItems,
  challenge,
  approachItems,
  outcome,
  delay = '0ms',
  sectionClassName = '',
  onOpenLightbox
}) => {
  const renderMediaItem = (item) => (
    <button
      key={item.id}
      type="button"
      className={`work-media ${item.wide ? 'wide' : ''} ${
        item.tone ? `tone-${item.tone}` : ''
      }`}
      onClick={() => onOpenLightbox?.(item)}
      aria-label={`View ${item.title}`}
    >
      <span className="work-media-thumb" aria-hidden="true">
        {item.src ? (
          <img src={item.src} alt={item.alt || item.title} />
        ) : (
          <span className="work-media-placeholder">{item.title}</span>
        )}
      </span>
      <span className="work-media-title">{item.title}</span>
      {item.summary && <span className="work-media-subtle">{item.summary}</span>}
      <span className="work-media-hint" aria-hidden="true">
        Click to expand
      </span>
    </button>
  );

  return (
    <section
      className={`section work-detail ${sectionClassName} reveal`}
      id={id}
      style={{ '--delay': delay }}
    >
      <div className="container">
        <div className="work-detail-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="lead">{lead}</p>
            {note && <p className="work-note">{note}</p>}
          </div>
          <div className="work-meta">
            {metaItems.map((item) => (
              <div key={item.label}>
                <span className="meta-label">{item.label}</span>
                <span className="meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="work-media-grid">{mediaItems.map(renderMediaItem)}</div>
        <div className="work-detail-grid">
          <div className="work-detail-card">
            <h3>Challenge</h3>
            <p>{challenge}</p>
          </div>
          <div className="work-detail-card">
            <h3>Approach</h3>
            <ul>
              {approachItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="work-detail-card">
            <h3>Outcome</h3>
            <p>{outcome}</p>
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
  );
};

export default WorkDetail;
