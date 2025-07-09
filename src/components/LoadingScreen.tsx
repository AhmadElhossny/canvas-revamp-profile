import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[#159bc7] to-[#4968aa]">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/lovable-uploads/b24ce843-6de0-4da1-9a99-5c374a72e274.png" 
            alt="Logo" 
            className="h-24 w-auto mx-auto animate-bounce filter drop-shadow-lg"
            style={{ 
              animation: 'bounce 1s infinite, pulse 2s infinite, float 3s ease-in-out infinite',
              filter: 'drop-shadow(0 10px 25px rgba(255,255,255,0.3))'
            }}
          />
        </div>
        
        {/* Loading indicator */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;