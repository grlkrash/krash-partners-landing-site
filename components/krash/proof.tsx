import { Reveal } from './reveal'

const stats = [
  { value: '$100K+', label: 'in B2B revenue closed' },
  { value: '$20K+', label: 'raised in sponsorships' },
  { value: '60+', label: 'artists activated across 5 cities' },
  { value: 'Top 3', label: 'in a national sales training cohort' },
  { value: 'Top 1%', label: 'regional performer' },
]

export function Proof() {
  return (
    <section
      id="proof"
      className="border-t border-border bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Proof
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tight md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-pretty text-sm leading-relaxed text-primary-foreground/80">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
