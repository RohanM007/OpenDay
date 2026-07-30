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
      duration: '3 Years',
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
      <ParticleBackground />
      <motion.header
        className="landing-header"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src={emerisLogo} 
          alt="Emeris Logo" 
          className="landing-logo"
          whileHover={{ scale: 1.05 }}
        />
        <div className="landing-header-text">
          <h1>Emeris</h1>
          <p>School of Computer Science</p>
        </div>
        <div className="open-day-badge"><span>●</span> Open Day 2026</div>
      </motion.header>

      <main className="landing-main">
        <motion.section
          className="landing-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.div className="floating-tech floating-tech-code" animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity }}>{"</>"}</motion.div>
          <motion.div className="floating-tech floating-tech-game" animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }} transition={{ duration: 4.5, repeat: Infinity }}>🎮</motion.div>
          <motion.div className="floating-tech floating-tech-phone" animate={{ y: [0, -9, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>📱</motion.div>
          <span className="hero-kicker">Your tech journey starts here</span>
          <h2>What could you <span>build?</span></h2>
          <p>Apps, websites, secure systems or the next big idea—tap around and find the path that feels like you.</p>
          <div className="hero-actions">
            <motion.button onClick={() => onSelectProgram('quiz')} whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.96 }}>
              🧭 Take the career quiz
            </motion.button>
            <a href="#programs">Explore programmes ↓</a>
          </div>
          <div className="hero-mini-stats">
            <span><strong>8</strong> quick questions</span>
            <span><strong>2</strong> programmes</span>
            <span><strong>0</strong> boring forms</span>
          </div>
        </motion.section>

        <motion.section
          className="career-quiz-banner"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.35, type: 'spring' }}
        >
          <div className="quiz-banner-icon">✨</div>
          <div className="quiz-banner-copy">
            <span>Featured activity</span>
            <h3>Find your Degree career match</h3>
            <p>Pick what sounds fun. We’ll match your interests with an IT career and the Degree modules that help you get there.</p>
          </div>
          <motion.button
            className="quiz-banner-button"
            onClick={() => onSelectProgram('quiz')}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s play →
          </motion.button>
        </motion.section>

        <section className="programs-section" id="programs">
          <div className="programs-heading">
            <span>Choose your adventure</span>
            <h2>Which programme do you want to explore?</h2>
            <p>Open a programme, tap through its modules and see where it could take you.</p>
          </div>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.article
                key={program.id}
                className={`program-card program-card-${program.id}`}
                style={{ '--program-color': program.color }}
                initial={{ opacity: 0, y: 50, rotate: index === 0 ? -1 : 1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15, type: "spring" }}
                whileHover={{ y: -10, rotate: index === 0 ? -0.7 : 0.7 }}
                onClick={() => onSelectProgram(program.id)}
              >
                <div className="program-card-top">
                  <div className="program-icon">{program.icon}</div>
                  <div className="program-level">{program.level}</div>
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-subtitle">{program.subtitle}</p>
                <p className="program-description">{program.description}</p>
                <div className="program-highlights">
                  {program.highlights.map((highlight) => (
                    <div key={highlight} className="highlight-item">
                      <span className="highlight-check">★</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="program-footer">
                  <span className="program-duration">⏱️ {program.duration}</span>
                  <motion.button className="explore-button" whileTap={{ scale: 0.95 }}>
                    Jump in →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="landing-final-cta">
          <div>
            <span>Still deciding?</span>
            <h2>That’s exactly what Open Day is for.</h2>
            <p>Try the quiz, explore every module, and follow whatever sparks your curiosity.</p>
          </div>
          <button onClick={() => onSelectProgram('quiz')}>Find my path 🚀</button>
        </section>
      </main>

      <footer className="landing-footer">
        <div>
          <strong>Emeris Open Day 2026</strong>
          <span>School of Computer Science</span>
        </div>
        <span>Tap. Explore. Get inspired. ✨</span>
      </footer>
    </div>
  );
};

export default LandingPage;

