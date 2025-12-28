import './Lightbox.css';

const Lightbox = ({ lightbox, onClose, backdropRef, contentRef }) => {
  if (!lightbox) {
    return null;
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
      <div
        className="lightbox-backdrop"
        ref={backdropRef}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="lightbox-content" ref={contentRef} role="document">
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close">
          <span className="lightbox-close-icon" aria-hidden="true"></span>
        </button>
        <div className={`lightbox-media ${lightbox.tone ? `tone-${lightbox.tone}` : ''}`}>
          {lightbox.src ? (
            <img src={lightbox.src} alt={lightbox.alt || lightbox.title} />
          ) : (
            <div className="lightbox-placeholder">{lightbox.title}</div>
          )}
        </div>
        <div className="lightbox-meta">
          <h3 id="lightbox-title">{lightbox.title}</h3>
          {lightbox.summary && <p className="lead">{lightbox.summary}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
