import { ContextSwitcherNav } from "@/components/context-switcher-nav"
import { HeroBento } from "@/components/hero-bento"
import { ServicesStrip } from "@/components/services-strip"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <ContextSwitcherNav />
      <main>
        <HeroBento />
        <ServicesStrip />
      </main>
      <Footer />
    </div>
  )
}
