import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import DegreePage from './pages/DegreePage'
import CertificatePage from './pages/CertificatePage'
import CareerQuizPage from './pages/CareerQuizPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleSelectProgram = (programId) => {
    setCurrentPage(programId)
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
  }

  // Render the appropriate page
  if (currentPage === 'degree') {
    return <DegreePage onBack={handleBackToLanding} />
  }

  if (currentPage === 'certificate') {
    return <CertificatePage onBack={handleBackToLanding} />
  }

  if (currentPage === 'quiz') {
    return (
      <CareerQuizPage
        onBack={handleBackToLanding}
        onSelectProgram={handleSelectProgram}
      />
    )
  }

  // Default: show landing page
  return <LandingPage onSelectProgram={handleSelectProgram} />
}

export default App
