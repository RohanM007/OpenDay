import { useState } from 'react';
import './ModuleCard.css';

const ModuleCard = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRelevanceColor = (level) => {
    switch (level) {
      case 'high': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div 
      className={`module-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="module-card-header">
        <div className="module-icon">{module.icon}</div>
        <div className="module-title">
          <h3>{module.code}</h3>
          <p>{module.name}</p>
        </div>
        <div className="expand-icon">{isExpanded ? '−' : '+'}</div>
      </div>

      {isExpanded && (
        <div className="module-card-content">
          <div className="module-description">
            <h4>Description</h4>
            <p>{module.description}</p>
          </div>

          <div className="module-topics">
            <h4>Key Topics</h4>
            <ul>
              {module.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="career-relevance">
            <h4>Career Relevance</h4>
            <div className="relevance-bars">
              {Object.entries(module.careerRelevance).map(([career, level]) => (
                <div key={career} className="relevance-item">
                  <span className="career-name">{career}</span>
                  <div className="relevance-bar-container">
                    <div 
                      className="relevance-bar"
                      style={{
                        width: level === 'high' ? '100%' : level === 'medium' ? '66%' : '33%',
                        backgroundColor: getRelevanceColor(level)
                      }}
                    />
                  </div>
                  <span className="relevance-level">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;

