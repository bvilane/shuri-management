'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop * 0.3); // Control parallax speed
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Hero Image Background with Improved Loading */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {/* Preloaded placeholder background - shown until image loads */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-[#5a4029] to-[#2e2116] transition-opacity duration-700 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          
          {/* Hero image with optimized loading */}
          <Image 
            src="/images/hero.jpg" 
            alt="Safari lodge landscape" 
            fill 
            priority={true}
            quality={85}
            className={`object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
            style={{ transform: `translateY(${scrollPosition}px) scale(1.05)` }}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMEAwAAAAAAAAAAAAABAgMABAUGIWEREiIxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AtoGxmNbuIyXvNE0SHjtkVTkdwB3JwM5JAOwcnxU9a1D7hCNxcHAQeHpf/9k="
            onLoadingComplete={() => setImageLoaded(true)}
          />
          
          {/* Enhanced gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-15 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white flex justify-center mt-8 sm:mt-0">
        <div className="max-w-3xl text-center">
          <div className="relative p-4 sm:p-6 md:p-8">
            <span 
              className={`inline-block px-4 py-1 mb-4 rounded-full bg-primary text-white text-xs sm:text-sm font-medium transition-all duration-700 shadow-md ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              Premier Safari Lodge Management
            </span>
            
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                <span className="whitespace-nowrap text-white">We Manage & Market</span>
                <span className="text-white mt-2">Safari Lodges</span>
              </div>
            </h1>

            <p
              className={`mt-6 mx-auto text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-white font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              Grow your bookings, brand, and guest satisfaction without the stress
              of managing it all yourself. Expert solutions tailored for Africa's finest properties.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <GetStartedButton className="shadow-lg hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3">
                Book a Call
              </GetStartedButton>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium text-white border-2 border-white/30 backdrop-blur-sm rounded-md hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-white text-xs sm:text-sm mb-2 font-medium text-shadow-sm drop-shadow-lg">Explore More</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white drop-shadow-lg sm:w-6 sm:h-6"
        >
          <path
            d="M12 5L12 19M12 19L5 12M12 19L19 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
