'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone } from 'lucide-react';
import BookCallButton from '@/components/site/BookCallButton';
import { NAV, EMAIL, PHONES } from '@/lib/site';

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so navigating closes it
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === 'function' ? next(open) : next;
    setOpenedOn(value ? pathname : null);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenedOn(null);
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background transition-shadow ${
        scrolled ? 'border-border shadow-[0_1px_12px_rgba(46,34,26,0.08)]' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:bg-earth focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="flex min-h-11 shrink-0 items-center" aria-label="Shuri Management Group home">
          <Image
            src="/images/smg.png"
            alt="Shuri Management Group"
            width={1250}
            height={377}
            priority
            sizes="140px"
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex min-h-11 items-center border-b-2 text-[0.93rem] font-medium transition-colors ${
                      active
                        ? 'border-primary text-primary'
                        : 'border-transparent text-foreground/80 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <BookCallButton className="hidden sm:inline-flex">Book a call</BookCallButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-earth hover:bg-sand xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-background lg:top-[4.5rem] xl:hidden"
      >
        <nav aria-label="Mobile" className="container py-6">
          <ul className="divide-y divide-border border-y border-border">
            <li>
              <Link
                href="/"
                aria-current={pathname === '/' ? 'page' : undefined}
                className={`flex min-h-14 items-center font-serif text-xl ${
                  pathname === '/' ? 'text-primary' : 'text-earth'
                }`}
              >
                Home
              </Link>
            </li>
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-14 items-center font-serif text-xl ${
                      active ? 'text-primary' : 'text-earth'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <BookCallButton className="mt-8 w-full" onClick={() => setOpen(false)}>
            Book a call
          </BookCallButton>
          <div className="mt-8 space-y-1 text-foreground/80">
            <a href={`mailto:${EMAIL}`} className="flex min-h-11 items-center gap-3">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              {EMAIL}
            </a>
            <a href={PHONES[0].href} className="flex min-h-11 items-center gap-3">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {PHONES[0].display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
