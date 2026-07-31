'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Presentation, Book, Award } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading, AnimatedCounter } from '@/components/ui';

import { ChevronDown, ChevronUp } from 'lucide-react';

type FilterType = 'All' | 'Journal' | 'Book Chapter';

const getPublisherBadge = (journal: string) => {
  const source = journal.toLowerCase();
  if (source.includes('nature')) return { name: 'Nature', color: 'bg-green-100 text-green-800 border-green-200' };
  if (source.includes('hindawi')) return { name: 'Hindawi', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
  if (source.includes('ieee')) return { name: 'IEEE', color: 'bg-blue-100 text-blue-800 border-blue-200' };
  if (source.includes('springer')) return { name: 'Springer', color: 'bg-orange-100 text-orange-800 border-orange-200' };
  if (source.includes('ijca') || source.includes('ijrter') || source.includes('ijser') || source.includes('ijirset') || source.includes('ijaer')) 
    return { name: 'Int. Journal', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' };
  
  return { name: 'Peer Reviewed', color: 'bg-slate-100 text-slate-800 border-slate-200' };
};

const getIcon = (type: string) => {
  if (type === 'Journal') return <BookOpen size={18} />;
  if (type === 'Conference') return <Presentation size={18} />;
  return <Book size={18} />;
};

const renderAuthors = () => {
  // Since authors are not in the current strict data structure, we assume Prabanand is the primary author
  return (
    <div className="font-body text-sm text-slate/70 mb-2">
      <span className="font-semibold text-accent">S.C. Prabanand</span> et al.
    </div>
  );
};

export const Publications = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const [showConferences, setShowConferences] = useState(false);

  const mainstreamPublications = profileData.publications.filter(pub => pub.type !== 'Conference');
  const conferencePublications = profileData.publications.filter(pub => pub.type === 'Conference');

  const filteredPublications = mainstreamPublications.filter(
    pub => filter === 'All' ? true : pub.type === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle Paper Texture via CSS linear gradient */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #0A1628 25%, transparent 25%, transparent 75%, #0A1628 75%, #0A1628), repeating-linear-gradient(45deg, #0A1628 25%, #FAF8F5 25%, #FAF8F5 75%, #0A1628 75%, #0A1628)`,
          backgroundPosition: '0 0, 10px 10px',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading 
          title="Research & Publications" 
          subtitle="Contributing to Knowledge"
          alignment="center"
        />

        {/* Counter & Filter Header Control Box */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm"
        >
          {/* Animated Counter */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Award className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-navy flex items-baseline">
                <AnimatedCounter target={mainstreamPublications.length} duration={1500} label="" />
              </h3>
              <p className="font-body text-xs text-slate-500 uppercase tracking-widest font-semibold mt-0">Total Publications</p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-full p-1.5 border border-slate-200 flex flex-wrap justify-center gap-1 shadow-sm">
            {(['All', 'Journal', 'Book Chapter'] as FilterType[]).map((type) => {
              const isActive = filter === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`relative px-5 py-2 rounded-full text-sm font-body font-semibold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub) => {
              const publisherBadge = getPublisherBadge(pub.journal);
              
              return (
                <motion.div
                  key={pub.title}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm relative flex flex-col h-full overflow-hidden group transition-all duration-300"
                >
                  {/* Decorative Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Header Row: Icon & Year */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-navy font-semibold text-xs uppercase tracking-wider rounded-md">
                      {getIcon(pub.type)}
                      {pub.type}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm">
                      <Calendar size={12} />
                      {pub.year}
                    </div>
                  </div>

                  {/* Authors (Fake/Placeholder dynamic) */}
                  {renderAuthors()}

                  {/* Title */}
                  <div className="mb-4 flex-1">
                    {pub.doi ? (
                      <a 
                        href={pub.doi.includes('http') ? pub.doi : `https://doi.org/${pub.doi.replace('doi: ', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group-hover:text-accent transition-colors duration-300"
                      >
                        <h3 className="font-heading text-xl font-bold text-navy leading-snug line-clamp-3">
                          {pub.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="font-heading text-xl font-bold text-navy leading-snug line-clamp-3 group-hover:text-accent transition-colors duration-300">
                        {pub.title}
                      </h3>
                    )}
                  </div>

                  {/* Footer Box: Journal Info & Badges */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="font-body text-slate-600 text-sm italic font-medium line-clamp-1">
                        {pub.journal}
                      </span>
                      <div className="flex gap-2">
                        <span className={`px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded border ${publisherBadge.color}`}>
                          {publisherBadge.name}
                        </span>
                      </div>
                    </div>

                    {pub.doi && (
                      <a 
                        href={pub.doi.includes('http') ? pub.doi : `https://doi.org/${pub.doi.replace('doi: ', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-accent text-navy hover:text-white rounded-lg border border-slate-200 transition-all duration-300 font-semibold text-xs mt-2 sm:mt-0 self-start sm:self-center"
                        aria-label="View exact DOI URL"
                      >
                        DOI <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredPublications.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="w-full py-12 text-center"
          >
            <p className="font-body text-slate-500 font-medium">No publications found for this category.</p>
          </motion.div>
        )}

      </div>

      {/* Conference Presentations Sub-section */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10 mt-16 border-t border-slate-200 pt-12">
        <div className="flex justify-center">
          <button
            onClick={() => setShowConferences(!showConferences)}
            className="flex items-center gap-3 px-6 py-3 bg-navy text-white rounded-full font-heading font-bold text-lg hover:bg-accent transition-colors duration-300 shadow-md"
          >
            <Presentation size={20} />
            {showConferences ? 'Hide Conference Presentations' : 'Show Conference Presentations'}
            {showConferences ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {showConferences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-navy text-white font-body text-sm uppercase tracking-wider">
                        <th className="p-4 rounded-tl-2xl">Title</th>
                        <th className="p-4">Conference Name</th>
                        <th className="p-4 text-center rounded-tr-2xl">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {conferencePublications.map((pub, idx) => (
                        <tr 
                          key={idx} 
                          className={`hover:bg-slate-50 transition-colors duration-150 ${idx % 2 === 0 ? 'bg-white' : 'bg-cream/30'}`}
                        >
                          <td className="p-4 font-heading font-semibold text-navy text-base md:text-lg">
                            {pub.title}
                          </td>
                          <td className="p-4 font-body text-slate-700 text-sm">
                            {pub.journal}
                          </td>
                          <td className="p-4 font-body text-accent font-bold text-center whitespace-nowrap">
                            {pub.year}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Publications;
