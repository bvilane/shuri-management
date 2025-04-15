'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Enhanced lodge data
const lodges = [
  {
    id: 1,
    name: "Savanna Horizon Lodge",
    location: "Eastern Africa",
    image: "/images/lodge-2.jpg",
    rating: 4.9,
    reviewCount: 128,
    description: "A luxury lodge overlooking vast savannas with unparalleled wildlife viewing in Africa's premier reserve.",
    capacity: "16 Luxury Suites",
    highlights: ["Game Drives", "Infinity Pool", "Fine Dining", "Spa Services"]
  },
  {
    id: 2,
    name: "Riverside Safari Retreat",
    location: "Central Africa",
    image: "/images/lodge-4.jpg",
    rating: 4.8,
    reviewCount: 94,
    description: "Nestled on the banks of a mighty river, offering exceptional water and land safaris in pristine wilderness.",
    capacity: "12 Tented Suites",
    highlights: ["River Cruises", "Spa Treatments", "Bush Dining", "Night Safari"]
  },
  {
    id: 3,
    name: "Okavango Wilderness Camp",
    location: "Southern Africa",
    image: "/images/lodge-5.jpg",
    rating: 4.7,
    reviewCount: 76,
    description: "An intimate tented camp in the heart of Africa's delta waterways, showcasing the continent's most pristine wetland.",
    capacity: "8 Tented Rooms",
    highlights: ["Mokoro Excursions", "Wildlife Tracking", "Star Gazing", "Bird Watching"]
  }
];

export default function Lodges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [cardHoverIndex, setCardHoverIndex] = useState<number | null>(null);

  const nextLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === lodges.length - 1 ? 0 : prevIndex + 1));
  };

  const prevLodge = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? lodges.length - 1 : prevIndex - 1));
  };

  const goToPrevLodge = () => {
    setActiveIndex((prev) => (prev === 0 ? lodges.length - 1 : prev - 1));
  };

  const goToNextLodge = () => {
    setActiveIndex((prev) => (prev === lodges.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="lodges" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Safari-themed decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-2xl opacity-50 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 pattern-animal-track transform rotate-12 opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 pattern-animal-track transform -rotate-15 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Animation type="fade-up">
          {/* Premium section title with safari styling */}
          <div className="flex flex-col items-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">EXPLORE OUR PORTFOLIO</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center max-w-3xl mx-auto leading-tight">
              Our Premier Safari Lodges
            </h2>
            <span className="block w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6"></span>
            <p className="mt-6 text-center max-w-2xl mx-auto text-foreground/70 text-lg">
              Discover our handpicked collection of luxury safari lodges, each offering a unique blend of comfort, adventure, and authentic African experiences.
            </p>
          </div>
          
          {/* Featured Lodge - Enhanced with premium effects */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl safari-image group">
              <div className="aspect-[16/9] relative">
                <Image
                  src={lodges[activeIndex].image}
                  alt={lodges[activeIndex].name}
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Safari-themed decorative overlay */}
                <div className="absolute inset-0 pattern-safari-stripes opacity-[0.03] mix-blend-overlay"></div>
              </div>
              
              {/* Premium rating badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm py-1.5 px-4 rounded-full border border-white/10">
                <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-medium">{lodges[activeIndex].rating}</span>
                <span className="text-white/50 text-sm mx-1">•</span>
                <span className="text-white/80 text-sm">{lodges[activeIndex].reviewCount} reviews</span>
              </div>
              
              {/* Enhanced navigation arrows */}
              <button 
                onClick={prevLodge}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110"
                aria-label="Previous lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button 
                onClick={nextLodge}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:scale-110"
                aria-label="Next lodge"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm py-1.5 px-4 rounded-full border border-white/10">
                <span className="text-white text-sm font-medium">{activeIndex + 1}</span>
                <span className="text-white/50 text-sm">/</span>
                <span className="text-white/50 text-sm">{lodges.length}</span>
              </div>
              
              {/* Enhanced content display */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-shadow-lg mb-2 reveal-item">
                  {lodges[activeIndex].name}
                </h3>
                <div className="flex items-center reveal-item reveal-delay-1">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-white/90 font-medium text-shadow-sm">
                    {lodges[activeIndex].location}
                  </p>
                </div>
                <p className="mt-3 max-w-2xl text-white/80 text-shadow-sm hidden md:block reveal-item reveal-delay-2">
                  {lodges[activeIndex].description}
                </p>
                
                {/* Capacity badge */}
                <div className="mt-3 hidden md:block">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-white text-sm font-medium reveal-item reveal-delay-2">
                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {lodges[activeIndex].capacity}
                  </span>
                </div>
                
                {/* Features badges - enhanced styling */}
                <div className="mt-4 flex flex-wrap gap-2 hidden md:flex reveal-item reveal-delay-3">
                  {lodges[activeIndex].highlights.map((feature, index) => (
                    <span key={index} className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 transition-colors duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lodge Thumbnails with enhanced active indicator */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {lodges.map((lodge, index) => (
              <Animation key={lodge.id} type="fade-up" delay={300 + (index * 100)}>
                <button 
                  className={`relative rounded-lg overflow-hidden aspect-[4/3] shadow-md transition-all duration-500 ${
                    activeIndex === index ? 'ring-2 ring-primary scale-[1.03] z-10' : 'opacity-80 hover:opacity-100 hover:shadow-xl'
                  } premium-card`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <Image
                    src={lodge.image}
                    alt={lodge.name}
                    fill
                    className={`object-cover transition-all duration-500 ${activeIndex === index ? 'scale-105' : ''}`}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${activeIndex === index ? 'opacity-70' : 'opacity-60'}`}></div>
                  
                  {/* Safari-themed decorative overlay */}
                  <div className="absolute inset-0 pattern-safari-stripes opacity-[0.03] mix-blend-overlay"></div>
                  
                  {/* Status indicator dot */}
                  {activeIndex === index && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
                  )}
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                    hoverIndex === index ? 'translate-y-0' : 'translate-y-6'
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

          {/* Enhanced CTA section */}
          <div className="mt-20">
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm p-8 sm:p-10 rounded-xl border border-primary/10 shadow-lg max-w-4xl mx-auto overflow-hidden">
              {/* Safari-themed decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-[0.03]"></div>
              
              {/* Paw print accent */}
              <div className="absolute bottom-4 right-4 w-16 h-16 text-primary/5">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/><circle cx="16" cy="15" r="2"/><circle cx="8" cy="15" r="2"/><circle cx="21" cy="18" r="2"/><circle cx="3" cy="18" r="2"/></svg>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground">
                    Interested in our lodge management services?
                  </h3>
                  <p className="text-foreground/80">
                    Each lodge in our portfolio is selected for its exceptional quality, location, and commitment to sustainable tourism. 
                    We provide tailored management and marketing solutions to maximize occupancy and guest satisfaction.
                  </p>
                  
                  {/* Quick highlights */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-foreground/80">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      <span>Customized marketing strategy</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground/80">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      <span>Operational excellence</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground/80">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      <span>Staff training & development</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground/80">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      <span>Sustainability practices</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <GetStartedButton className="whitespace-nowrap shadow-md px-8 py-3.5 text-lg">
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