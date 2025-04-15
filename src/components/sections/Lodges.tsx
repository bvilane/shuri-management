'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Lodges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const lodges = [
    {
      id: 1,
      name: "Savanna Horizon Lodge",
      location: "Eastern Africa",
      image: "/images/lodge-2.jpg",
      description: "A luxury lodge overlooking vast savannas with unparalleled wildlife viewing in Africa's premier reserve.",
      features: ["16 Luxury Suites", "Game Drives", "Infinity Pool", "Fine Dining"]
    },
    {
      id: 2,
      name: "Riverside Safari Retreat",
      location: "Central Africa",
      image: "/images/lodge-4.jpg",
      description: "Nestled on the banks of a mighty river, offering exceptional water and land safaris in pristine wilderness.",
      features: ["12 Tented Suites", "River Cruises", "Spa Treatments", "Bush Dining"]
    },
    {
      id: 3,
      name: "Okavango Wilderness Camp",
      location: "Southern Africa",
      image: "/images/lodge-5.jpg",
      description: "An intimate tented camp in the heart of Africa's delta waterways, showcasing the continent's most pristine wetland.",
      features: ["8 Tented Rooms", "Mokoro Excursions", "Wildlife Tracking", "Star Gazing"]
    },
    {
      id: 4,
      name: "Mara Plains Sanctuary",
      location: "Northern Africa",
      image: "/images/lodge-6.jpg",
      description: "Prime location for the Great Migration and year-round big cat encounters across Africa's stunning plains.",
      features: ["10 Safari Tents", "Hot Air Balloon", "Masai Village Visits", "Photography Hides"]
    },
    {
      id: 5,
      name: "Serengeti Horizon Lodge",
      location: "Western Africa",
      image: "/images/lodge-7.jpg",
      description: "Panoramic views across the endless plains of Africa, offering front-row seats to nature's greatest show.",
      features: ["14 Luxury Rooms", "Walking Safaris", "Outdoor Dining", "Sunset Viewpoint"]
    }
  ];

  const nextLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === lodges.length - 1 ? 0 : prevIndex + 1));
  };

  const prevLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? lodges.length - 1 : prevIndex - 1));
  };

  return (
    <section id="lodges" className="py-24 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">OUR PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            Managed Luxury Lodges
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Exceptional Safari Accommodations Across Africa
          </p>
          <p className="mt-6 text-center max-w-3xl mx-auto text-foreground/70">
            We proudly manage and market these outstanding properties across Africa's most spectacular wilderness destinations, each offering unique experiences for discerning travelers.
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
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevLodge}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                aria-label="Previous lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button 
                onClick={nextLodge}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary"
                aria-label="Next lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm py-1 px-3 rounded-full">
                <span className="text-white text-sm font-medium">{activeIndex + 1}</span>
                <span className="text-white/50 text-sm">/</span>
                <span className="text-white/50 text-sm">{lodges.length}</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-shadow-lg mb-1">
                  {lodges[activeIndex].name}
                </h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-white/90 font-medium text-shadow-sm">
                    {lodges[activeIndex].location}
                  </p>
                </div>
                <p className="mt-3 max-w-2xl text-white/80 text-shadow-sm hidden md:block">
                  {lodges[activeIndex].description}
                </p>
                
                {/* Features badges */}
                <div className="mt-4 flex flex-wrap gap-2 hidden md:flex">
                  {lodges[activeIndex].features.map((feature, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Animation>
        </div>

        {/* Lodge Thumbnails with Active Indicator */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {lodges.map((lodge, index) => (
            <Animation key={lodge.id} type="fade-up" delay={300 + (index * 100)}>
              <button 
                className={`relative rounded-lg overflow-hidden aspect-[4/3] shadow-md transition-all duration-300 ${
                  activeIndex === index ? 'ring-4 ring-primary scale-[1.02] z-10' : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Image
                  src={lodge.image}
                  alt={lodge.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 ${
                  hoverIndex === index ? 'translate-y-0' : 'translate-y-8'
                }`}>
                  <h4 className="text-white text-shadow-sm text-sm font-medium truncate">
                    {lodge.name}
                  </h4>
                  <p className={`text-white/80 text-xs truncate transition-opacity duration-300 ${
                    hoverIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {lodge.location}
                  </p>
                </div>
              </button>
            </Animation>
          ))}
        </div>

        <Animation type="fade-up">
          <div className="mt-16">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/10 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    Interested in our lodge management services?
                  </h3>
                  <p className="text-foreground/80">
                    Each lodge in our portfolio is selected for its exceptional quality, location, and commitment to sustainable tourism. 
                    We provide tailored management and marketing solutions to maximize occupancy and guest satisfaction.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <GetStartedButton className="whitespace-nowrap shadow-md px-8 py-3">
                    Request Information
                  </GetStartedButton>
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
} 