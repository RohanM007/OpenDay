import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import ModuleCard from './components/ModuleCard'
import CareerCard from './components/CareerCard'
import ParticleBackground from './components/ParticleBackground'
import CareerPathVisualizer from './components/CareerPathVisualizer'
import { modules, careers } from './data/modules'

function App() {
  const [activeTab, setActiveTab] = useState('modules')
  const [activeSemester, setActiveSemester] = useState(1)

  return (
    <div className="app">
      <ParticleBackground />
      <motion.header
        className="app-header"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: '8px' }}
          >
            <p style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#667eea',
              margin: 0
            }}>
              Welcome to the Emeris Open Day
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 120
            }}
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.2, 1.2, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{ display: 'inline-block' }}
            >
              🎓
            </motion.span>
            {' '}School of Computer Science
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore Your First Year Journey into Tech
          </motion.p>
        </div>
      </motion.header>

      <motion.nav
        className="tab-navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.button
          className={`tab-button ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📚 Modules
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveTab('careers')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Career Paths
        </motion.button>
        <motion.button
          className={`tab-button ${activeTab === 'visualizer' ? 'active' : ''}`}
          onClick={() => setActiveTab('visualizer')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Your Journey
        </motion.button>
      </motion.nav>

      <main className="app-content">
        {activeTab === 'modules' && (
          <div className="modules-section">
            <motion.div
              className="semester-toggle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                className={`semester-button ${activeSemester === 1 ? 'active' : ''}`}
                onClick={() => setActiveSemester(1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Semester 1
              </motion.button>
              <motion.button
                className={`semester-button ${activeSemester === 2 ? 'active' : ''}`}
                onClick={() => setActiveSemester(2)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Semester 2
              </motion.button>
            </motion.div>

            <motion.div
              className="section-header compact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>{activeSemester === 1 ? 'First' : 'Second'} Semester Modules</h2>
              <div className="stats-bar">
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-icon">📚</span>
                  <span className="stat-text">{activeSemester === 1 ? modules.semester1.length : modules.semester2.length} Core Modules</span>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-icon">🎯</span>
                  <span className="stat-text">Click to Explore</span>
                </motion.div>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-icon">🚀</span>
                  <span className="stat-text">Build Your Future</span>
                </motion.div>
              </div>
            </motion.div>
            <div className="modules-grid">
              {(activeSemester === 1 ? modules.semester1 : modules.semester2).map((module, index) => (
                <ModuleCard key={module.id} module={module} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="careers-section">
            <div className="section-header">
              <h2>Your Future Career Paths</h2>
              <p>Discover where your degree can take you</p>
            </div>
            <div className="careers-grid">
              {careers.map((career, index) => (
                <CareerCard key={career.id} career={career} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'visualizer' && (
          <CareerPathVisualizer />
        )}
      </main>

      <footer className="app-footer">
        <p>Emeris Open Day 2026 | School of Computer Science</p>
      </footer>
    </div>
  )
}

export default App
