'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, MapPin, Sparkles, Mic, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const achievementsData = [
  {
    result: "Winner",
    date: "Dec 2025",
    edition: "Software Edition",
    location: "Bangalore",
    prize: "Rs. 1,50,000",
    isWinner: true
  },
  {
    result: "Winner",
    date: "Aug 2022",
    edition: "Hardware Edition",
    location: "Noida",
    prize: "Rs. 1,00,000",
    isWinner: true
  },
  {
    result: "First Runner-up",
    date: "Mar 2019",
    edition: "Software Edition",
    location: "Assam",
    isWinner: false
  },
  {
    result: "Runner-up",
    date: "Dec 2023",
    edition: "Software Edition",
    location: "Chhattisgarh",
    isWinner: false
  }
];

const guestLectures = [
  {
    topic: "Python & Its Application",
    venue: "Solamalai College of Engineering"
  },
  {
    topic: "AI-Powered Smart Contracts",
    venue: "Kamaraj College of Engineering FDP"
  }
];

// Sparkle background purely in Framer Motion for Winners
const WinnerSparkles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl opacity-40">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 top-1/2 text-gold origin-center"
        >
          <Sparkles size={16 + Math.random() * 12} />
        </motion.div>
      ))}
    </div>
  );
};

export const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-[#0A1628] to-[#1E293B] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <SectionHeading 
          title="Achievements" 
          subtitle="Smart India Hackathon Mentor & Speaker"
          alignment="center"
          light={true}
        />

        {/* Global Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-8 mb-16 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-navy/40 backdrop-blur-md border border-gold/20 px-6 py-4 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.1)]">
            <Trophy className="text-gold" size={24} />
            <div className="flex flex-wrap items-center justify-center gap-3 font-heading font-bold text-lg md:text-xl text-cream">
              <span>4x SIH Awards</span>
              <span className="text-gold/50 mx-1">|</span>
              <span className="text-gold">2 Wins</span>
              <span className="text-gold/50 mx-1">|</span>
              <span>Rs. 2,50,000+ in Prizes</span>
            </div>
          </div>
        </motion.div>

        {/* SIH Cards Carousel/Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-2 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbars"
        >
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`min-w-[85%] md:min-w-0 snap-center relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                item.isWinner ? 'border-gold/30 shadow-[0_0_30px_rgba(201,168,76,0.1)]' : 'border-white/10'
              }`}
            >
              {item.isWinner && <WinnerSparkles />}
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${item.isWinner ? 'bg-gold/10 text-gold' : 'bg-slate-300/10 text-slate-300'}`}>
                  {item.isWinner ? <Trophy size={32} /> : <Medal size={32} />}
                </div>
                {item.prize && (
                  <div className="px-4 py-1.5 bg-gradient-to-r from-gold/90 to-amber-600 text-white font-bold tracking-wider uppercase text-sm rounded-full shadow-lg">
                    {item.prize}
                  </div>
                )}
              </div>

              <div className="relative z-10">
                <h3 className={`font-heading text-3xl font-bold mb-2 ${item.isWinner ? 'text-gold' : 'text-cream'}`}>
                  {item.result}
                </h3>
                <h4 className="font-body text-xl text-white font-semibold mb-4">
                  Smart India Hackathon <span className="opacity-70 font-normal">{item.date}</span>
                </h4>
                
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 bg-white/5 px-3 py-1.5 rounded-md">
                    <Award size={14} className="text-gold" />
                    {item.edition}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 bg-white/5 px-3 py-1.5 rounded-md">
                    <MapPin size={14} className="text-gold" />
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guest Lectures Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2">Guest Lectures & Talks</h3>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full opacity-50" />
          </motion.div>

          <div className="space-y-4">
            {guestLectures.map((lecture, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="p-3 bg-gold/10 text-gold rounded-full shrink-0">
                  <Mic size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-white leading-tight">
                    {lecture.topic}
                  </h4>
                  <p className="font-body text-slate-400 text-sm mt-1">
                    Delivered at: <span className="text-cream">{lecture.venue}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
