import { useState } from 'react';
import { motion } from 'framer-motion';
import './CareerPathVisualizer.css';
import { modules, careers } from '../data/modules';

const CareerPathVisualizer = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);

  // Get all unique modules from both semesters
  const allModules = [...modules.semester1, ...modules.semester2];

  // Check if a module is relevant to the selected career
  const isModuleRelevant = (moduleCode, career) => {
    if (!career) return false;
    return career.keyModules.includes(moduleCode);
  };

  // Get relevance level for a module and career
  const getRelevanceLevel = (module, career) => {
    if (!career) return null;
    return module.careerRelevance[career.name];
  };

  return (
    <div className="visualizer-container">
      <motion.div 
        className="visualizer-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🔗 Your Learning Journey</h2>
        <p>Select a career path to see which modules will take you there</p>
      </motion.div>

      <div className="visualizer-content">
        {/* Career Selection */}
        <div className="career-selection">
          <h3>Choose Your Career Path</h3>
          <div className="career-buttons">
            {careers.map((career, index) => (
              <motion.button
                key={career.id}
                className={`career-btn ${selectedCareer?.id === career.id ? 'active' : ''}`}
                onClick={() => setSelectedCareer(career)}
                style={{ '--career-color': career.color }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="career-btn-icon">{career.icon}</span>
                <span className="career-btn-text">{career.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Module Display */}
        {selectedCareer && (
          <motion.div 
            className="modules-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Key Modules for {selectedCareer.name}</h3>
            <div className="modules-grid-viz">
              {allModules.map((module, index) => {
                const isRelevant = isModuleRelevant(module.code, selectedCareer);
                const relevanceLevel = getRelevanceLevel(module, selectedCareer);
                
                return (
                  <motion.div
                    key={module.id}
                    className={`module-viz-card ${isRelevant ? 'relevant' : 'not-relevant'} ${relevanceLevel || ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredModule(module.code)}
                    onMouseLeave={() => setHoveredModule(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="module-viz-icon">{module.icon}</div>
                    <div className="module-viz-code">{module.code}</div>
                    <div className="module-viz-name">{module.name}</div>
                    {relevanceLevel && (
                      <motion.div 
                        className={`relevance-badge ${relevanceLevel}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                      >
                        {relevanceLevel === 'high' ? '⭐⭐⭐' : relevanceLevel === 'medium' ? '⭐⭐' : '⭐'}
                      </motion.div>
                    )}
                    {isRelevant && (
                      <motion.div 
                        className="key-module-badge"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + index * 0.05, type: "spring", stiffness: 200 }}
                      >
                        🔑 Key Module
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Connection Lines Visualization */}
            <motion.div 
              className="connection-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="legend">
                <div className="legend-item">
                  <span className="legend-badge high">⭐⭐⭐</span>
                  <span>High Relevance</span>
                </div>
                <div className="legend-item">
                  <span className="legend-badge medium">⭐⭐</span>
                  <span>Medium Relevance</span>
                </div>
                <div className="legend-item">
                  <span className="legend-badge key">🔑</span>
                  <span>Core Module for this Career</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {!selectedCareer && (
          <motion.div 
            className="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="placeholder-icon">👆</div>
            <p>Select a career path above to see the connection!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CareerPathVisualizer;

