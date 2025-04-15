'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Animation from '@/components/ui/Animation';
import Button from '@/components/ui/Button';

export default function TeamEnhanced() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const teamMembers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      experience: '15+ years in hospitality management',
      bio: 'Former GM of award-winning safari lodges across East Africa. Sarah founded Shuri with a vision to transform how lodges operate and market themselves.',
      expertise: ['Lodge Operations', 'Strategic Planning', 'Revenue Growth'],
      image: '/images/guest-1.jpg'
    },
    {
      id: '2',
      name: 'Daniel Mbeki',
      role: 'Head of Operations',
      experience: '12+ years in hospitality operations',
      bio: 'Daniel has managed operations for luxury properties across Southern Africa, specializing in staff training and operational excellence.',
      expertise: ['Staff Management', 'Quality Control', 'Process Optimization'],
      image: '/images/guest-2.jpg'
    },
    {
      id: '3',
      name: 'Olivia Chen',
      role: 'Marketing Director',
      experience: '10+ years in travel marketing',
      bio: 'Olivia brings experience from leading digital agencies, having worked with hospitality brands across four continents.',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Guest Acquisition'],
      image: '/images/guest-3.jpg'
    },
    {
      id: '4',
      name: 'Thomas Kariuki',
      role: 'Technology Lead',
      experience: '8+ years in tech solutions',
      bio: 'Thomas specializes in developing tech solutions tailored for remote lodge environments with unique operational challenges.',
      expertise: ['Booking Systems', 'Property Management Software', 'Remote Tech'],
      image: '/images/guest-4.jpg'
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold relative inline-block">
              <span className="relative z-10">Meet Our Team</span>
              <span className="absolute -bottom-3 left-0 right-0 h-3 bg-primary/20 transform -rotate-1 z-0"></span>
          </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Our diverse team of experts brings decades of experience in lodge management, 
              hospitality operations, marketing, and technology to elevate your property.
          </p>
          </div>
        </Animation>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Animation key={member.id} type="fade-up" delay={index * 100}>
              <div 
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl bg-card ${
                  selectedMember === member.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMember(member.id === selectedMember ? null : member.id)}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
            </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                  <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                  <p className="text-white/90 font-medium">{member.role}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    selectedMember === member.id ? 'max-h-80 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white/80 text-sm mb-3">{member.experience}</p>
                    <p className="text-white/90 mb-4">{member.bio}</p>

                    <div className="space-y-2">
                      <h4 className="text-white/90 text-sm font-semibold">Expertise:</h4>
                      <ul className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <li key={i} className="px-2 py-1 bg-white/20 rounded-md text-xs backdrop-blur-sm">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                </Animation>
              ))}
        </div>

        <Animation type="fade-up" delay={400}>
          <div className="mt-20 text-center">
            <div className="inline-block p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/10 max-w-3xl">
              <h3 className="text-2xl font-serif font-bold">Join Our Team of Experts</h3>
              <p className="mt-3 text-foreground/80">
                We're always looking for passionate individuals with experience in lodge management,
                hospitality operations, digital marketing, and hospitality tech.
              </p>
              <div className="mt-6">
                <Link href="/careers">
                  <Button variant="primary" size="lg">
                    View Openings
                  </Button>
                </Link>
              </div>
            </div>
            </div>
          </Animation>
      </div>
    </section>
  );
}
