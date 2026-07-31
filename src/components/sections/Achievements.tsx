'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, MapPin, Mic, Award } from 'lucide-react';
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

export const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="achievements" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <SectionHeading
          title="Achievements"
          subtitle="Smart India Hackathon Mentor & Speaker"
          alignment="center"
        />

        {/* Global Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mt-8 mb-16 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-50 border border-slate-200 px-6 py-4 rounded-full">
            <Trophy className="text-accent" size={24} />
            <div className="flex flex-wrap items-center justify-center gap-3 font-heading font-bold text-lg md:text-xl text-navy">
              <span>4x SIH Awards</span>
              <span className="text-slate-300 mx-1">|</span>
              <span className="text-accent">2 Wins</span>
              <span className="text-slate-300 mx-1">|</span>
              <span>Rs. 2,50,000+ in Prizes</span>
            </div>
          </div>
        </motion.div>

        {/* SIH Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${item.isWinner ? 'bg-accent/10 text-accent' : 'bg-slate-100 text-slate-400'}`}>
                  {item.isWinner ? <Trophy size={32} /> : <Medal size={32} />}
                </div>
                {item.prize && (
                  <div className="px-4 py-1.5 bg-accent text-white font-bold tracking-wider uppercase text-sm rounded-full">
                    {item.prize}
                  </div>
                )}
              </div>

              <div>
                <h3 className={`font-heading text-3xl font-bold mb-2 ${item.isWinner ? 'text-accent' : 'text-navy'}`}>
                  {item.result}
                </h3>
                <h4 className="font-body text-xl text-navy font-semibold mb-4">
                  Smart India Hackathon <span className="opacity-60 font-normal">{item.date}</span>
                </h4>

                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-md">
                    <Award size={14} className="text-accent" />
                    {item.edition}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-md">
                    <MapPin size={14} className="text-accent" />
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
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">Guest Lectures & Talks</h3>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full opacity-50" />
          </motion.div>

          <div className="space-y-4">
            {guestLectures.map((lecture, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-5 rounded-xl"
              >
                <div className="p-3 bg-accent/10 text-accent rounded-full shrink-0">
                  <Mic size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg md:text-xl font-bold text-navy leading-tight">
                    {lecture.topic}
                  </h4>
                  <p className="font-body text-slate-600 text-sm mt-1">
                    Delivered at: <span className="text-accent font-semibold">{lecture.venue}</span>
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
