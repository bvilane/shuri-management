'use client';

import { useLeadForm } from '@/context/LeadFormContext';

interface GetStartedButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GetStartedButton({ 
  className = '', 
  children 
}: GetStartedButtonProps) {
  const { openForm } = useLeadForm();

  return (
    <button 
      onClick={openForm}
      className={`group relative px-8 py-3 bg-primary text-white font-medium rounded-md overflow-hidden transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children || "Book a Call"}
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
    </button>
  );
} 