import { useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Login from './components/Login'
import MarketingPanel from './components/MarketingPanel'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    verificationCode: '',
  })

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleLogin = () => {
    // After successful login, show dashboard
    setIsLoggedIn(true)
  }

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  const handleBackToSignUp = () => {
    setShowLogin(false)
    setCurrentStep(1)
  }

  // Show dashboard if logged in
  if (isLoggedIn) {
    return <Dashboard />
  }

  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      {/* Left Column - Form */}
      <div 
        className="w-1/2 flex items-center justify-center overflow-y-auto"
        style={{ backgroundColor: '#ffffff', padding: '32px' }}
      >
        <div className="w-full max-w-md">
          {showLogin ? (
            <Login
              onLogin={handleLogin}
              onBackToSignUp={handleBackToSignUp}
            />
          ) : (
            <>
              {currentStep === 1 && (
                <Step1
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onShowLogin={handleShowLogin}
                />
              )}
              {currentStep === 2 && (
                <Step2
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={handleNext}
                  onBack={handleBack}
                  onShowLogin={handleShowLogin}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  formData={formData}
                  updateFormData={updateFormData}
                  onLogin={handleLogin}
                  onShowLogin={handleShowLogin}
                />
              )}
            </>
          )}
        </div>
      </div>

      {/* Right Column - Marketing Panel */}
      <div className="w-1/2 h-screen overflow-hidden">
        <MarketingPanel />
      </div>
    </div>
  )
}

export default App
