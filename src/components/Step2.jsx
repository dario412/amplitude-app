import { useState, useRef, useEffect } from 'react'

function Step2({ formData, updateFormData, onNext, onBack, onShowLogin }) {
  const [codes, setCodes] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (index, value) => {
    if (value.length > 1) return
    
    const newCodes = [...codes]
    newCodes[index] = value.replace(/\D/g, '')
    setCodes(newCodes)
    
    updateFormData('verificationCode', newCodes.join(''))

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newCodes = [...codes]
    
    for (let i = 0; i < 6; i++) {
      newCodes[i] = pastedData[i] || ''
    }
    
    setCodes(newCodes)
    updateFormData('verificationCode', newCodes.join(''))
    
    const nextEmptyIndex = newCodes.findIndex(code => !code)
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex
    inputRefs.current[focusIndex]?.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (codes.every(code => code !== '')) {
      onNext()
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="text-2xl font-bold text-[#1F1F1F] mb-2">Create Account</div>
        <p className="text-gray-600">Already have an account? <button onClick={onShowLogin} className="text-blue-600 hover:underline">Sign in</button></p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white text-sm font-medium">1</div>
        <div className="flex-1 h-0.5 bg-gray-200">
          <div className="h-full bg-[#1F1F1F] w-full"></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white text-sm font-medium">2</div>
        <div className="flex-1 h-0.5 bg-gray-200">
          <div className="h-full bg-[#1F1F1F] w-0"></div>
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm font-medium">3</div>
      </div>

      <p className="text-gray-600 mb-10">Confirm your Phone Number by entering the code</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-center gap-4">
          {codes.map((code, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-16 h-16 text-center text-3xl font-semibold border-2 border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
              required
            />
          ))}
        </div>

        <button
          type="submit"
          style={{ padding: '16px', fontSize: '16px' }}
          className="w-full bg-[#1F1F1F] text-white rounded-[8px] font-medium hover:bg-gray-800 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  )
}

export default Step2
