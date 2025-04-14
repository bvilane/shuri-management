'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Placeholder for the actual image - replace with your safari image */}
          <div className="absolute inset-0 bg-[url('/images/hero-bg-placeholder.jpg')] bg-cover bg-center"></div>
          {/* Overlay with texture */}
          <div className="absolute inset-0 bg-foreground/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 texture-bg opacity-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <h1
          className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block">We Manage & Market</span>
          <span className="block mt-2">Safari Lodges</span>
        </h1>

        <p
          className={`mt-6 text-lg md:text-xl max-w-xl text-white/90 transition-all duration-1000 delay-100 ${
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
          <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium">
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/80 text-sm mb-2">Scroll Down</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L12 19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
