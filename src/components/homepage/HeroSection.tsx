'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { usePersona } from '@/contexts/PersonaContext';
import PersonaToggle from '@/components/common/PersonaToggle';

const HeroSection = () => {
  const { persona } = usePersona();
  const router = useRouter();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  const words = ['Accounting.', 'Audit.', 'Expertise.', 'Unified.'];
  
  // Page loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [words.length]);

  // Detect if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Intersection Observer for scroll-based play/pause
  useEffect(() => {
    if (!isMobile || !videoRef.current || !videoContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.muted = false;
              videoRef.current.play().catch(error => {
                console.log("Auto-play was prevented:", error);
              });
            } else {
              videoRef.current.pause();
              videoRef.current.muted = true;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoContainerRef.current);

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [isMobile]);

  // Desktop: Auto-play muted video
  useEffect(() => {
    if (isMobile || !videoRef.current) return;
    
    videoRef.current.muted = true;
    videoRef.current.play().catch(error => {
      console.log("Auto-play was prevented:", error);
    });
  }, [isMobile]);

  const handleVideoToggle = () => {
    if (isMobile) {
      // Mobile: Direct control
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.muted = false;
          videoRef.current.play().catch(error => {
            console.log("Play was prevented:", error);
          });
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // Desktop: Open modal
      setIsModalOpen(true);
      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.muted = false;
          modalVideoRef.current.play().catch(error => {
            console.log("Play was prevented:", error);
          });
        }
      }, 100);
    }
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };

  const handleRequestDemo = () => {
    // Navigate to contact page or open demo request modal
    router.push('/contact');
  };

  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 overflow-hidden transition-all duration-1000 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-300/20 to-lime-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-lime-300/20 to-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-200/20 to-lime-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className={`relative w-full min-h-screen flex flex-col justify-center px-6 lg:px-8 pb-20 transition-all duration-1000 delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Top Section - Looping Word Animation */}
          <div className="mt-8 mb-6 md:mt-16 md:mb-12 h-32 md:h-48 lg:h-56 flex items-center justify-center w-full overflow-hidden px-4">
            <div className="relative w-full h-full flex justify-center items-center">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 ${
                    index === currentWordIndex
                      ? 'opacity-100 scale-125'
                      : 'opacity-0 scale-75'
                  }`}
                  style={{
                    textShadow: index === currentWordIndex ? '0 0 40px rgba(34, 197, 94, 0.4), 0 0 80px rgba(34, 197, 94, 0.2)' : 'none',
                    left: word === 'Accounting.' ? '58%' : '50%',
                    top: '50%',
                    transform: index === currentWordIndex 
                      ? 'translateX(-50%) translateY(-50%) scale(1.25)' 
                      : 'translateX(-50%) translateY(-50%) scale(0.75)'
                  }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-7xl 
                  lg:text-8xl xl:text-[9rem] 2xl:text-[12rem] 
                  font-bold leading-none text-gray-900 whitespace-nowrap antialiased subpixel-antialiased" style={{ fontSmooth: 'always', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                    {word}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Enhanced Two Column Layout */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            
            {/* Left Side - Enhanced Video Section */}
            <div className={`order-2 lg:order-1 relative transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} ref={videoContainerRef}>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400 to-lime-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-lime-400 to-green-400 rounded-full opacity-15 blur-2xl"></div>
              
              <div className="relative group">
                {/* Main Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm bg-gradient-to-br from-green-50 to-lime-50 p-1">
                  <div className="aspect-[16/10] bg-gradient-to-br from-green-100 via-lime-50 to-green-50 relative overflow-hidden rounded-2xl">
                    {/* Local Video */}
                    <video
                      ref={videoRef}
                      className="w-full h-full rounded-2xl object-cover bg-black"
                      loop
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src="/Vacei Portals.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play/Pause Control Overlay - Always visible */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <button 
                        onClick={handleVideoToggle}
                        className="pointer-events-auto w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-2xl hover:bg-white"
                        aria-label={isMobile ? (isPlaying ? "Pause video" : "Play video") : "Open video in fullscreen"}
                      >
                        {isMobile && isPlaying ? (
                          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Live Demo</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content Section */}
            <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Persona Toggle */}
              <PersonaToggle variant="minimal" className="mb-6" />
              
              {/* Enhanced Subheadline with Persona-Specific Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {persona === 'business' ? (
                    <>
                      We are your virtual accountants & auditors
                      <span className="block bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                        — or your firm&apos;s white-label platform
                      </span>
                    </>
                  ) : (
                    <>
                      White-label platform for
                      <span className="block bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                        Accounting & Audit Firms
                      </span>
                    </>
                  )}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {persona === 'business' ? (
                    'Upload documents, automate workflows, get audits. Whether you run a business or a firm, Vacei adapts to your needs.'
                  ) : (
                    'Brand your portal, automate client workflows, deliver professional audits. Scale your firm with our white-label accounting & audit platform.'
                  )}
                </p>
              </div>


              {/* Enhanced CTAs with Persona-Specific Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={handleRequestDemo}
                  className="group relative px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 min-w-[160px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {persona === 'business' ? 'Request Demo' : 'Get Proposal'}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="px-8 py-4 text-base font-semibold text-gray-700 bg-white/80 hover:bg-white backdrop-blur rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-green-300 transform hover:-translate-y-1 hover:scale-105 min-w-[160px]">
                  See Pricing
                </button>
              </div>

              {/* Enhanced Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur rounded-full border border-white/50">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">SSL Encrypted & GDPR Compliant</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
                <span className="px-4 py-2 bg-white/50 backdrop-blur rounded-full border border-white/50">Operated by A4 Services Limited (Malta)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal for Desktop */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-6xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div 
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                className="w-full h-full"
                controls
                loop
                playsInline
              >
                <source src="/Vacei Portals.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HeroSection;