'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LeadFormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <LeadFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (context === undefined) {
    throw new Error('useLeadForm must be used within a LeadFormProvider');
  }
  return context;
} 