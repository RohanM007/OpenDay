import { lazy, Suspense, useState } from 'react'
import LandingPage from './pages/LandingPage'

const DegreePage = lazy(() => import('./pages/DegreePage'))
const CertificatePage = lazy(() => import('./pages/CertificatePage'))
const CareerQuizPage = lazy(() => import('./pages/CareerQuizPage'))

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleSelectProgram = (programId) => {
    setCurrentPage(programId)
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
  }

  let page

  if (currentPage === 'degree') {
    page = <DegreePage onBack={handleBackToLanding} />
  } else if (currentPage === 'certificate') {
    page = <CertificatePage onBack={handleBackToLanding} />
  } else if (currentPage === 'quiz') {
    page = (
      <CareerQuizPage
        onBack={handleBackToLanding}
        onSelectProgram={handleSelectProgram}
      />
    )
  } else {
    page = <LandingPage onSelectProgram={handleSelectProgram} />
  }

  return (
    <Suspense fallback={<div className="page-loader"><span>⚡</span> Loading your adventure…</div>}>
      {page}
    </Suspense>
  )
}

export default App
