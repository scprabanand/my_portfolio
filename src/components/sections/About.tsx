'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, FileBadge, Code } from 'lucide-react';
import { profileData } from '@/data/profile';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stats = [
    {
      icon: <Code className="text-gold" size={32} />,
      title: "11+ Years",
      subtitle: "Teaching & Research",
    },
    {
      icon: <BookOpen className="text-gold" size={32} />,
      title: `${profileData.publications.length} Publications`,
      subtitle: "Journals & Papers",
    },
    {
      icon: <FileBadge className="text-gold" size={32} />,
      title: `${profileData.patents.length} Patents`,
      subtitle: "Published",
    },
    {
      icon: <Award className="text-gold" size={32} />,
      title: "SIH Winner",
      subtitle: "Multiple Editions",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 transform -skew-x-12 translate-x-32" />
      <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full border border-gold/20" />
      <div className="absolute -left-10 bottom-20 w-48 h-48 rounded-full border border-navy/5" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-gold" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                About Me
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="prose prose-lg text-slate mb-8 max-w-none">
              <p className="font-body text-lg leading-relaxed text-navy/80">
                {profileData.about}
              </p>
              <p className="font-body text-lg leading-relaxed text-navy/80 mt-4">
                My academic journey is rooted in a deep curiosity for how emerging technologies like <strong className="text-navy font-semibold">Artificial Intelligence</strong>, <strong className="text-navy font-semibold">Computer Vision</strong>, and <strong className="text-navy font-semibold">Blockchain</strong> can solve real-world problems. Whether I'm designing a decentralized security architecture or leading a hackathon team to victory, my focus remains on bridging the gap between rigorous academic research and practical, impactful applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 font-heading font-bold text-navy hover:text-gold transition-colors duration-300"
              >
                Explore My Journey 
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(10, 22, 40, 0.1)" }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-navy/5 flex flex-col items-start gap-4 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full transform origin-top-right group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="p-3 bg-cream rounded-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-navy mb-1">{stat.title}</h3>
                    <p className="font-body text-slate text-sm uppercase tracking-wider font-semibold">{stat.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
