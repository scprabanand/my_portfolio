'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Filter } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading } from '@/components/ui';

const Publications = () => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference'>('All');

  const filteredPublications = profileData.publications.filter(
    pub => filter === 'All' ? true : pub.type === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="publications" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Research & Publications" 
          subtitle="Contributing cutting-edge research to high-impact SCI-indexed journals."
          alignment="center"
        />

        {/* Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-12 gap-4"
        >
          <Filter size={18} className="text-navy/50" />
          <div className="bg-white rounded-full p-1 border border-navy/10 flex shadow-sm">
            {['All', 'Journal', 'Conference'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-2 rounded-full text-sm font-body transition-all duration-300 font-medium ${
                  filter === type 
                    ? 'bg-navy text-gold shadow-md' 
                    : 'text-navy/60 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
          className="space-y-6"
        >
          <AnimatePresence>
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-navy/5 relative group hover:border-gold/30 hover:shadow-[0_10px_30px_-10px_rgba(10,22,40,0.1)] transition-all duration-300"
              >
                {/* Left Accent Bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gold rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider rounded-md font-body">
                        {pub.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate/70 text-sm font-medium font-body bg-slate-50 px-3 py-1 rounded-md">
                        <Calendar size={14} />
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold text-navy leading-tight mb-3 group-hover:text-gold transition-colors duration-300">
                      {pub.title}
                    </h3>
                    
                    <p className="font-body text-slate/80 text-base flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-medium text-navy/90">{pub.journal}</span>
                    </p>
                  </div>
                  
                  {pub.doi && (
                    <a 
                      href={`https://doi.org/${pub.doi.replace('doi: ', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center justify-center sm:self-start w-10 h-10 rounded-full bg-navy/5 text-navy hover:bg-gold hover:text-navy transition-colors duration-300"
                      aria-label="View Publication"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
