import { useState } from 'react'
import Overview from './Overview'
import PersonalInformation from './PersonalInformation'
import AccessPlanBilling from './AccessPlanBilling'
import Notifications from './Notifications'
import amplitudeLogo from '../../assets/amplitude_small_logo.svg'
import amplitudeLogoLarge from '../../assets/amplitude_logo.svg'
import playStoreBadge from '../../assets/play-store-badge.svg'
import appStoreBadge from '../../assets/app-store-badge.svg'

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  const tabs = [
    'Overview',
    'Personal Information',
    'Access Plan & Billing',
    'Notifications'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[1400px] mx-auto px-8">
          <img src={amplitudeLogo} alt="Amplitude" className="h-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-[1400px] mx-auto px-8">
          <nav className="flex gap-8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-[#1F1F1F] border-b-2 border-[#1F1F1F]'
                    : 'text-gray-600 hover:text-[#1F1F1F]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          {activeTab === 'Overview' && <Overview />}
          {activeTab === 'Personal Information' && <PersonalInformation />}
          {activeTab === 'Access Plan & Billing' && <AccessPlanBilling />}
          {activeTab === 'Notifications' && <Notifications />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-6 flex flex-col gap-6">
            <div className="mb-4 flex justify-center">
              <img src={amplitudeLogoLarge} alt="Amplitude" className="h-8" />
            </div>
            <div className="flex justify-center mb-4">
              <div className="grid grid-cols-2 gap-6 w-[280px]">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                  <img src={playStoreBadge} alt="Get it on Google Play" className="w-full h-auto" />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                  <img src={appStoreBadge} alt="Download on the App Store" className="w-full h-auto" />
                </a>
              </div>
            </div>
            <p className="text-gray-600 text-lg font-medium">Live bold. Behave humble.</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>Copyright 2025 amplitude. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1F1F1F]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1F1F1F]">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard

