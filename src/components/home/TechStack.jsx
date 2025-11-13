import { techStackData } from '../../data/techStackData';
import './TechStack.css';

function TechStack() {
  return (
    <div className="tech-minimal">
      {techStackData.map((section) => (
        <div key={section.category} className="tech-category">
          <h3 className="tech-category-title">{section.category}</h3>
          <div className="tech-items">
            {section.technologies.map((tech) => (
              <div key={tech.name} className="tech-item">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="tech-icon"
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;