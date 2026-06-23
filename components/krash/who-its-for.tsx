import { Reveal } from './reveal'

const audience = [
  'Festivals looking for brand sponsors',
  'Conferences building a sponsorship pipeline',
  'Creator events that need the right partners',
]

export function WhoItsFor() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Who it&apos;s for
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            If you need meetings on the calendar, we should talk.
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {audience.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 80}>
              <div className="flex items-center gap-5 py-6">
                <span className="font-mono text-sm text-primary">
                  0{i + 1}
                </span>
                <span className="text-pretty text-lg font-medium md:text-xl">
                  {line}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
