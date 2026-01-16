function Overview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column - User Profile */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-[#1F1F1F] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              ER
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1F1F1F] transition-colors">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value="Isabelle Abernathy"
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-[12px] bg-gray-50 text-[#1F1F1F]"
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
                readOnly
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-[12px] bg-gray-50 text-[#1F1F1F]"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          <button className="bg-[#1F1F1F] text-white p-3 rounded-[8px] font-medium hover:bg-gray-800 transition-colors">
            Manage Access Plan
          </button>
          <button className="bg-[#1F1F1F] text-white p-3 rounded-[8px] font-medium hover:bg-gray-800 transition-colors">
            Payment Method
          </button>
          <button className="bg-[#1F1F1F] text-white p-3 rounded-[8px] font-medium hover:bg-gray-800 transition-colors">
            Security
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Access Code Card */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-2">Your Access Code</h2>
          <p className="text-gray-600 text-sm mb-6">After download, this code enables you to enter the amplitude app.</p>
          <div className="flex gap-3">
            {['M', '5', '9', 'F'].map((char, index) => (
              <div
                key={index}
                className="flex-1 aspect-square border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-bold text-[#1F1F1F]"
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Billing Information Card */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-4xl font-bold text-[#1F1F1F] mb-1">5,99 €</div>
              <div className="text-sm text-gray-600">0,2% of Income</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Next Billing Date</div>
              <div className="text-lg font-semibold text-[#1F1F1F]">20/11/2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

