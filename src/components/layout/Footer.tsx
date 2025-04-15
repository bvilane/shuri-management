import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-bold">
              Shuri
            </Link>
            <p className="mt-4 max-w-sm text-foreground/80">
              "It takes a village to run a legendary lodge. Welcome to that village."
            </p>
            <div className="mt-6 flex gap-4">
              <SocialIcon
                href="https://www.instagram.com/shurimanagement/"
                label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#why-shuri">Why Shuri</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#process">How It Works</FooterLink>
              <FooterLink href="#resources">Resources</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <address className="not-italic space-y-3 text-foreground/80">
              <p>
                <a
                  href="mailto:info@shurimanagement.com"
                  className="hover:text-primary transition-colors"
                >
                  info@shurimanagement.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+27635237168"
                  className="hover:text-primary transition-colors"
                >
                  +27 63 523 7168
                </a>
              </p>
            </address>

            <div className="mt-6">
              <h3 className="font-serif text-lg font-semibold mb-2">
                Follow Us
              </h3>
              <p className="text-foreground/80">
                <a
                  href="https://www.instagram.com/shurimanagement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @shurimanagement
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Shuri Safari Lodge Management. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/70">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
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
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
        className="text-foreground/80 hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
