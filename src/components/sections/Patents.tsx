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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
      className="min-w-[85%] md:min-w-0 flex-1 snap-center relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
    >
      <div>
        {/* Status & Icon */}
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-accent/10 text-accent rounded-xl border border-accent/10">
                <Icon size={32} />
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
                {patent.status}
            </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-navy leading-tight mb-8 min-h-[4rem]">
            {patent.title}
        </h3>

        {/* Details Area */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
            {/* App No with Clipboard */}
            <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Application Number</span>
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
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
                <Calendar size={14} className="text-accent" />
                <span className="text-sm font-semibold font-body uppercase tracking-tight">Filing Date: {patent.date}</span>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export const Patents = () => {
  return (
    <section id="patents" className="py-24 bg-slate-50 relative overflow-hidden">
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
