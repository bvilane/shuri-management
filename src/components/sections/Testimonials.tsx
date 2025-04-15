'use client';

import { useState } from 'react';
import Image from 'next/image';
import Animation from '@/components/ui/Animation';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('clients');

  const clientTestimonials = [
    {
      id: 1,
      quote: "Our stay at Shuri's riverside lodge was nothing short of magical. The attention to detail, from the architecture that blends with the surroundings to the personalized service, created an experience that connected us to Africa in a profound way.",
      name: "Emily & Michael Thompson",
      location: "London, UK",
      role: "Travelers",
      image: "/images/guest-1.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Since partnering with Shuri Management, our occupancy has increased by 35% and guest satisfaction scores have never been higher. Their marketing expertise and operational improvements have transformed our lodge's performance.",
      name: "David Kariuki",
      location: "Nairobi, Kenya",
      role: "Lodge Owner",
      image: "/images/guest-2.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Shuri doesn't just manage our property—they've elevated every aspect of our guest experience. From reimagining our dining concept to training our guides, they've helped us create truly memorable safari moments.",
      name: "Sarah & James Williams",
      location: "Cape Town, South Africa",
      role: "Lodge Proprietors",
      image: "/images/guest-3.jpg",
      rating: 5
    }
  ];

  const partnerTestimonials = [
    {
      id: 1,
      quote: "Working with Shuri transformed our lodge's operations and marketing efforts. Their hands-on approach and deep industry knowledge made all the difference—our bookings increased by 78% in just one season.",
      name: "Sarah Johnson",
      location: "Eastern Cape, South Africa",
      role: "Owner, Savanna Vista Lodge",
      image: "/images/owner-1.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The Shuri team understands the unique challenges of running a remote safari property. They've helped us implement sustainable practices that not only reduce our environmental footprint but also resonate with our conservation-minded guests.",
      name: "Michael Odhiambo",
      location: "Maasai Mara, Kenya", 
      role: "Managing Director, Horizon Safari Collection",
      image: "/images/owner-2.jpg",
      rating: 4
    },
    {
      id: 3,
      quote: "What sets Shuri apart is their comprehensive approach. From staff training to digital marketing, they've revitalized every aspect of our operation while respecting our lodge's unique character and vision.",
      name: "Emma & Thomas Banda",
      location: "Zambia",
      role: "Founders, Riverbank Lodge",
      image: "/images/owner-3.jpg",
      rating: 5
    }
  ];

  const testimonials = activeCategory === 'clients' ? clientTestimonials : partnerTestimonials;

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-card">
      {/* Background elements */}
      <div className="absolute -left-36 top-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-36 bottom-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <span className="block text-center text-primary font-medium mb-3">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center">
            What People Say About Us
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Success stories from our clients and partners
          </p>
        </Animation>

        {/* Category toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex bg-background/50 p-1 rounded-lg shadow-sm border border-border/10">
            <button 
              onClick={() => {setActiveCategory('clients'); setActiveIndex(0);}}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'clients' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'hover:bg-card'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Guests & Travelers
            </button>
            <button 
              onClick={() => {setActiveCategory('partners'); setActiveIndex(0);}}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'partners' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'hover:bg-card'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Lodge Owners & Partners
            </button>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto relative">
          {/* Quote mark */}
          <div className="absolute -top-12 left-0 md:left-8 text-primary/10 pointer-events-none animate-pulse">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
            </svg>
          </div>

          <div className="flex overflow-hidden relative bg-card rounded-2xl shadow-xl border border-border/20">
            {/* Main testimonial card */}
            <div className="w-full p-8 md:p-12">
              <Animation key={`${activeCategory}-${activeIndex}`} type="fade-in">
                <div className="md:flex gap-8 items-center">
                  <div className="md:w-2/3 space-y-6">
                    <p className="text-lg md:text-xl italic leading-relaxed text-foreground/90">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    
                    <div className="flex items-center pt-4 border-t border-border/20">
                      <div className="flex-grow">
                        <p className="font-serif font-bold text-lg text-foreground">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-foreground/70 text-sm">
                          {testimonials[activeIndex].role}
                        </p>
                        <p className="text-foreground/60 text-sm">
                          {testimonials[activeIndex].location}
                        </p>
                      </div>
                      <StarRating rating={testimonials[activeIndex].rating} />
                    </div>
                  </div>
                  
                  {/* Image - hidden on mobile */}
                  <div className="hidden md:block md:w-1/3 rounded-xl overflow-hidden shadow-lg h-64 relative mt-6 md:mt-0 transition-transform duration-500 hover:scale-105">
                    <Image 
                      src={testimonials[activeIndex].image}
                      alt={`Photo of ${testimonials[activeIndex].name}`}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </Animation>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {/* Indicator dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 h-2 bg-primary' 
                      : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[0, 1, 2].map((index) => (
            <Animation key={index} type="fade-up" delay={index * 100}>
              <div 
                className="bg-background p-6 rounded-xl shadow-md border border-border/20 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => {
                  setActiveIndex(index);
                  if (index < testimonials.length) {
                    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-primary animate-pulse">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                    <StarRating rating={testimonials[index].rating} />
                  </div>
                  <p className="line-clamp-4 text-foreground/80">
                    "{testimonials[index].quote.length > 150 
                      ? testimonials[index].quote.substring(0, 150) + '...' 
                      : testimonials[index].quote}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 ring-2 ring-primary/20">
                      <Image 
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonials[index].name}</p>
                      <p className="text-xs text-foreground/60">{testimonials[index].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animation>
          ))}
        </div>

        {/* Call to action */}
        <Animation type="fade-up">
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Join our growing list of satisfied partners</h3>
            <p className="mb-8 text-foreground/70 max-w-2xl mx-auto">
              Discover how Shuri Management can transform your safari lodge business
            </p>
            <GetStartedButton className="shadow-lg hover:shadow-xl text-lg px-10 py-3">
              Schedule a Consultation
            </GetStartedButton>
          </div>
        </Animation>
      </div>
    </section>
  );
} 