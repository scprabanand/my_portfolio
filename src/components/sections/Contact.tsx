'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    CheckCircle2, 
    ArrowRight
} from 'lucide-react';
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
                    color: focused ? "#2563EB" : "#94a3b8"
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
                className="w-full py-3 bg-transparent border-b-2 border-slate-200 outline-none focus:border-accent transition-colors duration-300 font-body text-navy"
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

                <div className="flex flex-col items-center mt-16">
                    {/* Centered Inquiry Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-2xl"
                    >
                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full bg-white border border-accent/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-xl shadow-accent/5"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="font-heading text-3xl font-bold text-navy mb-4">Thank You!</h3>
                                <p className="font-body text-slate-600 max-w-sm">Your inquiry has been received. I will get back to you as soon as possible.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 font-body font-bold text-accent hover:underline"
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
                                        className="w-full py-3 bg-transparent border-b-2 border-slate-200 outline-none focus:border-accent transition-colors duration-300 font-body text-navy resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-navy text-white font-heading font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 group shadow-lg shadow-navy/20"
                                >
                                    Submit Inquiry 
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Map removed for privacy */}
            </div>
        </section>
    );
};

export default Contact;
