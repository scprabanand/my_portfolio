import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const About = dynamic(() => import('@/components/sections').then(mod => mod.About), { loading: () => <SectionSkeleton /> });
const Education = dynamic(() => import('@/components/sections').then(mod => mod.Education), { loading: () => <SectionSkeleton /> });
const Experience = dynamic(() => import('@/components/sections').then(mod => mod.Experience), { loading: () => <SectionSkeleton /> });
const Publications = dynamic(() => import('@/components/sections').then(mod => mod.Publications), { loading: () => <SectionSkeleton /> });
const Achievements = dynamic(() => import('@/components/sections').then(mod => mod.Achievements), { loading: () => <SectionSkeleton /> });
const Consultancy = dynamic(() => import('@/components/sections').then(mod => mod.Consultancy), { loading: () => <SectionSkeleton /> });
const Certifications = dynamic(() => import('@/components/sections').then(mod => mod.Certifications), { loading: () => <SectionSkeleton /> });
const Patents = dynamic(() => import('@/components/sections').then(mod => mod.Patents), { loading: () => <SectionSkeleton /> });
const Skills = dynamic(() => import('@/components/sections').then(mod => mod.Skills), { loading: () => <SectionSkeleton /> });

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Publications />
      <Patents />
      <Achievements />
      <Consultancy />
      <Certifications />
      <Skills />

      {/* Footer is rendered globally in layout.tsx */}
    </main>
  );
}
