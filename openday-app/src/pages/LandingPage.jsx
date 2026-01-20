import { motion } from 'framer-motion';
import './LandingPage.css';
import emerisLogo from '../assets/Emeris.png';
import ParticleBackground from '../components/ParticleBackground';

const LandingPage = ({ onSelectProgram }) => {
  const programs = [
    {
      id: 'degree',
      title: 'IIE Bachelor of Computer and Information Science',
      subtitle: 'in Application Development',
      icon: '🎓',
      duration: '3-4 Years',
      level: 'Degree',
      color: '#004559',
      description: 'Comprehensive degree program covering software development, systems design, and advanced computing concepts.',
      highlights: [
        '8 Core Modules per Year',
        '5 Career Pathways',
        'Industry-Ready Skills',
        'Advanced Programming'
      ]
    },
    {
      id: 'certificate',
      title: 'IIE Higher Certificate',
      subtitle: 'in Mobile Application and Web Development',
      icon: '📱',
      duration: '1 Year',
      level: 'Higher Certificate',
      color: '#006d85',
      description: 'Focused certificate program specializing in mobile and web application development.',
      highlights: [
        'Practical Skills Focus',
        'Mobile & Web Development',
        'Fast-Track Program',
        'Career Entry Point'
      ]
    }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={emerisLogo} 
          alt="Emeris Logo" 
          className="landing-logo"
          whileHover={{ scale: 1.05 }}
        />
        <div className="landing-header-text">
          <h1>Emeris University</h1>
          <p>School of Computer Science</p>
        </div>
      </motion.header>

      {/* Welcome Section */}
      <motion.section
        className="landing-welcome"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Welcome to Open Day 2026</h2>
        <p className="welcome-subtitle">Choose Your Path in Technology</p>
      </motion.section>

      {/* Program Cards */}
      <section className="programs-section">
        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card"
              style={{ '--program-color': program.color }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => onSelectProgram(program.id)}
            >
              <div className="program-icon">{program.icon}</div>
              <div className="program-level">{program.level}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-subtitle">{program.subtitle}</p>
              <p className="program-description">{program.description}</p>
              
              <div className="program-highlights">
                {program.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 + idx * 0.1 }}
                  >
                    <span className="highlight-check">✓</span>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="program-footer">
                <span className="program-duration">
                  <span className="duration-icon">⏱️</span>
                  {program.duration}
                </span>
                <motion.button
                  className="explore-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Program →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="landing-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>Emeris Open Day 2026 | School of Computer Science</p>
      </motion.footer>
    </div>
  );
};

export default LandingPage;

