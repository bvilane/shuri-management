'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';

export default function Lodges() {
  const [activeIndex, setActiveIndex] = useState(0);

  const lodges = [
    {
      id: 1,
      name: "Savanna Horizon Lodge",
      location: "Eastern Africa",
      image: "/images/lodge-2.jpg",
      description: "A luxury lodge overlooking vast savannas with unparalleled wildlife viewing in Africa's premier reserve."
    },
    {
      id: 2,
      name: "Riverside Safari Retreat",
      location: "Central Africa",
      image: "/images/lodge-4.jpg",
      description: "Nestled on the banks of a mighty river, offering exceptional water and land safaris in pristine wilderness."
    },
    {
      id: 3,
      name: "Okavango Wilderness Camp",
      location: "Southern Africa",
      image: "/images/lodge-5.jpg",
      description: "An intimate tented camp in the heart of Africa's delta waterways, showcasing the continent's most pristine wetland."
    },
    {
      id: 4,
      name: "Mara Plains Sanctuary",
      location: "Northern Africa",
      image: "/images/lodge-6.jpg",
      description: "Prime location for the Great Migration and year-round big cat encounters across Africa's stunning plains."
    },
    {
      id: 5,
      name: "Serengeti Horizon Lodge",
      location: "Western Africa",
      image: "/images/lodge-7.jpg",
      description: "Panoramic views across the endless plains of Africa, offering front-row seats to nature's greatest show."
    }
  ];

  const nextLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === lodges.length - 1 ? 0 : prevIndex + 1));
  };

  const prevLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? lodges.length - 1 : prevIndex - 1));
  };

  return (
    <section id="lodges" className="py-20 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-primary/5 -rotate-12 rounded-br-3xl"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rotate-12 rounded-tl-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Our Lodges
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Experience The Finest Safari Accommodations
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto">
            We proudly manage and market these outstanding properties across Africa's most iconic destinations.
          </p>
        </Animation>

        {/* Featured Lodge */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Animation type="fade-up" delay={200}>
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="aspect-[16/9] relative">
                <Image
                  src={lodges[activeIndex].image}
                  alt={lodges[activeIndex].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevLodge}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                aria-label="Previous lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button 
                onClick={nextLodge}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                aria-label="Next lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-shadow-lg">
                  {lodges[activeIndex].name}
                </h3>
                <p className="text-white/90 mt-2 font-medium text-shadow-sm">
                  {lodges[activeIndex].location}
                </p>
                <p className="mt-3 max-w-2xl text-white/80 text-shadow-sm hidden md:block">
                  {lodges[activeIndex].description}
                </p>
              </div>
            </div>
          </Animation>
        </div>

        {/* Lodge Thumbnails with Active Indicator */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {lodges.map((lodge, index) => (
            <Animation key={lodge.id} type="fade-up" delay={300 + (index * 100)}>
              <button 
                className={`relative rounded-lg overflow-hidden aspect-[4/3] shadow-md transition-all duration-300 ${
                  activeIndex === index ? 'ring-4 ring-primary scale-[1.02]' : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={lodge.image}
                  alt={lodge.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h4 className="absolute bottom-2 left-3 right-3 text-white text-shadow-sm text-sm font-medium truncate">
                  {lodge.name}
                </h4>
              </button>
            </Animation>
          ))}
        </div>

        {/* Lodge Navigation Dots for Mobile */}
        <div className="mt-8 flex justify-center gap-2">
          {lodges.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-6' : 'bg-primary/30 hover:bg-primary/50'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to lodge ${index + 1}`}
            ></button>
          ))}
        </div>

        <Animation type="fade-up">
          <div className="mt-12 text-center">
            <p className="text-foreground/80 max-w-3xl mx-auto">
              Each lodge is selected for its exceptional quality, location, and commitment to sustainable tourism. 
              We provide tailored management and marketing solutions to maximize their potential.
            </p>
          </div>
        </Animation>
      </div>
    </section>
  );
} 