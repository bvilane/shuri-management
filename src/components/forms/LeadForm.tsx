'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Animation from '@/components/ui/Animation';
import Image from 'next/image';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [step, setStep] = useState(1);
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

  const router = useRouter();

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
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or a form service
    console.log('Form submitted:', formData);
    
    // Move to success screen
    setStep(5);
    
    // You could also send this data to a service like Typeform or Tally
    // Example: await fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(formData) });
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

        <div className="p-4 sm:p-6 md:p-8">
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
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center">Let's Talk Timeline</h2>
                
                <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    <label className="inline-flex items-center p-2 sm:p-3 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value="immediate"
                        checked={formData.timeline === 'immediate'}
                        onChange={handleInputChange}
                        className="mr-2 sm:mr-3 text-primary focus:ring-primary h-4 w-4"
                      />
                      <span className="text-sm sm:text-base font-medium">Ready to start immediately</span>
                    </label>
                    <label className="inline-flex items-center p-2 sm:p-3 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value="planning"
                        checked={formData.timeline === 'planning'}
                        onChange={handleInputChange}
                        className="mr-2 sm:mr-3 text-primary focus:ring-primary h-4 w-4"
                      />
                      <span className="text-sm sm:text-base font-medium">Planning ahead, just exploring</span>
                    </label>
                    <label className="inline-flex items-center p-2 sm:p-3 border border-border rounded-md hover:bg-muted/30 cursor-pointer">
                      <input
                        type="radio"
                        name="timeline"
                        value="deciding"
                        checked={formData.timeline === 'deciding'}
                        onChange={handleInputChange}
                        className="mr-2 sm:mr-3 text-primary focus:ring-primary h-4 w-4"
                      />
                      <span className="text-sm sm:text-base font-medium">Still deciding, want more info first</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4 sm:space-y-6 text-center py-6 sm:py-8">
                <div className="flex justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mt-3 sm:mt-4">
                  Thanks! We'll take it from here.
                </h2>
                
                <p className="text-sm sm:text-base text-foreground/70 max-w-md mx-auto">
                  We'll review your needs and get back to you within 24–48 hours with a tailored proposal.
                </p>
                
                <p className="text-sm sm:text-base text-foreground/70 italic mt-4 sm:mt-6">
                  P.S. If you'd rather jump on a call,{' '}
                  <a 
                    href="#" 
                    className="text-primary hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      // You would add a booking link here
                      onClose();
                      // router.push('/book-call');
                    }}
                  >
                    Book a Quick Chat
                  </a>
                </p>
                
                <button
                  onClick={onClose}
                  className="mt-4 sm:mt-6 inline-flex bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-primary/90 transition font-medium shadow-sm text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            )}

            {step < 5 && (
              <div className="mt-8 sm:mt-10 flex justify-between">
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 border border-border rounded hover:bg-card/80 transition flex items-center gap-1 text-sm sm:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white rounded hover:bg-primary/90 transition shadow-sm flex items-center gap-1 text-sm sm:text-base"
                  >
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white rounded hover:bg-primary/90 transition shadow-sm text-sm sm:text-base"
                  >
                    Submit
                  </button>
                )}
              </div>
            )}
          </Animation>
        </div>
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