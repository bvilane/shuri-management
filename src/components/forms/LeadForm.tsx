'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Animation from '@/components/ui/Animation';

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
    // For now, we'll just simulate a submission
    console.log('Form submitted:', formData);
    
    // Move to success screen
    setStep(5);
    
    // You could also send this data to a service like Typeform or Tally
    // Example: await fetch('/api/submit-form', { method: 'POST', body: JSON.stringify(formData) });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-card rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-foreground/50 hover:text-foreground bg-card p-1 rounded-full shadow-sm"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Progress indicator */}
          <div className="flex justify-between mb-10 mt-3 pr-12">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${
                  i <= step ? 'bg-primary' : 'bg-muted'
                } ${i < 4 ? 'mr-1' : ''} ${i === 1 ? 'w-[23%]' : 'w-[24%]'}`}
              />
            ))}
          </div>

          <Animation type="fade-in" key={step}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Step 1: What areas do you need help with?</h2>
                <p className="text-foreground/70">Select all that apply</p>

                <div className="space-y-4 mt-6">
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
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Step 2: Tell us a bit about your lodge</h2>
                
                <div className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <label htmlFor="lodgeName" className="block font-medium">
                      Lodge Name
                    </label>
                    <input
                      type="text"
                      id="lodgeName"
                      name="lodgeName"
                      value={formData.lodgeName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="location" className="block font-medium">
                      Location (e.g. Eastern Cape, Kruger area, Botswana...)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="biggestChallenge" className="block font-medium">
                      What's your biggest challenge right now? (optional)
                    </label>
                    <textarea
                      id="biggestChallenge"
                      name="biggestChallenge"
                      value={formData.biggestChallenge}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="existingServices" className="block font-medium">
                      Any services you already have in place? (optional)
                    </label>
                    <textarea
                      id="existingServices"
                      name="existingServices"
                      value={formData.existingServices}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Step 3: How can we contact you?</h2>
                
                <div className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block font-medium">
                      WhatsApp (optional)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-medium">
                      Preferred Contact Method:
                    </label>
                    <div className="flex flex-col space-y-2 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="ml-2">Email</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="whatsapp"
                          checked={formData.preferredContact === 'whatsapp'}
                          onChange={handleInputChange}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="ml-2">WhatsApp</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="ml-2">Phone Call</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">Step 4: Let's Talk Timeline</h2>
                
                <div className="space-y-4 mt-6">
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="timeline"
                        value="immediate"
                        checked={formData.timeline === 'immediate'}
                        onChange={handleInputChange}
                        className="form-radio text-primary focus:ring-primary"
                      />
                      <span className="ml-2">Ready to start immediately</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="timeline"
                        value="planning"
                        checked={formData.timeline === 'planning'}
                        onChange={handleInputChange}
                        className="form-radio text-primary focus:ring-primary"
                      />
                      <span className="ml-2">Planning ahead, just exploring</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="timeline"
                        value="deciding"
                        checked={formData.timeline === 'deciding'}
                        onChange={handleInputChange}
                        className="form-radio text-primary focus:ring-primary"
                      />
                      <span className="ml-2">Still deciding, want more info first</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Thanks! We'll take it from here.</h2>
                <p className="text-foreground/70 mb-8 max-w-md mx-auto">
                  We'll review your needs and get back to you within 24–48 hours with a tailored proposal.
                </p>
                <p className="text-foreground/70 italic">
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
              </div>
            )}

            {/* Navigation buttons */}
            {step < 5 && (
              <div className="flex justify-between mt-10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-border rounded-md hover:bg-muted transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div> // Empty div to maintain spacing
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            )}

            {step === 5 && (
              <div className="mt-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-muted hover:bg-muted/80 rounded-md transition-colors"
                >
                  Close
                </button>
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
    <label className="flex items-start cursor-pointer group">
      <div className="flex items-center h-6">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 border-2 border-border rounded bg-background focus:ring-primary text-primary"
        />
      </div>
      <div className="ml-3">
        <span className="text-foreground group-hover:text-foreground/80 transition-colors">
          {label}
        </span>
      </div>
    </label>
  );
} 