"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, Mail, Github, Linkedin, MessageSquare } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About & Education", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Get in Touch", href: "#contact" },
]

const socialLinks = [
  { label: "Email", href: "mailto:vm@example.com", icon: Mail },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Discord", href: "#", icon: MessageSquare },
]

export function TopNav() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left box - Logo / Name */}
          <div className="flex items-center rounded-md border border-border bg-card/80 px-4 py-2 backdrop-blur-xl">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary font-mono text-xs font-bold text-primary-foreground">
                VM
              </span>
              <span className="hidden font-mono text-xs tracking-wider text-foreground sm:block">
                viraj.dev
              </span>
            </a>
          </div>

          {/* Right box - Theme Toggle + Drawer Button */}
          <div className="flex items-center gap-1 rounded-md border border-border bg-card/80 px-2 py-1.5 backdrop-blur-xl">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <div className="mx-1 h-5 w-px bg-border" aria-hidden="true" />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-border bg-card w-80 overflow-y-auto"
              >
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle className="flex items-center gap-2 font-mono text-sm tracking-wider text-foreground">
                    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                      VM
                    </span>
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                {/* Section 1: Explore */}
                <div className="py-6">
                  <span className="mb-4 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Explore
                  </span>
                  <nav className="flex flex-col gap-1" role="navigation" aria-label="Page sections">
                    {exploreLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-sm px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <span className="text-[10px] text-primary">{">"}</span>
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="h-px bg-border" aria-hidden="true" />

                {/* Section 2: Connect with me */}
                <div className="py-6">
                  <span className="mb-4 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    Connect with me
                  </span>
                  <nav className="flex flex-col gap-1" role="navigation" aria-label="Social links">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-sm px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <link.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Bottom status */}
                <div className="mt-auto border-t border-border pt-4">
                  <div className="flex items-center gap-2 px-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Available for Freelance
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}