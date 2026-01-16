import { useState } from 'react'

function Step1({ formData, updateFormData, onNext, onShowLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  return (
    <div className="w-full">
      {/* Logo/Header */}
      <div className="mb-8">
        <div className="text-2xl font-bold text-[#1F1F1F] mb-2">Create Account</div>
        <p className="text-gray-600">Already have an account? <button onClick={onShowLogin} className="text-blue-600 hover:underline">Sign in</button></p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white text-sm font-medium">1</div>
        <div className="flex-1 h-0.5 bg-gray-200">
          <div className="h-full bg-[#1F1F1F] w-0"></div>
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm font-medium">2</div>
        <div className="flex-1 h-0.5 bg-gray-200">
          <div className="h-full bg-[#1F1F1F] w-0"></div>
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm font-medium">3</div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1F1F1F] mb-3">Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateFormData('fullName', e.target.value)}
            placeholder="Enter your full name"
            style={{ padding: '10px 14px', fontSize: '16px' }}
            className="w-full border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1F1F1F] mb-3">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="Enter your email"
            style={{ padding: '10px 14px', fontSize: '16px' }}
            className="w-full border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1F1F1F] mb-3">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              placeholder="Enter your password"
              style={{ padding: '10px 14px', fontSize: '16px' }}
              className="w-full border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0L3 12m3.29-5.71L12 12m-5.71 0L12 12m0 0l3.29 3.29M12 12l3.29-3.29m0 0L21 3m-5.71 5.71L12 12m5.71 0L21 21" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <label className="block text-sm font-medium text-[#1F1F1F]">Phone Number</label>
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
              {showTooltip && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 bg-[#1F1F1F] text-white text-sm rounded-lg p-3 z-10 shadow-lg pointer-events-none">
                  <div className="font-bold mb-1">Why phone number?</div>
                  <div className="font-normal">We are sending Two-Factor-Authentification codes to that phone number</div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1F1F1F]"></div>
                </div>
              )}
            </div>
          </div>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData('phoneNumber', e.target.value)}
            placeholder="Enter your phone number"
            style={{ padding: '10px 14px', fontSize: '16px' }}
            className="w-full border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            required
          />
        </div>

        <button
          type="submit"
          style={{ padding: '10px', fontSize: '16px' }}
          className="w-full bg-[#1F1F1F] text-white rounded-[8px] font-medium hover:bg-gray-800 transition-colors mt-8"
        >
          Next
        </button>
      </form>
    </div>
  )
}

export default Step1
