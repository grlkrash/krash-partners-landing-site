import { Reveal } from './reveal'

export function About() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={80}>
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                A builder who sells. An artist-founder who treats outbound like
                an engineering problem.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Five-plus years in B2B and consultative sales before building
                Krash Outbound — closing real revenue, raising sponsorships,
                and activating artists across cities. The same instinct that
                books meetings now ships as software. This is a placeholder
                bio: swap in the founder&apos;s full story, the work that
                proves it, and why outbound done right is a system, not a
                spray.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
