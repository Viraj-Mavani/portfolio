import type { Metadata } from "next"
import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About | VM Portfolio",
  description: "Detailed background, education, philosophy, and journey of Viraj Mavani.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}