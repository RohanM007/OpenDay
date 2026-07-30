import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { careerProfiles, careerQuizQuestions } from '../data/careerQuiz'
import './CareerQuizPage.css'

const emptyScores = () => Object.fromEntries(Object.keys(careerProfiles).map((id) => [id, 0]))

const CareerQuizPage = ({ onBack, onSelectProgram }) => {
  const [started, setStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  const results = useMemo(() => {
    if (answers.length !== careerQuizQuestions.length) return []

    const scores = answers.reduce((totals, answer) => {
      Object.entries(answer.scores).forEach(([profile, score]) => {
        totals[profile] += score
      })
      return totals
    }, emptyScores())

    const highestScore = Math.max(...Object.values(scores))
    return Object.entries(scores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([id, score]) => ({
        ...careerProfiles[id],
        score,
        match: Math.round((score / highestScore) * 100)
      }))
  }, [answers])

  const currentQuestion = careerQuizQuestions[questionIndex]
  const complete = answers.length === careerQuizQuestions.length

  const chooseAnswer = (option) => {
    const nextAnswers = [...answers, option]
    setAnswers(nextAnswers)
    if (questionIndex < careerQuizQuestions.length - 1) {
      setQuestionIndex((current) => current + 1)
    }
  }

  const goBackQuestion = () => {
    if (questionIndex === 0) {
      setStarted(false)
      return
    }
    setAnswers((current) => current.slice(0, -1))
    setQuestionIndex((current) => current - 1)
  }

  const restart = () => {
    setStarted(false)
    setQuestionIndex(0)
    setAnswers([])
  }

  const topResult = results[0]
  const alternatives = results.slice(1, 3)

  return (
    <div className="quiz-page">
      <ParticleBackground />
      <header className="quiz-topbar">
        <button className="quiz-home-button" onClick={onBack}>← Open Day home</button>
        <span className="quiz-privacy-note">🔒 Your answers stay on this device</span>
      </header>

      <main className="quiz-shell">
        <AnimatePresence mode="wait">
          {!started && (
            <motion.section
              key="intro"
              className="quiz-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <span className="quiz-eyebrow">Degree career discovery quiz</span>
              <div className="quiz-hero-icon">🧭</div>
              <h1>Find your IT path</h1>
              <p>Choose the situations that sound most like you and discover technology careers connected to the Degree.</p>
              <div className="quiz-intro-details">
                <span>⏱️ About 2 minutes</span>
                <span>💬 8 simple questions</span>
                <span>✨ No technical knowledge needed</span>
              </div>
              <button className="quiz-primary-button" onClick={() => setStarted(true)}>
                Start the quiz <span>→</span>
              </button>
              <small>There are no right or wrong answers. This is a friendly guide, not an aptitude test.</small>
            </motion.section>
          )}

          {started && !complete && (
            <motion.section
              key={questionIndex}
              className="quiz-question-card"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
            >
              <div className="quiz-progress-copy">
                <span>Question {questionIndex + 1} of {careerQuizQuestions.length}</span>
                <span>{Math.round(((questionIndex + 1) / careerQuizQuestions.length) * 100)}%</span>
              </div>
              <div className="quiz-progress-track">
                <motion.div
                  className="quiz-progress-fill"
                  initial={{ width: `${(questionIndex / careerQuizQuestions.length) * 100}%` }}
                  animate={{ width: `${((questionIndex + 1) / careerQuizQuestions.length) * 100}%` }}
                />
              </div>
              <h1>{currentQuestion.prompt}</h1>
              <p className="quiz-question-hint">Choose the answer that feels most natural to you.</p>
              <div className="quiz-options">
                {currentQuestion.options.map((option) => (
                  <motion.button
                    key={option.label}
                    className="quiz-option"
                    onClick={() => chooseAnswer(option)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="quiz-option-icon">{option.icon}</span>
                    <span>{option.label}</span>
                    <span className="quiz-option-arrow">→</span>
                  </motion.button>
                ))}
              </div>
              <button className="quiz-back-link" onClick={goBackQuestion}>← Previous</button>
            </motion.section>
          )}

          {complete && topResult && (
            <motion.section
              key="results"
              className="quiz-results"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="result-heading">
                <span className="quiz-eyebrow">Your strongest match</span>
                <h1>Your future could look like this</h1>
                <p>Based on the activities and problems you said you would enjoy.</p>
              </div>

              <article className="primary-result" style={{ '--result-color': topResult.color }}>
                <div className="result-icon">{topResult.icon}</div>
                <div className="result-main-copy">
                  <div className="result-title-row">
                    <div>
                      <span className="result-label">Best match</span>
                      <h2>{topResult.name}</h2>
                    </div>
                    <div className="match-score">{topResult.match}%<span>match</span></div>
                  </div>
                  <p className="result-tagline">{topResult.tagline}</p>
                  <p>{topResult.description}</p>

                  <div className="result-grid">
                    <div>
                      <h3>Strengths you may enjoy using</h3>
                      <div className="result-chips">
                        {topResult.strengths.map((strength) => <span key={strength}>{strength}</span>)}
                      </div>
                    </div>
                    <div>
                      <h3>Modules that build this path</h3>
                      <ul>
                        {topResult.modules.map((module) => <li key={module}>✓ {module}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="qualification-callout">
                    <div>
                      <span>Recommended study route</span>
                      <strong>{topResult.qualificationLabel}</strong>
                    </div>
                    <button onClick={() => onSelectProgram('degree')}>
                      Explore the Degree →
                    </button>
                  </div>
                </div>
              </article>

              <div className="alternative-results">
                <h2>Other paths worth exploring</h2>
                <div className="alternative-grid">
                  {alternatives.map((result) => (
                    <article key={result.id} style={{ '--result-color': result.color }}>
                      <span className="alternative-icon">{result.icon}</span>
                      <div>
                        <span>{result.match}% match</span>
                        <h3>{result.name}</h3>
                        <p>{result.tagline}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="result-footer-actions">
                <button className="quiz-secondary-button" onClick={restart}>↻ Retake quiz</button>
                <button className="quiz-primary-button" onClick={onBack}>View all programmes</button>
              </div>
              <p className="result-disclaimer">Use this result as a starting point for exploration—it does not limit what you can study or become.</p>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default CareerQuizPage
