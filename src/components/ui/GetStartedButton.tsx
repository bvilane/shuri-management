'use client';

import { useLeadForm } from '@/context/LeadFormContext';

interface GetStartedButtonProps {
  className?: string;
}

export default function GetStartedButton({ className = '' }: GetStartedButtonProps) {
  const { openForm } = useLeadForm();

  return (
    <button 
      onClick={openForm}
      className={`px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium ${className}`}
    >
      Get Started
    </button>
  );
} 