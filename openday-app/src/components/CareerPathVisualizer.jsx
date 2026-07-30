import { useState } from 'react';
import { motion } from 'framer-motion';
import './CareerPathVisualizer.css';
import { modules, careers } from '../data/modules';

const CareerPathVisualizer = ({ modulesData, careersData }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);

  // Use provided data or default to degree data
  const moduleSource = modulesData || modules;
  const careerSource = careersData || careers;

  // Get all unique modules from both semesters
  const allModules = [...moduleSource.semester1, ...moduleSource.semester2];

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
            {careerSource.map((career) => (
              <motion.button
                key={career.id}
                className={`career-btn ${selectedCareer?.id === career.id ? 'active' : ''}`}
                onClick={() => setSelectedCareer(career)}
                style={{ '--career-color': career.color }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="career-btn-icon">{career.icon}</span>
                <span className="career-btn-text">{career.name || career.title}</span>
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
              {allModules.map((module) => {
                const isRelevant = isModuleRelevant(module.code, selectedCareer);
                const relevanceLevel = getRelevanceLevel(module, selectedCareer);
                
                return (
                  <div
                    key={module.id}
                    className={`module-viz-card ${isRelevant ? 'relevant' : 'not-relevant'} ${relevanceLevel || ''}`}
                  >
                    <div className="module-viz-icon">{module.icon}</div>
                    <div className="module-viz-code">{module.code}</div>
                    <div className="module-viz-name">{module.name}</div>
                    {relevanceLevel && (
                      <div className={`relevance-badge ${relevanceLevel}`}>
                        {relevanceLevel === 'high' ? '⭐⭐⭐' : relevanceLevel === 'medium' ? '⭐⭐' : '⭐'}
                      </div>
                    )}
                    {isRelevant && (
                      <div className="key-module-badge">
                        🔑 Key Module
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Connection Lines Visualization */}
            <div className="connection-info">
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
            </div>
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

