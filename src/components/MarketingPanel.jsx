import backgroundImage from '../assets/account-background-image.png'
import amplitudeLogo from '../assets/amplitude_logo.svg'

function MarketingPanel() {
  return (
    <div 
      className="relative h-full w-full overflow-hidden"
    >
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover"
      />

      {/* Logo Badge */}
      <div className="absolute bottom-12 right-6 bg-white p-4 rounded-md shadow-lg">
        <img 
          src={amplitudeLogo} 
          alt="Amplitude Logo" 
          className="w-24 h-auto"
        />
      </div>
    </div>
  )
}

export default MarketingPanel
