import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LanguagesEducationSection from "@/components/LanguagesEducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FloatingNav from "@/components/FloatingNav";
import CreativeFooter from "@/components/CreativeFooter";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <FloatingNav />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="languages">
        <LanguagesEducationSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <CreativeFooter />
    </main>
  );
};

export default Index;
