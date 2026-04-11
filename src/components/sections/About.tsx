'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, FileBadge, Code, ChevronRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { SectionHeading, AnimatedCounter } from '@/components/ui';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const areasOfInterest = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "Agentic AI",
    "Blockchain"
  ];

  const stats = [
    {
      icon: <Code className="text-gold/50 absolute top-4 right-4" size={40} />,
      value: 11,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <BookOpen className="text-gold/50 absolute top-4 right-4" size={40} />,
      value: profileData.publications.length,
      label: "Publications",
    },
    {
      icon: <Award className="text-gold/50 absolute top-4 right-4" size={40} />,
      value: 4,
      label: "SIH Awards",
    },
    {
      icon: <FileBadge className="text-gold/50 absolute top-4 right-4" size={40} />,
      value: profileData.patents.length,
      label: "Patents Filed",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 transform -skew-x-12 translate-x-32 pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full border border-gold/20 pointer-events-none" />
      <div className="absolute -left-10 bottom-20 w-48 h-48 rounded-full border border-navy/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeading 
          title="About Me" 
          subtitle="Dedicated Educator & AI Researcher"
          alignment="center" 
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start"
        >
          {/* Left Column (55%): Summary & Interests */}
          <div className="w-full lg:w-[55%]">
            <motion.div variants={itemVariants} className="prose prose-lg text-slate mb-10 max-w-none">
              <p className="font-body text-lg leading-relaxed text-navy/80 text-justify">
                <span className="float-left text-6xl font-heading font-bold text-gold leading-none mr-3 mt-1 pointer-events-none">
                  {profileData.about.charAt(0)}
                </span>
                {profileData.about.slice(1)}
              </p>
              <p className="font-body text-lg leading-relaxed text-navy/80 text-justify mt-4">
                My academic journey is rooted in a deep curiosity for how emerging technologies can elegantly solve real-world problems. Whether I&apos;m designing a decentralized security architecture, optimizing neural networks, or leading a hackathon team to national victory, my primary focus remains on bridging the gap between rigorous academic research and practical, high-impact societal applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4 border-b border-gold/20 pb-2 inline-block">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {areasOfInterest.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white text-navy font-body font-medium text-sm rounded-full border border-navy/10 shadow-sm hover:border-gold hover:text-gold hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (45%): Stats Grid */}
          <div className="w-full lg:w-[45%]">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(10, 22, 40, 0.15)" }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-navy/5 flex flex-col justify-center items-start text-left transition-all duration-300 relative overflow-hidden group h-full cursor-default"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] transform origin-top-right group-hover:scale-125 transition-transform duration-500" />
                  
                  <AnimatedCounter 
                    target={stat.value} 
                    duration={2500} 
                    suffix={stat.suffix} 
                    label={stat.label}
                    icon={stat.icon}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Banner Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 w-full rounded-2xl bg-navy p-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent shadow-xl"
        >
          <div className="bg-navy rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 backdrop-blur-sm relative overflow-hidden">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />

            <div className="relative z-10 w-full">
              <h4 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2 flex flex-col sm:flex-row sm:items-center sm:gap-3 justify-center">
                {profileData.currentRole.split('|')[0].trim()}
                <span className="hidden sm:inline text-gold">|</span>
                <span className="text-gold text-xl md:text-2xl italic font-normal mt-1 sm:mt-0">{profileData.institution.split(',')[0]}</span>
              </h4>
            </div>
            
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 shrink-0 p-3 bg-gold/10 hover:bg-gold text-gold hover:text-navy rounded-full transition-colors duration-300 group"
              aria-label="Scroll to experience"
            >
              <ChevronRight size={24} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
