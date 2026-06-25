import { ArrowUpRight, Mail } from 'lucide-react'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Let&apos;s build your pipeline.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@krashpartners.com"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              hello@krashpartners.com
            </a>
            <a
              href="https://linkedin.com/in/grl3"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-base font-medium transition-colors hover:border-primary/60"
            >
              LinkedIn
              <ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 font-mono text-sm text-muted-foreground">
            Response within 1 business day.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
