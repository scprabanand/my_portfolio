import { 
  Hero, 
  About, 
  Education, 
  Experience, 
  Publications, 
  Achievements, 
  Consultancy, 
  Certifications, 
  Patents, 
  Skills, 
  Contact 
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
      <Contact />
      
      {/* Footer is rendered globally in layout.tsx */}
    </main>
  );
}
