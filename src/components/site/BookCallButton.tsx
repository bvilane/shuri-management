'use client';

import { ArrowRight } from 'lucide-react';
import { useLeadForm } from '@/context/LeadFormContext';

interface BookCallButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'light' | 'outline';
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  light: 'bg-background text-earth hover:bg-white',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
};

export default function BookCallButton({
  children = 'Book a call',
  variant = 'primary',
  className = '',
  onClick,
}: BookCallButtonProps) {
  const { openForm } = useLeadForm();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openForm();
      }}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-[0.95rem] font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
