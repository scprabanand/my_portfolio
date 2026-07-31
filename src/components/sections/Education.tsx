'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Building2, BookText, ChevronDown } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading, Timeline } from '@/components/ui';

const ThesisDetail = ({ thesis }: { thesis: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-4 w-full">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md transition-colors duration-300 w-full md:w-auto"
      >
        <BookText size={16} />
        <span className="font-body font-semibold text-sm">Ph.D. Thesis Detail</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-300 ml-auto ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg text-left">
              <p className="font-body text-navy/80 italic text-sm md:text-base leading-relaxed">
                &quot;{thesis.replace('Thesis: ', '').replace(/'/g, "")}&quot;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Education = () => {
  // Map profileData to TimelineItems
  const educationItems = profileData.education.map((edu) => {
    // Add custom icons per degree type
    let Icon = Building2;
    if (edu.degree.includes('Ph.D')) Icon = GraduationCap;
    else if (edu.degree.includes('M.Tech')) Icon = BookText;

    return {
      year: edu.year || "N/A",
      title: edu.degree,
      institution: edu.institution,
      icon: <Icon size={18} />,
      badge: edu.score ? `Score: ${edu.score}` : undefined,
      description: edu.details ? <ThesisDetail thesis={edu.details} /> : undefined
    };
  });

  return (
    <section id="education" className="py-24 relative bg-white overflow-hidden">
      {/* Very faint background geometric element */}
      <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-50/50  pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="Academic Journey & Foundational Qualifications"
          alignment="center"
          light={false}
        />

        <Timeline items={educationItems} />
      </div>
    </section>
  );
};

export default Education;
