import { useState } from 'react'

function Login({ onLogin, onBackToSignUp }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email: loginEmail, password: loginPassword })
    // Call onLogin to show dashboard
    if (onLogin) {
      onLogin()
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="text-2xl font-bold text-[#1F1F1F] mb-2">Welcome back.</div>
        <p className="text-gray-600">New to Amplitude? <button onClick={onBackToSignUp} className="text-blue-600 hover:underline">Sign up</button></p>
      </div>

      <p className="text-gray-600 mb-10">Log In to your profile to receive the App Access Code</p>

      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label className="block text-sm font-medium text-[#1F1F1F] mb-3">Email Address</label>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ padding: '16px 24px', fontSize: '16px' }}
            className="w-full border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1F1F1F] mb-3">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ padding: '16px 56px 16px 24px', fontSize: '16px' }}
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

        <button
          type="submit"
          style={{ padding: '16px', fontSize: '16px' }}
          className="w-full bg-[#1F1F1F] text-white rounded-[8px] font-medium hover:bg-gray-800 transition-colors mt-8"
        >
          Log In to Profile
        </button>
      </form>
    </div>
  )
}

export default Login

