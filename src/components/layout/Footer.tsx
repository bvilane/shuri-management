import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-muted/80 pt-12 sm:pt-16 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 top-0 w-1/4 h-1/4 bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <div className="relative h-12 sm:h-14 w-auto">
                  <Image 
                    src="/images/smg.png" 
                    alt="SMG Logo" 
                    width={140} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <p className="mt-3 sm:mt-4 max-w-sm text-foreground/80 text-sm sm:text-base">
              "It takes a village to run a legendary lodge. Welcome to that village."
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#lodges">Our Lodges</FooterLink>
              {/* <FooterLink href="#testimonials">Testimonials</FooterLink> */}
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#resources">Resources</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-3 sm:mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-2 sm:space-y-3 text-foreground/80 text-sm sm:text-base">
              <p>
                <a
                  href="mailto:info@shurimanagement.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">info@shurimanagement.com</span>
                </a>
              </p>
              <p>
                <a
                  href="tel:+27635237168"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +27 63 523 7168
                </a>
              </p>
            </address>

            <h3 className="font-serif text-lg font-semibold mt-6 sm:mt-8 mb-3 sm:mb-4">
              Social Media
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61574743155351"
                label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/company/shuri-management-group/"
                label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/shurimanagement/"
                label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-foreground/70 text-center md:text-left">
            &copy; 2025 Shuri Management Group (Pty) Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
    >
      {children}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
