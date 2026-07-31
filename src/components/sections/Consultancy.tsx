'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const consultancyProjects = [
  {
    id: "01",
    name: "SecureFestOps",
    tagline: "ML-driven Web Platform for Festival Vehicle Flow Management",
    client: "Office of the Superintendent of Police (Cyber Crime Branch), Thoothukudi",
    clientIcon: Landmark,
    description: "Developed a comprehensive real-time traffic and crowd management platform for major events, utilizing machine learning to predict and manage vehicle flows.",
    value: "Rs. 50,000",
    tech: ["Machine Learning", "Vehicle Flow Management", "Real-time Analytics", "Web Platform"],
    color: "accent"
  },
  {
    id: "02",
    name: "AI-based People Counting System",
    tagline: "Distributed Intelligence Footfall Analytics for Agri Tech 2024",
    client: "CODISSIA, Coimbatore",
    clientIcon: Building2,
    description: "Built a high-accuracy footfall counting system utilizing three camera feeds. Features real-time updates to local and cloud storage with integrated analytics and automated reporting.",
    value: "Rs. 1,00,000",
    tech: ["Computer Vision", "AI Integration", "Multi-camera Analytics", "Cloud Synchronization"],
    color: "navy"
  }
];

const ProjectCard = ({ project }: { project: typeof consultancyProjects[0] }) => {
  const Icon = project.clientIcon;

  return (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="group mb-12 last:mb-0"
    >
      <div
        className="relative bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm overflow-hidden"
      >
        {/* Subtle Decorative Background Number */}
        <span className="absolute -right-4 -top-8 text-[120px] md:text-[200px] font-heading font-black text-slate-100/50 pointer-events-none select-none">
            {project.id}
        </span>

        {/* Feature Layout */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            
          {/* Content Area */}
          <div className="flex-1 order-2 md:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6">
                 <div className="px-5 py-2 bg-navy text-white font-bold text-sm uppercase tracking-widest rounded-full">
                    {project.value}
                </div>
            </div>

            <h3 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4 group-hover:text-accent transition-colors duration-300">
                {project.name}
            </h3>
            
            <p className="font-body text-xl font-semibold text-slate-700 mb-6 italic">
                {project.tagline}
            </p>

            <div className="flex items-start gap-3 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Icon className="text-accent mt-1 shrink-0" size={24} />
                <span className="font-body font-bold text-navy text-lg leading-snug">
                    {project.client}
                </span>
            </div>

            <p className="font-body text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tag) => (
                <span 
                    key={tag} 
                    className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg border border-slate-200 group-hover:border-accent/30 transition-colors duration-300"
                >
                    {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Icon/Decorative Area */}
          <div className="w-full md:w-auto order-1 md:order-2 self-stretch flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-accent/5 flex items-center justify-center border border-accent/10">
                {project.id === "01" ? (
                    <ShieldCheck className="text-accent" size={64} />
                ) : (
                    <TrendingUp className="text-accent" size={64} />
                )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const Consultancy = () => {
  return (
    <section id="consultancy" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <SectionHeading
          title="Consultancy Services"
          subtitle="Real-World AI Solutions & Social Impact"
          alignment="center"
        />

        <div className="mt-16 space-y-12">
          {consultancyProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Consultancy;
