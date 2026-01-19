import { useState } from 'react'
import './App.css'
import ModuleCard from './components/ModuleCard'
import CareerCard from './components/CareerCard'
import { modules, careers } from './data/modules'

function App() {
  const [activeTab, setActiveTab] = useState('modules')

  return (
    <div className="app">
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
          📚 First Semester Modules
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
            <div className="section-header">
              <h2>First Semester Modules</h2>
              <p>Click on any module to see detailed information</p>
            </div>
            <div className="modules-grid">
              {modules.semester1.map((module) => (
                <ModuleCard key={module.id} module={module} />
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
              {careers.map((career) => (
                <CareerCard key={career.id} career={career} />
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
