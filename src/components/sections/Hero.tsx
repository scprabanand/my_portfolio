'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Mail, FileText, Check } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { profileData } from '@/data/profile';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleContactClick = () => {
    navigator.clipboard?.writeText(profileData.email).catch(() => {});
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, href: profileData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <FaGithub size={22} />, href: profileData.socialLinks.github, label: 'GitHub' },
    { icon: <SiGooglescholar size={20} />, href: profileData.socialLinks.scholar, label: 'Google Scholar' },
  ];

  return (
    <section id="hero" className="relative w-full flex items-center justify-center bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/5 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-accent text-xs md:text-sm font-medium tracking-wider uppercase">
              Ph.D. | AI Researcher
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="font-body text-[clamp(1.5rem,4.2vw,4rem)] font-bold text-accent mb-4 leading-tight whitespace-nowrap">
            Dr. Prabanand S C, Ph.D.
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="font-body text-xl md:text-2xl text-navy font-medium mb-6">
            Associate Professor & AI Researcher
          </motion.h2>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="font-body text-base md:text-lg text-slate/70 max-w-xl mb-8 leading-relaxed">
            12+ years shaping future engineers with expertise in AI, Deep Learning, Computer Vision & Blockchain. Turning complex research into social-impact AI solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start space-x-4 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate/60 p-2 border border-slate-200 rounded-lg hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FileText size={18} />
              View Publications
            </button>
            <a
              href={`mailto:${profileData.email}`}
              onClick={handleContactClick}
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {emailCopied ? <Check size={18} /> : <Mail size={18} />}
              {emailCopied ? 'Email Copied!' : 'Contact Me'}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative w-full md:w-2/5 flex items-center justify-center"
        >
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-xl ring-2 ring-accent/20">
            {/* Passport-style crop: inner div is taller than circle, overflow clips to face */}
            <div className="absolute inset-0 w-full" style={{ height: '280%', top: '0%' }}>
              <Image
                src="/my_portfolio/images/IMG_20260410_111837.jpg.jpeg"
                alt="Dr. Prabanand S C"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: 'center top' }}
                unoptimized={true}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center text-accent/40 font-heading bg-slate-100"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profile Photo</div>';
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
