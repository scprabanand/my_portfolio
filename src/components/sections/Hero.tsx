'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { profileData } from '@/data/profile';

const Hero = () => {
  const [init, setInit] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, href: profileData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <FaGithub size={22} />, href: profileData.socialLinks.github, label: 'GitHub' },
    { icon: <SiGooglescholar size={20} />, href: profileData.socialLinks.scholar, label: 'Google Scholar' },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0A1628] to-slate">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.3 } },
              },
            },
            particles: {
              color: { value: "#C9A84C" },
              links: {
                color: "#C9A84C",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: { enable: true },
                value: isMobile ? 20 : 40,
              },
              opacity: { value: 0.4 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 pt-20 pb-10 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-3/5 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(201,168,76,0.1)]">
            <span className="text-gold text-xs md:text-sm font-medium tracking-wider uppercase">
              Ph.D. Scholar | AI Researcher
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight">
            Prabanand <span className="bg-gradient-to-r from-gold via-[#E5C76B] to-gold bg-clip-text text-transparent italic">S C</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="font-body text-xl md:text-2xl text-gold/90 font-medium mb-6">
            Assistant Professor & AI Researcher
          </motion.h2>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="font-body text-base md:text-lg text-cream/70 max-w-xl mb-8 leading-relaxed">
            11+ years shaping future engineers with expertise in AI, Deep Learning, Computer Vision & Blockchain. Turning complex research into social-impact AI solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start space-x-6 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#C9A84C" }}
                className="text-cream/60 p-2 border border-cream/10 rounded-lg hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button 
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-[#E5C76B] transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2 group"
            >
              <FileText size={18} />
              View Publications
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="relative w-full md:w-2/5 flex items-center justify-center"
        >
          {/* Decorative Geometric Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-15 overflow-hidden">
             <div className="w-full h-full border-[1px] border-gold rounded-full animate-[spin_20s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Double Rings */}
            <div className="absolute inset-0 -m-4 border-2 border-dashed border-gold/40 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute inset-0 -m-2 border-2 border-gold rounded-full" />
            
            {/* Image Box */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden bg-slate border-4 border-navy shadow-2xl flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
               
               {/* Passport-style crop: inner div is taller than circle, overflow clips to face */}
               <div className="absolute inset-0 w-full" style={{ height: '280%', top: '0%' }}>
                  <Image
                    src="/my_portfolio/images/IMG_20260410_111837.jpg.jpeg"
                    alt="Dr. Prabanand S C"
                    fill
                    priority
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ objectPosition: 'center top' }}
                    unoptimized={true}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center text-gold/40 font-heading bg-navy"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profile Photo</div>';
                      }
                    }}
                  />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
      >
        <span className="text-[10px] uppercase tracking-widest font-body">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>

      {/* Bottom Wave/Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent opacity-100 z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
