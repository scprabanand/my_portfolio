'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Target } from 'lucide-react';
import { profileData } from '@/data/profile';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="py-24 relative bg-navy text-cream">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gold/10 rounded-full mb-4 border border-gold/20">
            <GraduationCap className="text-gold" size={28} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {profileData.education.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Mobile uses left line, Desktop uses alternating or standard cards. Let's use a nice card layout) */}
              <div className="bg-slate p-8 rounded-2xl border border-white/5 shadow-2xl hover:border-gold/30 transition-colors duration-300 relative group overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-gold mb-2">
                       {edu.degree}
                    </h3>
                    <h4 className="font-body text-xl text-white font-medium mb-4 flex items-center gap-2">
                      <MapPin size={18} className="text-cream/50" />
                      {edu.institution}
                    </h4>
                    
                    {edu.details && (
                      <p className="font-body text-cream/80 bg-navy/50 p-4 rounded-lg border-l-2 border-gold flex items-start gap-3 mt-4 text-base italic">
                        <Target size={20} className="text-gold mt-1 shrink-0" />
                        "{edu.details.replace('Thesis: ', '')}"
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                    <div className="flex items-center gap-2 px-4 py-2 bg-navy rounded-full border border-gold/20 text-gold font-semibold font-body text-sm">
                      <Calendar size={16} />
                      {edu.year}
                    </div>
                    {edu.score && (
                      <div className="px-4 py-2 bg-white/5 rounded-full text-cream/70 font-semibold font-body text-sm">
                        Score: <span className="text-white">{edu.score}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
