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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-background/20 backdrop-blur-[2px] py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <div className="flex items-center">
            <div className={`relative h-9 w-9 sm:h-10 sm:w-10 mr-2 sm:mr-3 transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}>
              <Image 
                src="/images/logo.jpeg" 
                alt="Shuri Logo" 
                width={40} 
                height={40} 
                className="object-contain rounded-md shadow-sm"
                priority
              />
            </div>
            <span className={`font-serif text-xl sm:text-2xl font-bold hidden sm:inline ${scrolled ? 'text-foreground' : 'text-white'}`}>Shuri</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          <NavLink href="#about" light={!scrolled}>About</NavLink>
          <NavLink href="#services" light={!scrolled}>Services</NavLink>
          <NavLink href="#lodges" light={!scrolled}>Our Lodges</NavLink>
          <NavLink href="#testimonials" light={!scrolled}>Testimonials</NavLink>
          <NavLink href="#team" light={!scrolled}>Our Team</NavLink>
          <NavLink href="#resources" light={!scrolled}>Resources</NavLink>
          <NavLink href="#contact" light={!scrolled}>Contact</NavLink>
          <GetStartedButton className="whitespace-nowrap shadow-md ml-1">
            Book a Call
          </GetStartedButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-5 flex flex-col justify-between relative ${
              mobileMenuOpen ? 'transform' : ''
            }`}
          >
            <span
              className={`block h-0.5 w-full ${scrolled ? 'bg-foreground' : 'bg-white'} transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 absolute top-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full ${scrolled ? 'bg-foreground' : 'bg-white'} transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full ${scrolled ? 'bg-foreground' : 'bg-white'} transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 absolute top-2' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 absolute w-full ${
          mobileMenuOpen
            ? 'max-h-[500px] bg-background/95 backdrop-blur-sm shadow-md'
            : 'max-h-0'
        }`}
      >
        <nav className="container flex flex-col py-6 gap-5">
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </MobileNavLink>
          <MobileNavLink
            href="#lodges"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Lodges
          </MobileNavLink>
          <MobileNavLink
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </MobileNavLink>
          <MobileNavLink
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Team
          </MobileNavLink>
          <MobileNavLink
            href="#resources"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </MobileNavLink>
          <MobileNavLink
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
          <div className="mt-2">
            <GetStartedButton className="w-full py-3 text-center">
              Book a Call
            </GetStartedButton>
          </div>
        </nav>
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
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="py-2 text-lg border-b border-border/20 text-foreground hover:text-primary transition duration-300"
    >
      {children}
    </Link>
  );
}
