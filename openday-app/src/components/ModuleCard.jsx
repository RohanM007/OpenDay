import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ModuleCard.css';

const ModuleCard = ({ module, index }) => {
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
    <motion.div
      className={`module-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="module-card-header">
        <motion.div
          className="module-icon"
          animate={{
            rotate: isExpanded ? 360 : 0,
            scale: isExpanded ? 1.2 : 1
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {module.icon}
        </motion.div>
        <div className="module-title">
          <h3>{module.code}</h3>
          <p>{module.name}</p>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="module-description"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4>Description</h4>
              <p>{module.description}</p>
            </motion.div>

            <motion.div
              className="module-topics"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4>Key Topics</h4>
              <ul>
                {module.topics.map((topic, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="career-relevance"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4>Career Relevance</h4>
              <div className="relevance-bars">
                {Object.entries(module.careerRelevance).map(([career, level], idx) => (
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
                          delay: 0.5 + idx * 0.1,
                          duration: 0.5,
                          type: "spring"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModuleCard;

