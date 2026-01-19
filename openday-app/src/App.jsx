import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import ModuleCard from './components/ModuleCard'
import CareerCard from './components/CareerCard'
import ParticleBackground from './components/ParticleBackground'
import { modules, careers } from './data/modules'

function App() {
  const [activeTab, setActiveTab] = useState('modules')
  const [activeSemester, setActiveSemester] = useState(1)

  return (
    <div className="app">
      <ParticleBackground />
      <header className="app-header">
        <div className="header-content">
          <h1>🎓 Computer Science First Year</h1>
          <p className="subtitle">Explore Your Journey into Tech</p>
        </div>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'modules' ? 'active' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          📚 Modules
        </button>
        <button
          className={`tab-button ${activeTab === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveTab('careers')}
        >
          🚀 Career Paths
        </button>
      </nav>

      <main className="app-content">
        {activeTab === 'modules' && (
          <div className="modules-section">
            <div className="semester-toggle">
              <button
                className={`semester-button ${activeSemester === 1 ? 'active' : ''}`}
                onClick={() => setActiveSemester(1)}
              >
                Semester 1
              </button>
              <button
                className={`semester-button ${activeSemester === 2 ? 'active' : ''}`}
                onClick={() => setActiveSemester(2)}
              >
                Semester 2
              </button>
            </div>

            <div className="section-header">
              <h2>{activeSemester === 1 ? 'First' : 'Second'} Semester Modules</h2>
              <p>Click on any module to see detailed information</p>
            </div>
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
      </main>

      <footer className="app-footer">
        <p>University Open Day 2026 | Computer Science Department</p>
      </footer>
    </div>
  )
}

export default App
