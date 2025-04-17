'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

// Enhanced lodge data
const lodges = [
  {
    id: 1,
    name: "Coming Soon...",
    location: "Eastern Africa",
    image: "/images/lodge-2.jpg",
    rating: 4.9,
    reviewCount: 128,
    description: "Be among the first to join our exclusive collection of premium safari properties. Contact us to learn more about our management services.",
    capacity: "Luxury Safari Properties",
    highlights: ["Premium Management", "Marketing Support", "Operations Excellence", "Staff Training"]
  }
];

export default function Lodges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: number]: boolean}>({});

  // Ensure we have a valid lodge to display
  const currentLodge = lodges[activeIndex] || lodges[0] || {
    id: 0,
    name: "Coming Soon...",
    location: "Eastern Africa",
    image: "/images/lodge-2.jpg",
    rating: 4.9,
    reviewCount: 128,
    description: "Be among the first to join our exclusive collection of premium safari properties. Contact us to learn more about our management services.",
    capacity: "Luxury Safari Properties",
    highlights: ["Premium Management", "Marketing Support", "Operations Excellence", "Staff Training"]
  };

  const handleImageLoaded = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  // Preload all lodge images to prevent transition issues
  useEffect(() => {
    // Preload all lodge images
    lodges.forEach((lodge, index) => {
      const img = new window.Image();
      img.src = lodge.image;
      img.onload = () => handleImageLoaded(index);
    });
  }, []);

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
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 sm:mb-4">JOIN OUR PORTFOLIO</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-center max-w-3xl mx-auto leading-tight">
              Our Premier Safari Lodges
            </h2>
            <span className="block w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 sm:mt-6"></span>
            <p className="mt-4 sm:mt-6 text-center max-w-2xl mx-auto text-foreground/70 text-sm sm:text-lg">
              Discover our handpicked collection of luxury safari lodges, each offering a unique blend of comfort, adventure, and authentic African experiences.
            </p>
          </div>
          
          {/* Featured Lodge - Enhanced with premium effects */}
          <div className="mt-8 sm:mt-16 max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl safari-image group">
              <div className="aspect-[16/10] sm:aspect-[16/9] relative">
                {/* Placeholder gradient that shows while image is loading */}
                <div className={`absolute inset-0 bg-gradient-to-b from-[#725540] to-[#3a2a1d] transition-opacity duration-500 ${
                  imagesLoaded[activeIndex] ? 'opacity-0' : 'opacity-100'
                }`}></div>
                
                <Image
                  src={currentLodge.image}
                  alt={currentLodge.name}
                  fill
                  quality={95}
                  className={`object-cover transition-all duration-1000 group-hover:scale-105 ${
                    imagesLoaded[activeIndex] ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={activeIndex === 0}
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  onLoadingComplete={() => handleImageLoaded(activeIndex)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Safari-themed decorative overlay */}
                <div className="absolute inset-0 pattern-safari-stripes opacity-[0.03] mix-blend-overlay"></div>
              </div>
              
              {/* Premium rating badge */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm py-1 sm:py-1.5 px-2 sm:px-4 rounded-full border border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium">{currentLodge.rating}</span>
                <span className="text-white/50 text-xs sm:text-sm mx-1 hidden sm:inline">•</span>
                <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">{currentLodge.reviewCount} reviews</span>
              </div>
              
              {/* Enhanced content display */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 md:p-8 text-white">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-shadow-lg mb-1 sm:mb-2 reveal-item">
                  {currentLodge.name}
                </h3>
                <div className="flex items-center reveal-item reveal-delay-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-white/90 font-medium text-shadow-sm text-xs sm:text-base">
                    {currentLodge.location}
                  </p>
                </div>
                <p className="mt-2 sm:mt-3 max-w-2xl text-white/80 text-shadow-sm text-xs sm:text-sm md:text-base hidden sm:block reveal-item reveal-delay-2">
                  {currentLodge.description}
                </p>
                
                {/* Capacity badge */}
                <div className="mt-3 hidden md:block">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-white text-sm font-medium reveal-item reveal-delay-2">
                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {currentLodge.capacity}
                  </span>
                </div>
                
                {/* Features badges - enhanced styling */}
                <div className="mt-4 flex flex-wrap gap-2 hidden md:flex reveal-item reveal-delay-3">
                  {currentLodge.highlights.map((feature, index) => (
                    <span key={index} className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 transition-colors duration-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
                  <GetStartedButton className="whitespace-nowrap shadow-md px-6 py-2.5 md:py-3 text-base">
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