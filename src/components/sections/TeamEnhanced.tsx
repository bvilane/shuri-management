'use client';

import Image from 'next/image';
import Animation from '@/components/ui/Animation';

export default function TeamEnhanced() {
  // This would normally come from a CMS or data source
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      role: 'Lodge Operations Director',
      experience: 'Former Singita Operations Manager',
      imagePlaceholder: true,
    },
    {
      id: 2,
      name: 'Team Member 2',
      role: 'Marketing Specialist',
      experience: 'Ex-&Beyond Marketing Lead',
      imagePlaceholder: true,
    },
    {
      id: 3,
      name: 'Team Member 3',
      role: 'Guest Experience Designer',
      experience: 'Wilderness Safaris Consultant',
      imagePlaceholder: true,
    },
    {
      id: 4,
      name: 'Team Member 4',
      role: 'Conservation Advisor',
      experience: 'Wildlife Conservation Expert',
      imagePlaceholder: true,
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 -rotate-12 rounded-tl-3xl"></div>

      <div className="container relative z-10">
        <Animation type="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Team
          </h2>
          <p className="mt-4 text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Meet the Team
          </p>
        </Animation>

        <div className="mt-16 max-w-5xl mx-auto">
          <Animation type="fade-up" delay={100}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                150+ Years of Combined Lodge & Travel Experience
              </h3>
            </div>
          </Animation>

          <Animation type="fade-up" delay={200}>
            <div className="space-y-8">
              <p className="text-lg">
                Our team and advisor network includes lodge managers, guides,
                hospitality consultants, and brand strategists who've helped
                shape some of the most iconic safari experiences on the
                continent.
              </p>

              <p className="text-lg">
                We've led everything from guest operations and marketing to
                staff training, HR systems, guiding standards, and lodge
                redesigns, working with brands such as:
              </p>

              <div className="py-4 px-6 bg-card rounded-lg border border-border">
                <p className="text-lg font-serif italic text-center">
                  Singita, Dulini, &Beyond, Wilderness Safaris, MORE Family
                  Collection – across the Sabi Sands and throughout Africa's
                  premier safari destinations.
                </p>
              </div>

              <p className="text-lg">
                Now we bring that knowledge to lodges like yours so you don't
                just keep up, you set the new standard.
              </p>
            </div>
          </Animation>

          {/* Team members grid */}
          <div className="mt-16">
            <Animation type="fade-up" delay={300}>
              <h3 className="text-2xl font-serif font-bold mb-8 text-center">
                Our Core Team
              </h3>
            </Animation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Animation
                  key={member.id}
                  type="fade-up"
                  delay={400 + index * 100}
                >
                  <TeamMember
                    name={member.name}
                    role={member.role}
                    experience={member.experience}
                  />
                </Animation>
              ))}
            </div>
          </div>

          <Animation type="fade-up" delay={800}>
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </Animation>
        </div>
      </div>

      {/* Safari texture overlay */}
      <div className="absolute inset-0 texture-bg opacity-5 mix-blend-overlay pointer-events-none"></div>
    </section>
  );
}

interface TeamMemberProps {
  name: string;
  role: string;
  experience: string;
}

function TeamMember({ name, role, experience }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
        {/* Image placeholder */}
        <div className="aspect-square relative bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/20"></div>
          <div className="flex items-center justify-center h-full text-foreground/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        <div className="p-4">
          <h4 className="font-serif text-lg font-semibold">{name}</h4>
          <p className="text-foreground/80 text-sm">{role}</p>
          <p className="text-foreground/60 text-sm mt-2 italic">{experience}</p>
        </div>
      </div>
    </div>
  );
}
