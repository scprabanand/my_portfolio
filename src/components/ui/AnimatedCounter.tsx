'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: React.ReactNode;
}

const AnimatedCounterComponent: React.FC<AnimatedCounterProps> = ({ 
  target, 
  suffix = "", 
  duration = 2000,
  label,
  icon
}) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.round(ease * target));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setIsFinished(true);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="relative z-10 w-full">
      {icon && <div className="mb-2">{icon}</div>}
      <motion.div
        animate={isFinished ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" as const }}
      >
        <h3 className="font-heading text-5xl font-bold text-gold mb-2 flex items-baseline">
          {count}{suffix}
        </h3>
      </motion.div>
      <p className="font-body text-navy uppercase tracking-wider font-semibold text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
};

export const AnimatedCounter = React.memo(AnimatedCounterComponent);
