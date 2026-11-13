import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import {
  EMAIL,
  LEGAL_NAME,
  OFFICES,
  PHONES,
  REG_NUMBER,
  SOCIALS,
  TAGLINE,
} from '@/lib/site';

const socialIcons = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
} as const;

const serviceLinks = [
  { href: '/lodge-management', label: 'Lodge Management' },
  { href: '/lodge-management#marketing', label: 'Lodge Marketing' },
  { href: '/reserve-management', label: 'Reserve Management' },
  { href: '/safari-tech-consulting', label: 'Safari Tech Consulting' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy policy' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-earth text-[#e9dfcf]">
      <div className="container py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex min-h-11 items-center" aria-label="Shuri Management Group home">
              <Image
                src="/images/smg.png"
                alt="Shuri Management Group"
                width={1250}
                height={377}
                sizes="160px"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs font-serif text-lg leading-snug text-[#f3ece0]">{TAGLINE}</p>
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {SOCIALS.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} (opens in a new tab)`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <FooterColumn title="What we do" links={serviceLinks} className="lg:col-span-2" />
          <FooterColumn title="Company" links={companyLinks} className="lg:col-span-2" />

          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">Contact</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center hover:text-accent">
                  {EMAIL}
                </a>
              </li>
              {PHONES.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="inline-flex min-h-11 items-center hover:text-accent">
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {OFFICES.map((office) => (
                <address key={office.name} className="not-italic text-sm leading-relaxed">
                  <span className="block font-medium text-[#f3ece0]">{office.name}</span>
                  {office.lines.map((line) => (
                    <span key={line} className="block text-[#e9dfcf]/80">
                      {line}
                    </span>
                  ))}
                </address>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-[#e9dfcf]/70 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {LEGAL_NAME}. All rights reserved.
          </p>
          <p>Registration number {REG_NUMBER}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className = '',
}: {
  title: string;
  links: { href: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</h2>
      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-flex min-h-11 items-center hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
