import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './ModuleMission.css'

const MatchingMission = ({ mission }) => {
  const [answers, setAnswers] = useState({})
  const [completed, setCompleted] = useState(false)

  const chooseAnswer = (pairId, choice) => {
    const pair = mission.pairs.find((item) => item.id === pairId)
    const nextAnswers = {
      ...answers,
      [pairId]: { choice, correct: choice === pair.answer }
    }
    setAnswers(nextAnswers)
    setCompleted(mission.pairs.every((item) => nextAnswers[item.id]?.correct))
  }

  const reset = () => {
    setAnswers({})
    setCompleted(false)
  }

  return (
    <section className="module-mission" onClick={(event) => event.stopPropagation()}>
      <div className="mission-heading">
        <div className="mission-badge">🎯 Mini mission</div>
        <span>About 30 seconds</span>
      </div>
      <h4>{mission.title}</h4>
      <p>{mission.prompt}</p>

      <div className="matching-grid">
        {mission.pairs.map((pair, index) => {
          const answer = answers[pair.id]
          return (
            <div className={`matching-card ${answer ? (answer.correct ? 'correct' : 'incorrect') : ''}`} key={pair.id}>
              <div className="matching-clue">
                <span>{pair.icon}</span>
                <div>
                  <small>Network job {index + 1}</small>
                  <strong>{pair.clue}</strong>
                </div>
              </div>
              <div className="matching-choices">
                {mission.choices.map((choice) => (
                  <button
                    key={choice}
                    className={answer?.choice === choice ? 'selected' : ''}
                    onClick={() => chooseAnswer(pair.id, choice)}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              {answer && (
                <p className="matching-feedback">
                  {answer.correct ? '✓ Correct match!' : 'Not quite—try another device.'}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="mission-actions">
        <button className="mission-reset" onClick={reset} disabled={Object.keys(answers).length === 0}>Reset mission</button>
      </div>

      <AnimatePresence>
        {completed && (
          <motion.div
            className="mission-feedback correct"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <strong>🎉 Network online!</strong>
            <p>{mission.success}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const ChoiceMission = ({ mission }) => {
  const [selected, setSelected] = useState(null)
  const selectedOption = mission.options.find((option) => option.id === selected)
  const correct = selected === mission.answer

  return (
    <section className="module-mission" onClick={(event) => event.stopPropagation()}>
      <div className="mission-heading">
        <div className="mission-badge">🎯 Mini mission</div>
        <span>About 20 seconds</span>
      </div>
      <h4>{mission.title}</h4>
      <div className="choice-scenario">
        <span>📣 Your scenario</span>
        <p>{mission.prompt}</p>
      </div>
      <h5 className="choice-question">{mission.question}</h5>

      <div className="choice-options">
        {mission.options.map((option) => (
          <motion.button
            key={option.id}
            className={selected === option.id ? (correct ? 'selected correct' : 'selected incorrect') : ''}
            onClick={() => setSelected(option.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{option.icon}</span>
            {option.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedOption && (
          <motion.div
            key={selected}
            className={`mission-feedback ${correct ? 'correct' : 'incorrect'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <strong>{correct ? '🎉 Great system choice!' : '💡 Think about the whole process'}</strong>
            <p>{selectedOption.feedback}</p>
            {correct && <p>{mission.success}</p>}
            {!correct && <button onClick={() => setSelected(null)}>Choose again</button>}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const SequenceMission = ({ mission }) => {
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

const ModuleMission = ({ mission }) => {
  if (mission.type === 'matching') return <MatchingMission mission={mission} />
  if (mission.type === 'choice') return <ChoiceMission mission={mission} />
  return <SequenceMission mission={mission} />
}

export default ModuleMission
