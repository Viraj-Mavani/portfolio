import { Github, Linkedin, Mail } from "lucide-react"
import { DiscordIcon } from "./discord-icon"

export const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Viraj-Mavani" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/viraj-mavani" },
  { icon: DiscordIcon, label: "Discord", href: "https://discord.com/users/atom1zer" },
  { icon: Mail, label: "Email", href: "mailto:vmavani2@uwo.ca" },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              connect
            </span>
            <p className="text-sm text-muted-foreground">
              Open to collaborations and interesting projects.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <link.icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <span className="font-mono text-[10px] text-muted-foreground">
            // {new Date().getFullYear()} Viraj Mavani. All rights reserved.
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] text-muted-foreground">
            Designed & Built with precision
          </span>
        </div>
      </div>
    </footer>
  )
}
