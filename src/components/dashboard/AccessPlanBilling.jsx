function AccessPlanBilling() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Column - Access Plan */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Access Plan</h2>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-4xl font-bold text-[#1F1F1F] mb-1">5,99 €</div>
            <div className="text-sm text-gray-600">0,2% of Income</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600 mb-1">Next Billing Date</div>
            <div className="text-lg font-semibold text-[#1F1F1F]">20/11/2025</div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Column - Billing & Payments */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Billing & Payments</h2>
        
        {/* Current Payment Method */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Current Payment Method</h3>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                MC
              </div>
              <div>
                <div className="font-medium text-[#1F1F1F]">Mastercard</div>
                <div className="text-sm text-gray-600">ending in 1234</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-[#1F1F1F] rounded-[8px] font-medium hover:bg-gray-200 transition-colors text-sm">
              Update Payment Method
            </button>
          </div>
        </div>

        {/* Billing Address */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Billing Address</h3>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="text-[#1F1F1F]">Kapersburgstr. 9, 61191 Rosbach</div>
          </div>
        </div>

        {/* Invoice History */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Invoice History</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-[#1F1F1F] rounded-[8px] font-medium hover:bg-gray-200 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Invoice History
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Invoice</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <tr key={item}>
                    <td className="px-4 py-3 text-sm text-[#1F1F1F]">Invoice #001</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Monthly Subscription</td>
                    <td className="px-4 py-3 text-sm text-gray-600">07/10/2025</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessPlanBilling

