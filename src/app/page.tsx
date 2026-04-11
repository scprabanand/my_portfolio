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
      <Skills />
      <Contact />
      
      {/* Footer or other sections could go here */}
      <div className="h-[20vh]" /> {/* Spacer at the bottom */}
    </main>
  );
}
