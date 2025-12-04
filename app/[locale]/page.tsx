import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import { ColleaguesSection } from "@/components/colleagues-section"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ColleaguesSection />
        <ContactSection />
      </main>
    </>
  )
}
