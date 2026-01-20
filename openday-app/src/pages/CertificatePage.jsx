import { useState } from 'react'
import { motion } from 'framer-motion'
import './CertificatePage.css'
import ModuleCard from '../components/ModuleCard'
import CareerCard from '../components/CareerCard'
import ParticleBackground from '../components/ParticleBackground'
import CareerPathVisualizer from '../components/CareerPathVisualizer'
import { certificateModules, certificateCareers } from '../data/certificateModules'
import emerisLogo from '../assets/Emeris.png'
import higherCertCoursePdf from '../assets/pdfs/highercert-course.pdf'
import feesPdf from '../assets/pdfs/fees.pdf'

const CertificatePage = ({ onBack }) => {
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
          {/* Logo and University Name Row */}
          <motion.div
            className="header-brand"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              className="logo-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={emerisLogo} alt="Emeris University Logo" className="header-logo" />
            </motion.div>
            <div className="brand-divider"></div>
            <div className="brand-text">
              <h2 className="university-name">Emeris</h2>
              <p className="department-name">School of Computer Science</p>
            </div>
          </motion.div>

          {/* Welcome Banner */}
          <motion.div
            className="welcome-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="banner-icon"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              📱
            </motion.div>
            <div className="banner-content">
              <h1 className="banner-title">IIE Higher Certificate</h1>
              <p className="banner-subtitle">Mobile Application and Web Development</p>
            </div>
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            className="download-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href={higherCertCoursePdf}
              download="Higher-Certificate-Course-Information.pdf"
              className="download-btn course-info-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="download-icon">📥</span>
              <span className="download-text">
                <span className="download-label">Download</span>
                <span className="download-title">Course Information</span>
              </span>
            </motion.a>
            <motion.a
              href={feesPdf}
              download="Fees.pdf"
              className="download-btn fees-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="download-icon">📥</span>
              <span className="download-text">
                <span className="download-label">Download</span>
                <span className="download-title">Fees Information</span>
              </span>
            </motion.a>
          </motion.div>

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
                  <span className="stat-text">{activeSemester === 1 ? certificateModules.semester1.length : certificateModules.semester2.length} Core Modules</span>
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
              {(activeSemester === 1 ? certificateModules.semester1 : certificateModules.semester2).map((module, index) => (
                <ModuleCard key={module.id} module={module} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="careers-section">
            <div className="section-header">
              <h2>Your Future Career Paths</h2>
              <p>Discover where your certificate can take you</p>
            </div>
            <div className="careers-grid">
              {certificateCareers.map((career, index) => (
                <CareerCard key={career.id} career={career} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'visualizer' && (
          <CareerPathVisualizer modulesData={certificateModules} careersData={certificateCareers} />
        )}
      </main>

      <footer className="app-footer">
        <motion.button
          className="back-button"
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Programs
        </motion.button>
        <p>Emeris Open Day 2026 | School of Computer Science</p>
      </footer>
    </div>
  )
}

export default CertificatePage

