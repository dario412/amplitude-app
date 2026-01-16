import { useState } from 'react'

function Notifications() {
  const [newsletter, setNewsletter] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl">
      <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Notification Preferences</h2>
      
      <div className="space-y-6">
        {/* Newsletter Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <div className="font-medium text-[#1F1F1F] mb-1">Receive Newsletter Updates</div>
            <div className="text-sm text-gray-600">Get updates about new features and improvements</div>
          </div>
          <button
            onClick={() => setNewsletter(!newsletter)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              newsletter ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                newsletter ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <div className="font-medium text-[#1F1F1F] mb-1">Receive Notifications</div>
            <div className="text-sm text-gray-600">Get notified about important account activities</div>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              notifications ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notifications

