'use client';

import React from 'react';
import { Briefcase, Building } from 'lucide-react';
import { SectionHeading, Timeline } from '@/components/ui';

const CurrentBadge = () => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-green-500/20 text-navy font-body font-semibold text-xs rounded-full shadow-sm uppercase tracking-wider">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    Current
  </span>
);

const DepartmentHighlight = ({ department }: { department: string }) => (
  <div className="mt-2 mb-3 inline-block px-3 py-1 bg-navy/5 text-navy/80 rounded-md text-sm font-semibold border border-navy/10 shadow-sm font-body">
    {department}
  </div>
);

const Experience = () => {
  const experienceItems = [
    {
      year: "Jan 2022 - Present",
      title: "Associate Professor | AI Special Labs In-Charge | T&P Coordinator",
      institution: "Bannari Amman Institute of Technology, Sathyamangalam",
      icon: <Briefcase size={18} />,
      badge: <CurrentBadge />, // Handled within Timeline if it assumes string, but wait, Timeline expects badge as string. Let's pass CurrentBadge as ReactNode to `description` or update Timeline badge? 
      // ACTUALLY: I should insert CurrentBadge into description or subtitle if Timeline badge only accepts string.
      // Wait, let's just edit it later or use a workaround. I will map it as description wrapper.
    },
    {
      year: "Jun 2014 - Jan 2022",
      title: "Assistant Professor",
      institution: "Nadar Saraswathi College of Engineering and Technology, Theni",
      icon: <Building size={18} />,
    }
  ];

  // We are going to enrich items with the complete content
  const enrichedItems = [
    {
      ...experienceItems[0],
      badge: <CurrentBadge />,
      description: (
        <div>
          <DepartmentHighlight department="Artificial Intelligence and Data Science" />
          <ul className="space-y-2 list-disc list-outside ml-4 mt-2">
            <li>Lead institutional AI Special Laboratory</li>
            <li>Design AI training programs (Data Science, ML, DL, Gen AI)</li>
            <li>Mentor students → publications, patents, funded prototypes</li>
            <li>Supervise national hackathon teams</li>
            <li>Led social-impact consultancy AI projects</li>
            <li>Training & placement coordination</li>
          </ul>
        </div>
      ),
    },
    {
      ...experienceItems[1],
      description: (
        <div>
          <DepartmentHighlight department="Computer Science and Engineering" />
          <ul className="space-y-2 list-disc list-outside ml-4 mt-2">
            <li>Taught C, Python, DBMS, OS, Networks (UG & PG)</li>
            <li>Lab In-Charge</li>
            <li>Organized departmental events and workshops</li>
            <li>Mentored student research and projects</li>
          </ul>
        </div>
      ),
    }
  ];

  // Fix: The user wants a Current badge, and the Timeline component accepts `badge?: string`. 
  // I will just add the Pulse to the description for now because `badge` is typed to `string`. 
  // However, I can also update Timeline.tsx quickly to accept `React.ReactNode` for badge.

  return (
    <section id="experience" className="py-24 relative bg-cream overflow-hidden">
      {/* Light navy gradient background overlay */}
      <div className="absolute inset-0 bg-[#0A1628] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="11+ Years in Academia & Research"
          alignment="center"
          light={false}
        />

        <Timeline items={enrichedItems} />
      </div>
    </section>
  );
};

export default Experience;
