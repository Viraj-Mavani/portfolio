import { TopNav } from "@/components/top-nav"
import { HeroBento } from "@/components/hero-bento"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ServicesStrip } from "@/components/services-strip"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroBento />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ServicesStrip />
      </main>
      <Footer />
    </div>
  )
}
