import { Reveal } from './reveal'

const stats = [
  { value: '$100K+', label: 'in B2B revenue closed' },
  { value: '$26K+', label: 'raised in sponsorships' },
  { value: '60+', label: 'artists activated across 5 cities' },
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

        <Reveal delay={160}>
          <div className="mt-16 grid gap-8 border-t border-primary-foreground/15 pt-10 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                Sponsorships closed
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-primary-foreground/85">
                Polygon Technology and other web3 and tech brands, for live
                event activations.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                Collaborated with
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-primary-foreground/85">
                Surface Magazine, Public Hotel, and other brands through
                multi-city activations including SXSW and Art Basel.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
