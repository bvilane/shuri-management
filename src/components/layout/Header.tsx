'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
          ? 'bg-card/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[1px] py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-white text-shadow-sm">
          Shuri
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#lodges">Our Lodges</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition duration-300 shadow-md">
            Book a Call
          </button>
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
              className={`block h-0.5 w-full bg-white shadow-sm transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 absolute top-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white shadow-sm transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white shadow-sm transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 absolute top-2' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'max-h-screen bg-card/95 backdrop-blur-md'
            : 'max-h-0'
        }`}
      >
        <nav className="container flex flex-col py-4 gap-4">
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
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </MobileNavLink>
          <button className="mt-2 py-3 bg-primary text-white rounded hover:bg-primary/90 transition duration-300 shadow-md">
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/85 hover:text-white font-medium text-shadow-sm transition duration-300 hover:underline underline-offset-4 decoration-2 decoration-primary/50"
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
      className="py-2 text-lg border-b border-border/30 text-foreground/90 hover:text-foreground transition duration-300"
    >
      {children}
    </Link>
  );
}
