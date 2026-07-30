import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './ModuleMission.css'

const ModuleMission = ({ mission }) => {
  const [selected, setSelected] = useState([])
  const [result, setResult] = useState(null)

  const availableSteps = mission.steps.filter((step) => !selected.includes(step.id))

  const addStep = (stepId) => {
    setSelected((current) => [...current, stepId])
    setResult(null)
  }

  const removeStep = (stepId) => {
    setSelected((current) => current.filter((id) => id !== stepId))
    setResult(null)
  }

  const checkAnswer = () => {
    const correct = mission.answer.every((stepId, index) => selected[index] === stepId)
    setResult(correct ? 'correct' : 'incorrect')
  }

  const reset = () => {
    setSelected([])
    setResult(null)
  }

  const stepById = (stepId) => mission.steps.find((step) => step.id === stepId)

  return (
    <section className="module-mission" onClick={(event) => event.stopPropagation()}>
      <div className="mission-heading">
        <div className="mission-badge">🎯 Mini mission</div>
        <span>About 30 seconds</span>
      </div>
      <h4>{mission.title}</h4>
      <p>{mission.prompt}</p>

      <div className="mission-workspace">
        <div className="mission-sequence">
          <span className="mission-label">Your program flow</span>
          <div className="mission-slots">
            {[0, 1, 2].map((index) => {
              const step = stepById(selected[index])
              return (
                <button
                  key={index}
                  className={`mission-slot ${step ? 'filled' : ''}`}
                  onClick={() => step && removeStep(step.id)}
                  disabled={!step}
                >
                  <span>{index + 1}</span>
                  {step ? step.label : 'Tap a step below'}
                </button>
              )
            })}
          </div>
        </div>

        {availableSteps.length > 0 && (
          <div className="mission-choices">
            <span className="mission-label">Available steps</span>
            {availableSteps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => addStep(step.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {step.label} <span>＋</span>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <div className="mission-actions">
        <button className="mission-reset" onClick={reset} disabled={selected.length === 0}>Reset</button>
        <button className="mission-check" onClick={checkAnswer} disabled={selected.length !== mission.answer.length}>
          Check my flow →
        </button>
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result}
            className={`mission-feedback ${result}`}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <strong>{result === 'correct' ? '🎉 Mission complete!' : '💡 Nearly there!'}</strong>
            <p>{result === 'correct' ? mission.success : mission.hint}</p>
            {result === 'incorrect' && <button onClick={reset}>Try again</button>}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ModuleMission
