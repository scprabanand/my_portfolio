'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Languages, 
    Send, 
    CheckCircle2, 
    ArrowRight,
    Linkedin,
    Github,
    GraduationCap
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { SectionHeading } from '@/components/ui';

const FloatingInput = ({ label, name, type = "text", required = true }: { label: string, name: string, type?: string, required?: boolean }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    const inputId = `contact-${name}`;

    return (
        <div className="relative mb-6">
            <motion.label
                htmlFor={inputId}
                initial={false}
                animate={{
                    y: (focused || value) ? -28 : 0,
                    scale: (focused || value) ? 0.8 : 1,
                    color: focused ? "#C9A84C" : "#94a3b8"
                }}
                className={`absolute left-0 top-3 pointer-events-none font-body transition-all duration-200`}
            >
                {label}
            </motion.label>
            <input
                id={inputId}
                type={type}
                name={name}
                required={required}
                aria-required={required}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                className="w-full py-3 bg-transparent border-b-2 border-slate-200 outline-none focus:border-gold transition-colors duration-300 font-body text-navy"
            />
        </div>
    );
};

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here we simulate form submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-[#FAF8F5] to-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <SectionHeading 
                    title="Get In Touch" 
                    subtitle="Let's Collaborate on Research or Academic Projects"
                    alignment="center"
                />

                <div className="flex flex-col lg:flex-row gap-16 mt-16">
                    {/* Left Column: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-10"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: Mail, label: "Email", value: "scprabanand@gmail.com", link: "mailto:scprabanand@gmail.com" },
                                { icon: Phone, label: "Phone", value: "+91 9791456452", link: "tel:+919791456452" },
                                { icon: MapPin, label: "Address", value: "4/288, Alagar Singam Patti, Dindigul - 624004" },
                                { icon: Languages, label: "Languages", value: "English, Tamil" }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2.5 bg-gold/10 text-gold rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                <Icon size={20} />
                                            </div>
                                            <span className="font-heading font-black text-xs uppercase tracking-widest text-slate-400">{item.label}</span>
                                        </div>
                                        {item.link ? (
                                            <a href={item.link} className="font-body text-navy hover:text-gold font-bold transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-body text-navy font-bold">{item.value}</p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <h4 className="font-heading font-bold text-navy mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: FaLinkedin, link: "https://linkedin.com/in/scprabanand", color: "hover:bg-[#0077b5]" },
                                    { icon: FaGithub, link: "https://github.com/scprabanand", color: "hover:bg-[#333]" },
                                    { icon: SiGooglescholar, link: "https://scholar.google.com/citations?user=your_id", color: "hover:bg-[#4285f4]" }
                                ].map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <a 
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 hover:text-white ${social.color}`}
                                        >
                                            <Icon size={24} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full bg-white border border-gold/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-xl shadow-gold/5"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="font-heading text-3xl font-bold text-navy mb-4">Thank You!</h3>
                                <p className="font-body text-slate-600 max-w-sm">Your message has been received. I will get back to you as soon as possible.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 font-body font-bold text-gold hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form 
                                onSubmit={handleSubmit}
                                className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100"
                            >
                                <FloatingInput label="Your Name" name="name" />
                                <FloatingInput label="Email Address" name="email" type="email" />
                                <FloatingInput label="Subject" name="subject" />
                                
                                <div className="relative mb-10">
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Your Message..."
                                        rows={4}
                                        className="w-full py-3 bg-transparent border-b-2 border-slate-200 outline-none focus:border-gold transition-colors duration-300 font-body text-navy resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-navy text-white font-heading font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gold transition-all duration-300 group shadow-lg shadow-navy/20"
                                >
                                    Send Message 
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Google Maps Embed */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 border-4 border-white shadow-2xl rounded-3xl overflow-hidden h-[400px] w-full"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d125585.50157962804!2d77.92556550000002!3d10.366472000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b000a6e87f8674d%3A0x6bba462e7f33d026!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712822452331!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
