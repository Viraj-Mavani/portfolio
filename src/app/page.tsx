import { TopNav } from "@/components/top-nav"
import { ContextSwitcherNav } from "@/components/context-switcher-nav"
import { HeroBento } from "@/components/hero-bento"
import { ServicesStrip } from "@/components/services-strip"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ContextSwitcherNav />
      <main>
        <HeroBento />
        <ServicesStrip />
      </main>
      <Footer />
    </div>
  )
}
