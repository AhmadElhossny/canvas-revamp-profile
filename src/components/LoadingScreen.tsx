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
        {/* Animated text */}
        <div className="text-white text-6xl font-bold font-tajwal mb-8 tracking-wider">
          <span className="inline-block animate-pulse">L</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>O</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>A</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>D</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>I</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>N</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>G</span>
        </div>
        
        {/* Loading spinner */}
        <div className="w-16 h-16 mx-auto border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;