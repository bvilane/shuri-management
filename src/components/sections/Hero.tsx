'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      {/* Static Hero Image Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {/* Hero image background */}
          <Image 
            src="/images/hero.jpg" 
            alt="Safari lodge landscape" 
            fill 
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          
          {/* Subtle gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-shadow-xl drop-shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block">We Manage & Market</span>
            <span className="block mt-2">Safari Lodges</span>
          </h1>

          <p
            className={`mt-6 text-lg md:text-xl max-w-xl text-white font-medium text-shadow-md transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Grow your bookings, brand, and guest satisfaction without the stress
            of managing it all yourself.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <GetStartedButton className="shadow-lg hover:shadow-xl text-lg px-8 py-3" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2 font-medium text-shadow-sm">Scroll Down</span>
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
