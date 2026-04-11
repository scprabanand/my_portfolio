'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileCheck } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading } from '@/components/ui';

const Patents = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="patents" className="py-24 bg-navy text-cream relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ backgroundImage: 'linear-gradient(#C9A84C 2px, transparent 2px), linear-gradient(90deg, #C9A84C 2px, transparent 2px)', backgroundSize: '100px 100px' }} 
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Patents" 
          subtitle="Innovative solutions legally recognized and published."
          alignment="center"
          light={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {profileData.patents.map((patent, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate border border-white/10 rounded-2xl p-8 flex flex-col h-full relative group transition-all duration-300"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                <Lightbulb size={60} className="text-gold rotate-12" />
              </div>

              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-xl border border-gold/20 mb-6 shrink-0 relative z-10">
                <FileCheck className="text-gold" size={24} />
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-6 flex-1 leading-snug relative z-10 pr-4">
                {patent.title}
              </h3>

              <div className="border-t border-white/10 pt-5 mt-auto relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block font-body text-xs text-cream/50 uppercase tracking-wider mb-1">App No.</span>
                    <span className="font-body text-sm font-semibold text-gold font-mono">{patent.applicationNo}</span>
                  </div>
                  <div>
                    <span className="block font-body text-xs text-cream/50 uppercase tracking-wider mb-1">Date</span>
                    <span className="font-body text-sm font-semibold text-white">{patent.date}</span>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-md text-xs font-semibold text-cream/80 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {patent.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Patents;
