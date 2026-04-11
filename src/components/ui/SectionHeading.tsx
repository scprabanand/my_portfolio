'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean; // Added light mode option for dark backgrounds
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  const isCenter = alignment === 'center';
  const textColor = light ? 'text-cream' : 'text-navy';
  const subtitleColor = light ? 'text-cream/60' : 'text-slate/60';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`font-heading text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      
      {/* Decorative Underline */}
      <div className={`relative flex items-center ${isCenter ? 'justify-center mx-auto' : 'justify-start'} mb-6`}>
        <div className="w-12 h-[2px] bg-gold" />
        <div className="w-3 h-3 bg-gold transform rotate-45 border-2 border-cream shrink-0" style={{ margin: '0 -2px' }} />
        <div className="w-12 h-[2px] bg-gold" />
      </div>

      {subtitle && (
        <p className={`font-body text-lg ${subtitleColor} max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
