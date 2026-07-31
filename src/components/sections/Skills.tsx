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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-navy text-sm font-body font-semibold cursor-default transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {name}
    </motion.div>
  );
};

export const Skills = () => {

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <SectionHeading
          title="Technical Arsenal"
          subtitle="Areas of Expertise & Professional Frameworks"
          alignment="center"
        />

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 text-accent rounded-2xl">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy tracking-tight">
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
        <div className="mt-24 pt-16 border-t border-slate-200">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Professional Memberships</h3>
                <div className="w-12 h-1 bg-accent mx-auto rounded-full opacity-30" />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
                {memberships.map((member, i) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-slate-200 px-8 py-6 rounded-2xl flex flex-col items-center gap-2 shadow-sm"
                    >
                        <Award className={member.logoColor} size={32} />
                        <div className="text-center">
                            <h4 className="font-heading font-bold text-navy">{member.name}</h4>
                            <p className="text-accent font-mono text-sm font-bold">{member.id}</p>
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
