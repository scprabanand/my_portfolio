'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { profileData } from '@/data/profile';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24 bg-slate text-cream relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold" />
              <Briefcase className="text-gold" size={28} />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Professional Experience
            </h2>
          </div>
          <p className="font-body text-cream/60 max-w-md md:text-right">
             11+ years of academic excellence and leadership in engineering education.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-12"
        >
          {profileData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-navy p-8 md:p-10 rounded-3xl border border-white/5 relative group transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)] hover:border-gold/20 flex flex-col lg:flex-row gap-8"
            >
              {/* Left Side: Role & Meta */}
              <div className="lg:w-1/3 shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gold mb-4 leading-tight">
                  {exp.role.split(' | ').map((part, i) => (
                    <span key={i} className="block">
                      {part}
                      {i < exp.role.split(' | ').length - 1 && <span className="text-white/20 px-2 hidden lg:inline">|</span>}
                    </span>
                  ))}
                </h3>
                
                <h4 className="font-body text-lg text-white font-medium mb-6">
                  {exp.institution}
                </h4>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate rounded-full border border-white/10 text-cream/80 font-body text-sm font-medium">
                  <Calendar size={16} className="text-gold" />
                  {exp.period}
                </div>
              </div>

              {/* Right Side: Description Points */}
              <div className="lg:w-2/3">
                <ul className="space-y-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-gold/10 rounded-full shrink-0 group-hover:bg-gold/20 transition-colors">
                        <ChevronRight size={14} className="text-gold" />
                      </div>
                      <span className="font-body text-base text-cream/70 leading-relaxed group-hover:text-cream/90 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
