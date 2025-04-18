'use client';

import { useState } from 'react';
import Animation from '@/components/ui/Animation';
import Image from 'next/image';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    // Step 1: Areas of help
    areas: {
      lodgeOperations: false,
      bookingSystems: false,
      staffTraining: false,
      photoVideo: false,
      socialMedia: false,
      websiteSetup: false,
      paidAds: false,
      guestExperience: false,
      monthlyStrategy: false,
      notSure: false,
    },
    // Step 2: Lodge info
    lodgeName: '',
    location: '',
    biggestChallenge: '',
    existingServices: '',
    // Step 3: Contact info
    fullName: '',
    email: '',
    whatsapp: '',
    preferredContact: 'email',
    // Step 4: Timeline
    timeline: '',
  });

  const handleAreaChange = (area: string) => {
    setFormData({
      ...formData,
      areas: {
        ...formData.areas,
        [area]: !formData.areas[area as keyof typeof formData.areas],
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    // Clear previous validation errors
    setValidationErrors([]);
    
    // Validate current step before proceeding
    let isValid = false;
    
    switch (step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      case 4:
        isValid = validateStep4();
        break;
      default:
        isValid = true;
    }
    
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    // Clear validation errors when going back
    setValidationErrors([]);
    setStep(step - 1);
  };

  // Validation functions for each step
  const validateStep1 = () => {
    // At least one area of interest should be selected
    const selectedAreas = Object.values(formData.areas).filter(Boolean);
    if (selectedAreas.length === 0) {
      setValidationErrors(['Please select at least one area you need help with']);
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const errors: string[] = [];
    if (!formData.lodgeName.trim()) {
      errors.push('Lodge Name is required');
    }
    if (!formData.location.trim()) {
      errors.push('Location is required');
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    const errors: string[] = [];
    if (!formData.fullName.trim()) {
      errors.push('Full Name is required');
    }
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (formData.preferredContact === 'whatsapp' && !formData.whatsapp.trim()) {
      errors.push('WhatsApp number is required when selected as preferred contact method');
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    if (!formData.timeline) {
      setValidationErrors(['Please select a timeline']);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    if (step === 4 && !validateStep4()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Create an AbortController to manage request timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    try {
      const response = await fetch('/api/lead-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          areasOfInterest: Object.entries(formData.areas)
            .filter(([_, value]) => value)
            .map(([key]) => key),
          lodgeName: formData.lodgeName,
          location: formData.location,
          biggestChallenge: formData.biggestChallenge,
          existingServices: formData.existingServices,
          fullName: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          preferredContact: formData.preferredContact,
          timeline: formData.timeline
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Get response as text first
      const responseText = await response.text();
      let data;
      
      try {
        // Try to parse JSON response if there is content
        if (responseText) {
          data = JSON.parse(responseText);
        } else {
          throw new Error('Empty response');
        }
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        throw new Error('Invalid server response');
      }
      
      if (!response.ok) {
        console.error('Form submission error:', data || response.statusText);
        setFormStatus('error');
        setValidationErrors([data?.error || 'There was an error submitting your form. Please try again later.']);
        return;
      }
      
      if (data.success) {
        setFormStatus('success');
        // Move to the success step
        setStep(5);
        
        // Reset form for if they open it again
        setFormData({
          areas: {
            lodgeOperations: false,
            bookingSystems: false,
            staffTraining: false,
            photoVideo: false,
            socialMedia: false,
            websiteSetup: false,
            paidAds: false,
            guestExperience: false,
            monthlyStrategy: false,
            notSure: false,
          },
          lodgeName: '',
          location: '',
          biggestChallenge: '',
          existingServices: '',
          fullName: '',
          email: '',
          whatsapp: '',
          preferredContact: 'email',
          timeline: '',
        });
      } else {
        setFormStatus('error');
        setValidationErrors([data.message || 'There was an error submitting your form. Please try again later.']);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      
      if (error.name === 'AbortError') {
        setValidationErrors(['Request timed out. Please check your internet connection and try again.']);
      } else {
        setValidationErrors(['There was an error submitting your form. Please try again later.']);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="relative bg-card/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border/20">
        {/* Background elements */}
        <div className="absolute -z-10 left-0 top-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute -z-10 right-0 bottom-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full"></div>
        
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/20">
          <div className="flex items-center">
            <div className="relative h-7 w-7 sm:h-8 sm:w-8 mr-2">
              <Image 
                src="/images/logo.jpeg" 
                alt="Shuri Logo" 
                width={32} 
                height={32} 
                className="object-contain rounded-md shadow-sm"
              />
            </div>
            <span className="font-serif text-base sm:text-lg font-bold">Shuri</span>
          </div>
          
          <button 
            onClick={onClose}
            className="text-foreground/50 hover:text-foreground bg-card/80 p-1.5 rounded-full shadow-sm hover:bg-card/90 transition-all duration-200"
            aria-label="Close form"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
          {/* Progress indicator - now positioned properly below the header */}
          {step < 5 && (
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center w-1/4 px-1 sm:px-2">
                  <div 
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 text-xs sm:text-base
                      ${i < step ? 'bg-primary text-white' : i === step ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted text-foreground/50'}`}
                  >
                    {i < step ? '✓' : i}
                  </div>
                  <div className="relative w-full h-1">
                    <div 
                      className={`absolute top-0 left-0 h-1 rounded-full transition-all duration-300 
                        ${i <= step ? 'bg-primary' : 'bg-muted'} 
                        ${i === 4 ? 'w-0' : 'w-full'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <Animation type="fade-in" key={step}>
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">What areas do you need help with?</h2>
                <p className="text-sm sm:text-base text-foreground/70 text-center">Select all that apply</p>

                <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <CheckboxItem 
                    id="lodgeOperations" 
                    checked={formData.areas.lodgeOperations}
                    onChange={() => handleAreaChange('lodgeOperations')}
                    label="Lodge Operations & Systems"
                  />
                  <CheckboxItem 
                    id="bookingSystems" 
                    checked={formData.areas.bookingSystems}
                    onChange={() => handleAreaChange('bookingSystems')}
                    label="Booking Systems & Automations"
                  />
                  <CheckboxItem 
                    id="staffTraining" 
                    checked={formData.areas.staffTraining}
                    onChange={() => handleAreaChange('staffTraining')}
                    label="Staff & Guide Training"
                  />
                  <CheckboxItem 
                    id="photoVideo" 
                    checked={formData.areas.photoVideo}
                    onChange={() => handleAreaChange('photoVideo')}
                    label="Professional Photos & Video"
                  />
                  <CheckboxItem 
                    id="socialMedia" 
                    checked={formData.areas.socialMedia}
                    onChange={() => handleAreaChange('socialMedia')}
                    label="Social Media Management"
                  />
                  <CheckboxItem 
                    id="websiteSetup" 
                    checked={formData.areas.websiteSetup}
                    onChange={() => handleAreaChange('websiteSetup')}
                    label="Website & Booking Page Setup"
                  />
                  <CheckboxItem 
                    id="paidAds" 
                    checked={formData.areas.paidAds}
                    onChange={() => handleAreaChange('paidAds')}
                    label="Paid Ads / Guest Growth"
                  />
                  <CheckboxItem 
                    id="guestExperience" 
                    checked={formData.areas.guestExperience}
                    onChange={() => handleAreaChange('guestExperience')}
                    label="Guest Experience Design"
                  />
                  <CheckboxItem 
                    id="monthlyStrategy" 
                    checked={formData.areas.monthlyStrategy}
                    onChange={() => handleAreaChange('monthlyStrategy')}
                    label="Monthly Strategy Support"
                  />
                  <CheckboxItem 
                    id="notSure" 
                    checked={formData.areas.notSure}
                    onChange={() => handleAreaChange('notSure')}
                    label="Not sure yet – I just want to chat"
                  />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">Tell us a bit about your lodge</h2>
                
                <div className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="lodgeName" className="block text-sm sm:text-base font-medium text-foreground">
                      Lodge Name
                    </label>
                    <input
                      type="text"
                      id="lodgeName"
                      name="lodgeName"
                      value={formData.lodgeName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="Your lodge name"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="location" className="block text-sm sm:text-base font-medium text-foreground">
                      Location (e.g. Eastern Cape, Kruger area, Botswana...)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="Where is your lodge located?"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="biggestChallenge" className="block text-sm sm:text-base font-medium text-foreground">
                      What's your biggest challenge right now? <span className="text-xs sm:text-sm text-foreground/60">(optional)</span>
                    </label>
                    <textarea
                      id="biggestChallenge"
                      name="biggestChallenge"
                      value={formData.biggestChallenge}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="Tell us about your current challenges..."
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="existingServices" className="block text-sm sm:text-base font-medium text-foreground">
                      Any services you already have in place? <span className="text-xs sm:text-sm text-foreground/60">(optional)</span>
                    </label>
                    <textarea
                      id="existingServices"
                      name="existingServices"
                      value={formData.existingServices}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="e.g. Website, booking system, marketing team..."
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">How can we contact you?</h2>
                
                <div className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="fullName" className="block text-sm sm:text-base font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="whatsapp" className="block text-sm sm:text-base font-medium text-foreground">
                      WhatsApp <span className="text-xs sm:text-sm text-foreground/60">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-sm sm:text-base"
                      placeholder="+27 00 000 0000"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-sm sm:text-base font-medium text-foreground">
                      Preferred Contact Method:
                    </label>
                    <div className="flex flex-col space-y-2 mt-1">
                      <label className="inline-flex items-center p-2 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm sm:text-base">Email</span>
                      </label>
                      <label className="inline-flex items-center p-2 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleInputChange}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm sm:text-base">WhatsApp</span>
                      </label>
                      <label className="inline-flex items-center p-2 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2 text-primary focus:ring-primary"
                        />
                        <span className="text-sm sm:text-base">Phone Call</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">What is your timeline?</h2>
                
                <div className="space-y-4 sm:space-y-5 mt-4 sm:mt-6">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="block text-sm sm:text-base font-medium text-foreground">
                      How soon are you looking to get started?
                    </label>
                    
                    <div className="space-y-2">
                      {["ASAP (within days)", "Within a month", "1-3 months from now", "Just researching options"].map((option) => (
                        <RadioItem 
                          key={option}
                          id={`timeline-${option}`}
                          name="timeline"
                          value={option}
                          checked={formData.timeline === option}
                          onChange={handleInputChange}
                          label={option}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Thanks! We'll take it from here.</h2>
                <p className="text-base sm:text-lg text-foreground/70 max-w-lg mx-auto">
                  We'll review your needs and get back to you within 24–48 hours with a tailored proposal.
                </p>
                <p className="text-base sm:text-lg font-medium text-primary mt-6">
                  P.S. If you'd rather jump on a call,{' '}
                  <a 
                    href="https://calendly.com/shurimanagement/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-primary/80 transition-colors"
                  >
                    Book a Quick Chat
                  </a>
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </Animation>

          {/* Error message displayed when form submission fails */}
          {formStatus === 'error' && (
            <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded dark:bg-red-950/30 dark:border-red-500/50">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-red-800 dark:text-red-300">Form submission failed</span>
              </div>
              <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                {validationErrors.join('\n')}
              </p>
            </div>
          )}

          {/* Form navigation buttons */}
          {step < 5 && (
            <div className="flex justify-between mt-8 sm:mt-10">
              <button
                type="button"
                onClick={step === 1 ? onClose : prevStep}
                className="px-4 sm:px-6 py-2 sm:py-3 border border-border rounded-md hover:bg-background transition-colors"
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </button>
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium disabled:opacity-70 flex items-center"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

interface CheckboxItemProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}

function CheckboxItem({ id, checked, onChange, label }: CheckboxItemProps) {
  return (
    <label 
      htmlFor={id} 
      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all ${
        checked 
          ? 'bg-primary/10 border border-primary/20 shadow-sm' 
          : 'bg-background hover:bg-muted/50 border border-border'
      }`}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div 
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded border ${
            checked 
              ? 'bg-primary border-primary' 
              : 'border-foreground/30 bg-background'
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className={`text-sm sm:text-base ${checked ? 'font-medium' : 'font-normal'}`}>{label}</span>
    </label>
  );
}

interface RadioItemProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

function RadioItem({ id, name, value, checked, onChange, label }: RadioItemProps) {
  return (
    <label 
      htmlFor={id} 
      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all ${
        checked 
          ? 'bg-primary/10 border border-primary/20 shadow-sm' 
          : 'bg-background hover:bg-muted/50 border border-border'
      }`}
    >
      <div className="relative">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div 
          className={`w-4 h-4 sm:w-5 sm:h-5 rounded border ${
            checked 
              ? 'bg-primary border-primary' 
              : 'border-foreground/30 bg-background'
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className={`text-sm sm:text-base ${checked ? 'font-medium' : 'font-normal'}`}>{label}</span>
    </label>
  );
} 