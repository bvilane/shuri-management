'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Static Hero Image Background with Overlay and Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {/* Hero image background with parallax effect */}
          <Image 
            src="/images/hero.jpg" 
            alt="Safari lodge landscape" 
            fill 
            priority
            quality={90}
            className="object-cover object-center transform scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            style={{ transform: `translateY(${scrollPosition}px) scale(1.05)` }}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESEHEhNBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AslsYxJZRw3d3oGmYAoiqMKvgAAADsrjkW7SMsjGyMNwUGlEf/9k="
          />
          
          {/* Enhanced gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-15 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent blur-md rounded-lg"></div>
          <div className="relative p-8">
            <span 
              className={`inline-block px-4 py-1 mb-4 rounded-full bg-primary text-white text-sm font-medium transition-all duration-700 shadow-md ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              Premier Safari Lodge Management
            </span>
            
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="block text-white">We Manage & Market</span>
              <span className="block mt-2 text-primary">Safari Lodges</span>
            </h1>

            <p
              className={`mt-6 text-lg md:text-xl max-w-xl text-white font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              Grow your bookings, brand, and guest satisfaction without the stress
              of managing it all yourself. Expert solutions tailored for Africa's finest properties.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <GetStartedButton className="shadow-lg hover:shadow-xl text-lg px-8 py-3">
                Book a Call
              </GetStartedButton>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white/30 backdrop-blur-sm rounded-md hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2 font-medium text-shadow-sm">Explore More</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white drop-shadow-lg"
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
