'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  institution: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll simply mapped to the container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate line height dynamically based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full py-12 mx-auto max-w-5xl">
      {/* 
        Vertical Line (Static Background)
        Mobile: left 24px
        Desktop: center 
      */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 transform md:-translate-x-1/2" />
      
      {/* 
        Animated Vertical Line 
      */}
      <motion.div 
        className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent transform md:-translate-x-1/2 origin-top"
        style={{ scaleY }}
      />

      <div className="flex flex-col gap-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row w-full group mb-8 md:mb-0">
              
              {/* Timeline Node */}
              <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-white border-4 border-accent z-10 ml-[-10px] md:ml-0" />

              {/* Left Side (Empty on Odd, Card on Even) */}
              <div className={`hidden md:flex w-full md:w-1/2 px-12 md:px-0 ${!isEven ? 'order-1 md:order-none' : ''}`}>
                {isEven && (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" as const }}
                    className="relative w-full md:pr-12 md:text-right"
                  >
                    <TimelineCard item={item} isEven={isEven} />
                  </motion.div>
                )}
              </div>

              {/* Right Side (Card on Odd, Empty on Even) */}
              <div className={`flex w-full md:w-1/2 pl-16 pr-6 md:px-0 ${isEven ? 'md:order-last' : 'order-2 md:order-last'}`}>
                {/* Mobile always shows the card here */}
                {(!isEven || true) && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" as const }}
                    className={`relative w-full ${!isEven ? 'md:pl-12 md:text-left' : 'md:hidden'} text-left mt-0`}
                  >
                    <TimelineCard item={item} isEven={!isEven ? false : true /* Mobile renders as left-aligned */} mobileOverride={isEven} />
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TimelineCard = ({ item, isEven, mobileOverride = false }: { item: TimelineItem, isEven: boolean, mobileOverride?: boolean }) => {
  const alignRight = isEven && !mobileOverride;
  return (
    <div className={`p-6 bg-white border-l-4 border-accent shadow-sm rounded-xl border-t border-r border-b border-navy/5 relative group-hover:shadow-md transition-shadow duration-300 ${alignRight ? 'md:border-l-0 md:border-r-4' : ''}`}>
      {/* Header Area */}
      <div className={`flex flex-col gap-3 mb-4 ${alignRight ? 'md:items-end' : 'md:items-start'} items-start`}>
        <div className="inline-flex px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-md font-body uppercase tracking-wider shadow-sm border border-accent/20">
          {item.year}
        </div>
        
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-navy leading-snug">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="font-body text-navy/80 font-medium text-sm mt-1">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>

      <h4 className={`font-body text-slate/70 font-medium text-base mb-4 flex gap-2 ${alignRight ? 'md:justify-end md:flex-row-reverse' : ''} items-start`}>
        {item.icon && <span className="text-accent mt-0.5">{item.icon}</span>}
        {item.institution}
      </h4>

      {/* Description */}
      {item.description && (
        <div className="font-body text-navy/70 text-sm leading-relaxed mb-4 text-left">
          {Array.isArray(item.description) ? (
            <ul className="space-y-2">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <div className="w-full">{item.description}</div>
          )}
        </div>
      )}

      {/* Badge */}
      {item.badge && (
        <div className={`mt-4 ${alignRight ? 'md:flex md:justify-end' : ''}`}>
          <span className="inline-flex px-3 py-1 bg-navy text-cream font-body font-semibold text-xs rounded-full shadow-sm">
            {item.badge}
          </span>
        </div>
      )}
    </div>
  );
};

