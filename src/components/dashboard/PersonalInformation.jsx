import { useState } from 'react'

function PersonalInformation() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl">
      <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value="Isabelle Abernathy"
            className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
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
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-80 bg-[#1F1F1F] text-white text-sm rounded-lg p-3 z-10 shadow-lg pointer-events-none">
                  <div className="font-normal">We securely receive your verified details, such as your full name and address, through the bank connection process that complies with strict data protection policies.</div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1F1F1F]"></div>
                </div>
              )}
            </div>
          </div>
          <input
            type="text"
            value="Kapersburgs"
            className="w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="email"
              value="isabelle.abernathy@gmail.com"
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <input
              type="tel"
              value="+49 171 1234 5678"
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F] focus:border-transparent text-[#1F1F1F]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation

