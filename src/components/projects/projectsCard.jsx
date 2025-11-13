import { useState } from 'react';

function ProjectCard({ title, description, image, techStack, liveLink, githubLink, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTech = showAllTech ? techStack : techStack.slice(0, 3);
  const hasMoreTech = techStack.length > 3;

  return (
    <article
      className="project-card-minimal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image-wrapper">
        {!imageLoaded && <div className="image-skeleton"></div>}
        <img
          src={image}
          alt={`${title} preview`}
          className={`project-image-minimal ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="project-overlay">
          <div className="overlay-links">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-btn"
                aria-label={`View ${title} live demo`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live
              </a>
            )}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-btn"
              aria-label={`View ${title} source code`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>

      <div className="project-content-minimal">
        <h3 className="project-title-minimal">{title}</h3>
        <p className="project-description-minimal">{description}</p>

        <div className="tech-pills">
          {displayedTech.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}

          {hasMoreTech && !showAllTech && (
            <button
              onClick={() => setShowAllTech(true)}
              className="tech-pill tech-pill-more"
              aria-label="Show all technologies"
            >
              +{techStack.length - 3}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;