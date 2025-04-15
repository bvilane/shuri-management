'use client';

import LeadForm from './LeadForm';
import { useLeadForm } from '@/context/LeadFormContext';

export default function LeadFormManager() {
  const { isFormOpen, closeForm } = useLeadForm();

  return <LeadForm isOpen={isFormOpen} onClose={closeForm} />;
} 