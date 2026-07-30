import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModuleMission from './ModuleMission';
import { moduleMissions } from '../data/moduleMissions';
import './ModuleCard.css';

const ModuleCard = ({ module, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mission = moduleMissions[module.code];

  const getRelevanceColor = (level) => {
    switch (level) {
      case 'high': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div
      className={`module-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: Math.min(index * 0.04, 0.12),
        ease: "easeOut"
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.15 }
      }}
    >
      <div className="module-card-header">
        <motion.div
          className="module-icon"
          animate={{
            scale: isExpanded ? 1.06 : 1
          }}
          transition={{ duration: 0.18 }}
        >
          {module.icon}
        </motion.div>
        <div className="module-title">
          <h3>{module.code}</h3>
          <p>{module.name}</p>
          {mission && <span className="mission-available">🎯 Mini mission available</span>}
        </div>
        <motion.div
          className="expand-icon"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? '−' : '+'}
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="module-card-content"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <div className="module-description">
              <h4>Description</h4>
              <p>{module.description}</p>
            </div>

            <div className="module-topics">
              <h4>Key Topics</h4>
              <ul>
                {module.topics.map((topic, idx) => (
                  <li key={idx}>
                    {topic}
                  </li>
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
                      <motion.div
                        className="relevance-bar"
                        initial={{ width: 0 }}
                        animate={{
                          width: level === 'high' ? '100%' : level === 'medium' ? '66%' : '33%'
                        }}
                        transition={{
                          duration: 0.22,
                          ease: "easeOut"
                        }}
                        style={{
                          backgroundColor: getRelevanceColor(level)
                        }}
                      />
                    </div>
                    <span className="relevance-level">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {mission && <ModuleMission mission={mission} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModuleCard;

