'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Calendar, ShieldCheck, FileText } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const patentsData = [
  {
    title: "Firewall Integration with Real-Time Monitoring",
    applicationNo: "202441015761",
    date: "06 Mar 2024",
    status: "Filed",
    icon: ShieldCheck
  },
  {
    title: "Vision-Based Transcriber for Visually Impaired",
    applicationNo: "202241074768",
    date: "23 Dec 2022",
    status: "Filed",
    icon: FileText
  },
  {
    title: "Attendance Monitoring System with Face Recognition",
    applicationNo: "202241007691",
    date: "14 Dec 2022",
    status: "Filed",
    icon: FileText
  }
];

const PatentCard = ({ patent, index }: { patent: typeof patentsData[0], index: number }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(patent.applicationNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = patent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90, x: -50 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" as const }}
      className="min-w-[85%] md:min-w-0 flex-1 snap-center relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group perspective-1000"
    >
      {/* Patent Watermark Stamp */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.03] rotate-[-25deg] pointer-events-none select-none">
        <span className="font-heading font-black text-8xl md:text-9xl text-navy">
          PATENT
        </span>
      </div>

      <div className="relative z-10">
        {/* Status & Icon */}
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-gold/10 text-gold rounded-xl border border-gold/10 group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} />
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
                {patent.status}
            </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-navy leading-tight mb-8 group-hover:text-gold transition-colors duration-300 min-h-[4rem]">
            {patent.title}
        </h3>

        {/* Details Area */}
        <div className="space-y-4 pt-6 border-t border-slate-50">
            {/* App No with Clipboard */}
            <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Application Number</span>
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100 group-hover:border-gold/20 transition-colors duration-300">
                    <span className="font-mono text-sm font-bold text-navy">{patent.applicationNo}</span>
                    <button 
                        onClick={copyToClipboard}
                        className="p-1.5 hover:bg-white rounded-md transition-colors duration-200"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-slate-400" />}
                    </button>
                </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-slate-500">
                <Calendar size={14} className="text-gold" />
                <span className="text-sm font-semibold font-body uppercase tracking-tight">Filing Date: {patent.date}</span>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export const Patents = () => {
  return (
    <section id="patents" className="py-24 bg-[#FAF8F5]/80 relative overflow-hidden">
      
      {/* Subtle Document texturepattern (diagonal lines) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #0A1628 0px, #0A1628 1px, transparent 1px, transparent 20px)`
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeading 
          title="Patents Filed" 
          subtitle="Innovation & Intellectual Property"
          alignment="center"
        />

        <div className="flex overflow-x-auto pb-8 md:pb-0 md:flex-row gap-8 snap-x snap-mandatory hide-scrollbars mt-12">
          {patentsData.map((patent, index) => (
            <PatentCard key={patent.applicationNo} patent={patent} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Patents;
