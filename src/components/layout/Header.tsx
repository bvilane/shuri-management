'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GetStartedButton from '@/components/ui/GetStartedButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Disable body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [scrolled, mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        mobileMenuOpen 
          ? 'bg-white' 
          : scrolled 
            ? 'bg-background/90 backdrop-blur-sm shadow-md py-2' 
            : 'bg-background/20 backdrop-blur-[2px] py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <div className="flex items-center">
            <div className={`relative h-11 w-11 sm:h-14 sm:w-14 mr-2 sm:mr-3 transition-all duration-300 ${scrolled ? 'scale-95' : ''}`}>
              <Image 
                src="/images/logo.jpeg" 
                alt="Shuri Logo" 
                width={45} 
                height={45} 
                className="object-contain rounded-md shadow-sm"
                priority
              />
            </div>
            <span className={`font-serif text-2xl sm:text-3xl font-bold hidden sm:inline ${mobileMenuOpen ? 'text-primary' : scrolled ? 'text-foreground' : 'text-white'}`}>Shuri</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          <NavLink href="#about" light={!scrolled}>About</NavLink>
          <NavLink href="#services" light={!scrolled}>Services</NavLink>
          <NavLink href="#lodges" light={!scrolled}>Our Lodges</NavLink>
          <NavLink href="#testimonials" light={!scrolled}>Testimonials</NavLink>
          <NavLink href="#expertise" light={!scrolled}>Our Team</NavLink>
          <NavLink href="#resources" light={!scrolled}>Resources</NavLink>
          <NavLink href="#contact" light={!scrolled}>Contact</NavLink>
          <GetStartedButton className="whitespace-nowrap shadow-md ml-1">
            Book a Call
          </GetStartedButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative z-[60] transition-all duration-300 p-2.5 rounded-lg bg-primary shadow-md hover:shadow-lg flex items-center justify-center ${mobileMenuOpen ? 'opacity-0' : ''} ${scrolled ? 'h-11 w-11' : 'h-11 w-11'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between relative transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}>
            <span className="block h-0.5 w-full bg-white transition-all duration-300 origin-left"></span>
            <span className="block h-0.5 w-3/4 bg-white transition-all duration-300"></span>
            <span className="block h-0.5 w-1/2 bg-white transition-all duration-300 origin-right ml-auto"></span>
          </div>
        </button>
      </div>

      {/* Full-screen Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 w-screen h-screen bg-white shadow-xl transition-all duration-500 ease-in-out z-[55] ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Mobile menu header with logo */}
          <div className="border-b border-primary/20 py-4 px-4 bg-gradient-to-r from-primary/15 via-primary/5 to-white backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative h-11 w-11 mr-3 overflow-visible">
                  <div className="absolute inset-0 bg-primary/10 rounded-md blur-md transform -rotate-3 scale-110"></div>
                  <Image 
                    src="/images/logo.jpeg" 
                    alt="Shuri Logo" 
                    width={45} 
                    height={45} 
                    className="object-contain rounded-md shadow-sm relative scale-110"
                  />
                </div>
                <span className="font-serif text-2xl font-bold text-primary">Shuri</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-primary shadow-md hover:shadow-lg transition-all duration-300 h-11 w-11 flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu links */}
          <nav className="flex-1 overflow-y-auto py-4 px-4 bg-white">
            <div className="flex flex-col gap-3">
              <div className="py-1.5 px-2 font-medium text-sm uppercase tracking-wider text-primary/70 font-sans">Main Navigation</div>
              <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)} icon="info">
                About
              </MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setMobileMenuOpen(false)} icon="services">
                Services
              </MobileNavLink>
              <MobileNavLink href="#lodges" onClick={() => setMobileMenuOpen(false)} icon="home">
                Our Lodges
              </MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)} icon="testimonials">
                Testimonials
              </MobileNavLink>
              
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2"></div>
              <div className="py-1.5 px-2 font-medium text-sm uppercase tracking-wider text-primary/70 font-sans">Company</div>
              
              <MobileNavLink href="#expertise" onClick={() => setMobileMenuOpen(false)} icon="users">
                Our Team
              </MobileNavLink>
              <MobileNavLink href="#resources" onClick={() => setMobileMenuOpen(false)} icon="book">
                Resources
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)} icon="mail">
                Contact
              </MobileNavLink>
            </div>
          </nav>
          
          {/* Mobile menu footer */}
          <div className="border-t border-primary/20 p-4 bg-gradient-to-t from-primary/15 via-primary/10 to-white">
            <div className="mx-auto max-w-md">
              <p className="text-center text-primary/70 mb-3 font-medium font-sans">Ready to transform your property management?</p>
              <GetStartedButton className="w-full py-3 text-center text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
                Book a Call
              </GetStartedButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-medium transition duration-300 hover:underline underline-offset-4 decoration-2 decoration-primary/50 ${
        light 
          ? 'text-white hover:text-white/90' 
          : 'text-foreground hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
  icon,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  icon: string;
}) {
  const icons = {
    info: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    home: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    testimonials: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    users: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    book: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    mail: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group mb-1"
    >
      <div className="relative overflow-hidden rounded-xl bg-white/70 border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300">
        
        <div className="relative p-3 flex items-center gap-3">
          {/* Icon container with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transform scale-110"></div>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 shadow-inner text-primary/90 group-hover:text-primary transition-colors duration-300 border border-primary/20">
              {icons[icon as keyof typeof icons]}
            </div>
          </div>
          
          {/* Text container */}
          <div className="flex flex-col flex-1">
            <span className="text-xl font-medium text-primary inline-block transition-transform duration-300 group-hover:translate-x-1 font-serif tracking-wide">
              {children}
            </span>
            <div className="mt-1 relative h-0.5 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Right arrow indicator */}
          <div className="text-primary/40 group-hover:text-primary/70 transition-colors duration-300 transform translate-x-0 group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
