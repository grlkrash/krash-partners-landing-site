import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-32 md:pt-48"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Event sponsorship outreach, engineered
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-5xl text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Sponsorship outreach, built like software.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Krash Partners runs sponsorship outreach that books qualified
            meetings — powered by Krash Outbound, an AI-assisted system we
            built in-house.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#engine"
              className="inline-flex items-center gap-2 px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              See how it works
              <span aria-hidden className="text-primary">
                ↓
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
