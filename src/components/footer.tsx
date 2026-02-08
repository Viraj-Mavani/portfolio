import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const links = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
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
              {"Open to collaborations and interesting projects."}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <link.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <span className="font-mono text-[10px] text-muted-foreground">
            {"// 2026"}
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
