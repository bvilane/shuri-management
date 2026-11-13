import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Eyebrow({
  children,
  className = '',
  tone = 'dark',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === 'light' ? 'text-accent' : 'text-primary'
      } ${className}`}
    >
      {children}
    </p>
  );
}

const sectionTones = {
  ivory: 'bg-background text-foreground',
  sand: 'bg-sand text-foreground',
  muted: 'bg-muted text-foreground',
  earth: 'bg-earth text-[#f3ece0]',
};

export function Section({
  children,
  tone = 'ivory',
  className = '',
  id,
  labelledBy,
}: {
  children: React.ReactNode;
  tone?: keyof typeof sectionTones;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-20 lg:py-24 ${sectionTones[tone]} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  external = false,
  tone = 'dark',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const classes = `group inline-flex min-h-11 items-center gap-1.5 font-medium underline decoration-1 underline-offset-[6px] transition-colors ${
    tone === 'light'
      ? 'text-[#f3ece0] decoration-accent/60 hover:text-accent'
      : 'text-primary decoration-primary/40 hover:text-primary-dark hover:decoration-primary'
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  external = false,
  variant = 'outline',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'primary' | 'outline' | 'outline-light';
  className?: string;
}) {
  const styles = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    'outline-light': 'border border-[#f3ece0]/60 text-[#f3ece0] hover:bg-[#f3ece0] hover:text-earth',
  };
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-[0.95rem] font-medium transition-colors ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
