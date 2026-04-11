'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

interface Certification {
  name: string;
  institution: string;
  date: string;
  year: string;
  type: string;
}

const certificationsData: Certification[] = [
  { name: "MongoDB Python Developer Path", institution: "MongoDB", date: "Jan 2026", year: "2026", type: "MongoDB" },
  { name: "Building with the Claude API", institution: "Anthropic Education", date: "Dec 2025", year: "2025", type: "Anthropic" },
  { name: "Foundation Introduction to LangChain (Python)", institution: "LangChain Academy", date: "Dec 2025", year: "2025", type: "LangChain" },
  { name: "Oracle Cloud Infrastructure 2025 AI Foundations", institution: "Oracle", date: "Aug 2025", year: "2025", type: "Oracle" },
  { name: "Fundamentals of MCP", institution: "Hugging Face", date: "Jun 2025", year: "2025", type: "Hugging Face" },
  { name: "AI Agents Fundamentals", institution: "Hugging Face", date: "Feb 2025", year: "2025", type: "Hugging Face" },
  { name: "Introduction to Transformer-Based NLP", institution: "NVIDIA DLI", date: "Jan 2025", year: "2025", type: "NVIDIA" },
  { name: "Building Video AI Applications at Edge on Jetson Nano", institution: "NVIDIA DLI", date: "Feb 2023", year: "2023", type: "NVIDIA" },
  { name: "Building Real-Time Video AI Applications", institution: "NVIDIA DLI", date: "Feb 2023", year: "2023", type: "NVIDIA" },
  { name: "Getting Started with AI on Jetson Nano", institution: "NVIDIA DLI", date: "Dec 2022", year: "2022", type: "NVIDIA" },
  { name: "Data Engineering on Microsoft Azure", institution: "RPS Consulting", date: "May 2022", year: "2022", type: "RPS Consulting" },
  { name: "DBMS", institution: "NPTEL IIT Kharagpur", date: "Mar 2018", year: "2018", type: "NPTEL" },
  { name: "Database Administration Oracle 10g", institution: "NIIT", date: "Jun 2012", year: "2012", type: "NIIT" },
];

const getColors = (type: string) => {
  switch (type) {
    case 'MongoDB': return { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-700', icon: 'bg-green-100' };
    case 'Anthropic': return { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-700', icon: 'bg-orange-100' };
    case 'LangChain': return { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-700', icon: 'bg-teal-100' };
    case 'Oracle': return { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-700', icon: 'bg-red-100' };
    case 'Hugging Face': return { border: 'border-yellow-500', bg: 'bg-yellow-50', text: 'text-yellow-700', icon: 'bg-yellow-100' };
    case 'NVIDIA': return { border: 'border-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-700', icon: 'bg-emerald-100' };
    case 'NPTEL': return { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', icon: 'bg-blue-100' };
    case 'NIIT': return { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-700', icon: 'bg-purple-100' };
    case 'RPS Consulting': return { border: 'border-slate-500', bg: 'bg-slate-50', text: 'text-slate-700', icon: 'bg-slate-100' };
    default: return { border: 'border-slate-300', bg: 'bg-white', text: 'text-slate-600', icon: 'bg-slate-50' };
  }
};

export const Certifications = () => {
  const [activeYear, setActiveYear] = useState<string>('All');
  
  const years = ['All', ...Array.from(new Set(certificationsData.map(c => c.year))).sort((a, b) => Number(b) - Number(a))];

  const filteredData = activeYear === 'All' 
    ? certificationsData 
    : certificationsData.filter(c => c.year === activeYear);

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
        
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeading 
          title="Technical Certifications" 
          subtitle="Continuous Learning & Specialized Training"
          alignment="center"
        />

        {/* Year Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {years.map((year) => (
                <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-4 py-1.5 rounded-full text-sm font-body font-semibold transition-all duration-300 ${
                        activeYear === year 
                        ? 'bg-gold text-white shadow-md' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                >
                    {year}
                </button>
            ))}
        </div>

        {/* Certifications Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode="popLayout">
                {filteredData.map((cert) => {
                    const colors = getColors(cert.type);
                    return (
                        <motion.div
                            key={cert.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" as const }}
                            whileHover={{ y: -5 }}
                            className={`relative bg-white border-l-4 ${colors.border} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group`}
                        >
                            <div className="flex flex-col h-full">
                                
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${colors.icon} ${colors.text} flex items-center justify-center font-heading font-black text-xl shadow-inner`}>
                                        {cert.institution.charAt(0)}
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        <Calendar size={12} />
                                        {cert.date}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-heading text-lg font-bold text-navy leading-tight mb-2 group-hover:text-gold transition-colors duration-300">
                                        {cert.name}
                                    </h3>
                                    <p className="font-body text-sm font-semibold text-slate-500">
                                        {cert.institution}
                                    </p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[10px] uppercase font-black text-slate-300 tracking-widest">Verified Badge</span>
                                    <Award size={16} className="text-gold" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
            <div className="w-full text-center py-20 text-slate-400 font-body italic">
                No certifications found for this selection.
            </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
