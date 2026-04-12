'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Brain, 
    Code2, 
    Cpu, 
    Database, 
    Cloud, 
    Award
} from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "Agentic AI"]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C", "JavaScript", "Solidity", "TypeScript"]
  },
  {
    title: "Frameworks & Tools",
    icon: Cpu,
    skills: ["TensorFlow", "PyTorch", "OpenCV", "LangChain", "Hugging Face", "NVIDIA Jetson"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "Oracle", "MySQL", "PostgreSQL", "NoSQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Oracle Cloud", "Microsoft Azure", "Docker", "Git", "Next.js"]
  }
];

const memberships = [
  {
    name: "ISTE Life Member",
    id: "LM 109360",
    org: "Indian Society for Technical Education",
    logoColor: "text-blue-400"
  },
  {
    name: "IAENG Member",
    id: "271620",
    org: "International Association of Engineers",
    logoColor: "text-red-400"
  }
];

const SkillTag = ({ name, delay }: { name: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay, 
        type: "spring", 
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: "0 0 15px rgba(201,168,76,0.3)",
        borderColor: "#C9A84C"
      }}
      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cream text-sm font-body font-semibold cursor-default transition-colors duration-300 hover:text-gold"
    >
      {name}
    </motion.div>
  );
};

export const Skills = () => {

  return (
    <section id="skills" className="py-24 bg-[#0A1628] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy/50 border border-gold/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Areas of Expertise & Professional Frameworks"
          alignment="center"
          light={true}
        />

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gold/10 text-gold rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-cream tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillTag 
                        key={skill} 
                        name={skill} 
                        delay={(catIdx * 0.1) + (skillIdx * 0.05)} 
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Memberships Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h3 className="font-heading text-2xl font-bold text-cream mb-4">Professional Memberships</h3>
                <div className="w-12 h-1 bg-gold mx-auto rounded-full opacity-30" />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
                {memberships.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 px-8 py-6 rounded-2xl flex flex-col items-center gap-2 hover:bg-white/10 transition-colors duration-300"
                    >
                        <Award className={member.logoColor} size={32} />
                        <div className="text-center">
                            <h4 className="font-heading font-bold text-cream">{member.name}</h4>
                            <p className="text-gold font-mono text-sm font-bold">{member.id}</p>
                            <p className="font-body text-[10px] text-slate-500 uppercase tracking-widest mt-1">{member.org}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
