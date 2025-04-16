'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

// StarRating component
function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  // Create full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg key={`star-${i}`} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <svg key="half-star" className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
        <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  
  // Fill remaining with empty stars
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg key={`empty-${i}`} className="w-4 h-4 md:w-5 md:h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  
  return <div className="flex">{stars}</div>;
}

// Client testimonial data with star ratings
const clientTestimonials = [
  {
    name: "John Mbeki",
    role: "Owner, Serengeti Luxury Lodge",
    image: "/images/guest-1.jpg",
    content: "Working with Shuri Management transformed our lodge operations. Their team's expertise helped us increase bookings by 40% in just six months while maintaining our commitment to conservation.",
    rating: 5
  },
  {
    name: "Sarah Thompson",
    role: "Director, Zambia Wildlife Retreats",
    image: "/images/guest-2.jpg",
    content: "The marketing strategy Shuri developed for us completely revitalized our online presence. We're now reaching a premium international clientele we couldn't access before.",
    rating: 4.5
  },
  {
    name: "Michael Okafor",
    role: "Founder, Botswana Safari Collection",
    image: "/images/guest-3.jpg",
    content: "The staff training program Shuri Management implemented elevated our guest experience to new heights. Our reviews mention our guides by name, and we've seen a 30% increase in return bookings.",
    rating: 5
  }
];

// Partner testimonial data with star ratings
const partnerTestimonials = [
  {
    name: "Rebecca Wilson",
    role: "CEO, Wild Africa Tours",
    image: "/images/owner-1.jpg",
    content: "Partnering with Shuri Management has given us confidence in recommending their managed properties to our most discerning clients. The consistency and quality of service is unmatched.",
    rating: 5
  },
  {
    name: "Daniel Mutua",
    role: "Director, Kenya Tourism Board",
    image: "/images/owner-2.jpg",
    content: "Shuri Management has helped elevate the standard of luxury safari experiences across our region. Their commitment to both excellence and sustainability aligns perfectly with our vision.",
    rating: 4.5
  },
  {
    name: "Lisa Mbatha",
    role: "Editor, Luxury Travel Africa",
    image: "/images/owner-3.jpg",
    content: "The properties managed by Shuri consistently rank in our top destinations. They understand how to preserve the authentic safari experience while delivering world-class service.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<'clients' | 'partners'>('clients');
  const [testimonials, setTestimonials] = useState(clientTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTestimonials(activeTab === 'clients' ? clientTestimonials : partnerTestimonials);
    setActiveIndex(0);
  }, [activeTab]);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-1/3 h-1/4 bg-primary/5 rounded-br-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/4 bg-accent/5 rounded-tl-full blur-3xl"></div>
      
      {/* Decorative quote marks */}
      <div className="absolute left-4 md:left-12 top-1/4 text-primary/5 animate-pulse-slow">
        <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <div className="absolute right-4 md:right-12 bottom-1/4 text-primary/5 animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
        <svg className="w-16 h-16 md:w-24 md:h-24 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Animation type="fade-up">
          <div className="flex justify-center">
            <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/10 text-primary font-medium mb-4 inline-block">HEAR FROM OUR COMMUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center">
            Testimonials
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 md:mt-6"></div>
          <p className="mt-4 md:mt-6 text-center mx-auto max-w-3xl text-base md:text-lg text-foreground/80 mb-8 md:mb-12">
            Don't just take our word for it. Hear directly from the lodge owners and partners
            who have experienced the Shuri difference.
          </p>
          
          {/* Tab selector - Optimized for mobile */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex bg-card/50 backdrop-blur-sm p-1 rounded-lg shadow-sm border border-border/10">
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'clients'
                    ? 'bg-primary text-white shadow-md'
                    : 'hover:bg-card active:bg-card/80'
                }`}
              >
                Lodge Owners
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'partners'
                    ? 'bg-primary text-white shadow-md'
                    : 'hover:bg-card active:bg-card/80'
                }`}
              >
                Partners
              </button>
            </div>
          </div>
        </Animation>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial slider - responsive layout */}
          <div className={`relative transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <Animation type="fade-up" delay={100}>
              <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border/10">
                <div className="md:flex">
                  {/* Image section - Adjusted for mobile */}
                  <div className="relative h-56 md:h-auto md:w-1/3 bg-primary/5">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                    
                    {/* Display user info on mobile overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:hidden">
                      <div className="mb-1">
                        <StarRating rating={testimonials[activeIndex].rating} />
                      </div>
                      <h3 className="text-white font-serif font-bold text-lg mb-0.5">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="p-5 md:p-8 md:w-2/3 flex flex-col justify-between">
                    {/* Hidden on mobile (shown in image overlay) */}
                    <div className="hidden md:block">
                      <div className="mb-2">
                        <StarRating rating={testimonials[activeIndex].rating} />
                      </div>
                      <h3 className="font-serif font-bold text-xl mb-1">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-foreground/70 mb-4">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                    
                    <blockquote className="mb-6 md:mb-0 mt-3 md:mt-0 relative">
                      <span className="absolute -top-2 -left-2 text-primary/10 w-6 h-6">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </span>
                      <p className="text-foreground/90 italic text-base md:text-lg pl-4">
                        {testimonials[activeIndex].content}
                      </p>
                    </blockquote>
                    
                    {/* Navigation controls - Adjusted for mobile */}
                    <div className="flex justify-between items-center mt-4 md:mt-6">
                      <div className="flex space-x-1">
                        {testimonials.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === activeIndex
                                ? 'bg-primary scale-125'
                                : 'bg-primary/30 hover:bg-primary/50'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                          />
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={goToPrev}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted hover:bg-muted/80 active:bg-muted/90 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                          aria-label="Previous testimonial"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={goToNext}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted hover:bg-muted/80 active:bg-muted/90 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                          aria-label="Next testimonial"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
          
          {/* Testimonial grid preview - Mobile-responsive */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {testimonials.map((testimonial, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-lg overflow-hidden h-28 sm:h-32 md:h-40 group touch-manipulation ${
                  idx === activeIndex ? 'ring-2 ring-primary' : ''
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70"></div>
                <div className="absolute bottom-2 left-0 w-full px-2 text-left">
                  <p className="text-white text-xs truncate font-medium">
                    {testimonial.name}
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </button>
            ))}
          </div>
          
          {/* CTA Section - Mobile-friendly */}
          <div className="mt-12 md:mt-20 text-center">
            <Animation type="fade-up">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
                Ready to transform your safari lodge?
              </h3>
              <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto mb-6 md:mb-8">
                Schedule a consultation to discuss how our tailored management solutions
                can help your property thrive.
              </p>
              <GetStartedButton className="shadow-md hover:shadow-lg px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base">
                Schedule a Consultation
              </GetStartedButton>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
} 