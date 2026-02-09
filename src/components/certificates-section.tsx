import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "#",
    modes: ["ai-ml"],
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "2025",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fcertificate%2FG47R9OJCYUM1&urlhash=WMGG&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["ai-ml"],
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "2023",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fspecialization%2Fcertificate%2F33GHJ2QY82KX&urlhash=7cWX&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["ai-ml", "data"],
  },
  {
    title: "Web Scraping in Python",
    issuer: "Udemy",
    date: "2023",
    credentialUrl: "https://www.udemy.com/certificate/UC-67d9a135-be8f-43a4-b9e9-10f2ede5e3e3/",
    modes: ["data"],
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "The App Brewery",
    date: "2022",
    credentialUrl: "https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fwww.udemy.com%2Fcertificate%2FUC-9779c93d-77bd-4610-ad4d-2e815b0a382c%2F&urlhash=h-sJ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B4MZPrNvgQuG7NWAMorUL7g%3D%3D",
    modes: ["fullstack"],
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "2022",
    credentialUrl: "https://coursera.org/share/ee17983586c604634839c77d9bca134e",
    modes: ["ai-ml", "fullstack"],
  },
  // {
  //   title: "Programming Fundamentals",
  //   issuer: "Duke University",
  //   date: "2020",
  //   credentialUrl: "https://coursera.org/share/ba053d3229601521dd958d7c66b4c974",
  //   modes: ["fullstack"],
  // },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="border-t border-border" aria-labelledby="certificates-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            certificates
          </span>
          <div className="h-px flex-1 bg-border" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            06
          </span>
        </div>

        <h2 id="certificates-heading" className="sr-only">Certificates</h2>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-4 w-4" strokeWidth={1.5} />
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} credential`}
                    className="flex h-7 w-7 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium leading-tight text-foreground">
                  {cert.title}
                </h3>
                <span className="font-mono text-xs text-primary">
                  {cert.issuer}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {cert.date}
                </span>
                <div className="flex gap-1">
                  {cert.modes.map((mode) => (
                    <span
                      key={mode}
                      className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}