'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Heart, 
    ArrowUpRight
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#publications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

export const Footer = () => {
    return (
        <footer className="bg-[#0A1628] text-cream pt-20 pb-10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold opacity-30" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    
                    {/* Left Column: Brand & Social */}
                    <div className="space-y-6">
                        <h2 className="font-heading text-3xl font-bold tracking-tighter text-white">
                            Dr. Prabanand <span className="text-gold italic font-serif">S C</span>
                        </h2>
                        <p className="font-body text-slate-400 max-w-xs leading-relaxed">
                            Assistant Professor & AI Researcher dedicated to bridging academia and social-impact technology.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: FaLinkedin, link: "https://linkedin.com/in/scprabanand", color: "hover:text-[#0077b5]" },
                                { icon: FaGithub, link: "https://github.com/scprabanand", color: "hover:text-white" },
                                { icon: SiGooglescholar, link: "https://scholar.google.com/citations?user=your_id", color: "hover:text-[#4285f4]" }
                            ].map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a 
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3 }}
                                        className={`p-2 bg-white/5 border border-white/10 rounded-lg text-slate-500 transition-colors duration-300 ${social.color}`}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Quick Links */}
                    <div className="md:pl-12">
                        <h3 className="font-heading text-lg font-bold text-white mb-6 uppercase tracking-widest text-[11px]">Quick Navigation</h3>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="font-body text-slate-400 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-1 group"
                                    >
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-body text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Dr. Prabanand S C. All rights reserved.
                        <Heart size={12} className="inline-block mx-1.5 text-red-500 animate-pulse" fill="currentColor" />
                    </p>
                    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                        <span>Made with Next.js</span>
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span>TypeScript</span>
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        <span>Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
