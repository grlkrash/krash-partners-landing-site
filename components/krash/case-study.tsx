import Image from 'next/image'
import { Reveal } from './reveal'

const results = [
  { value: '~$3,225', label: 'New revenue generated for the fest (up to)' },
  { value: '~17%', label: 'Lift on their ~$19.3k base, at water sell-out' },
  { value: '4', label: 'New vendor & partner relationships' },
  { value: '2wk', label: 'From engagement to closed partners' },
]

const work = [
  'Worked the existing sponsorship pipeline to lift vendor & sponsor revenue inside the deadline.',
  'Structured a partnership with Alpine Valley Water — a new, recurring on-site revenue stream the fest resells directly.',
  'Booked two esports vendors and a Kona Ice truck to widen the on-site draw and vendor mix.',
]

const facts = [
  { label: 'Client', value: 'Arcade Music Fest' },
  { label: 'Format', value: '2-day music festival' },
  { label: 'Location', value: 'Covington / Northern KY' },
  { label: 'Scale', value: '8,000–10,000 attendees' },
]

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      {/* AMF signature wireframe "bug" — brand accent, black field dropped via screen blend */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 w-64 opacity-30 mix-blend-screen md:right-8 md:top-16 md:w-80 md:opacity-40"
      >
        <Image
          src="/case-studies/amf-bug.png"
          alt=""
          width={484}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Index + label */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-semibold text-primary">
              01
            </span>
            <span className="h-px flex-1 max-w-[3rem] bg-border" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Case study // June 2026
            </p>
          </div>
        </Reveal>

        {/* AMF wordmark in their pixel type */}
        <Reveal delay={60}>
          <p
            className="mt-8 text-lg leading-none text-primary md:text-2xl"
            style={{ fontFamily: 'var(--font-pixel)' }}
          >
            Arcade Music Fest
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Two weeks of runway. A revenue line that didn&apos;t exist.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Krash Partners was brought into Arcade Music Fest with roughly two
            weeks of effective runway before the partner deadline closed. In
            that window we lifted sponsorship and vendor revenue — and
            engineered a brand-new on-site revenue stream at essentially zero
            cost to the festival.
          </p>
        </Reveal>

        {/* Facts */}
        <Reveal delay={240}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base font-semibold tracking-tight">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Challenge + What we did */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <Reveal delay={80}>
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                The challenge
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed">
                A few weeks from event day, with the window for new partners
                nearly shut. Most outreach shops would have called it too late
                to move the number.{' '}
                <span className="text-muted-foreground">
                  We treated the constraint as the brief.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                What we did
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {work.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-sm text-primary">
                      0{i + 1}
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Results */}
        <Reveal delay={120}>
          <div className="mt-14 rounded-lg border border-border bg-card p-7 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Results
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ~2-week turnaround
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {results.map((result, i) => (
                <Reveal key={result.label} delay={i * 80}>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold tracking-tight md:text-4xl">
                      {result.value}
                    </span>
                    <span className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {result.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 border-t border-border pt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
              $1,125 booked vendor fees + ~$2,100 new water line, projected at
              sell-out.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 max-w-2xl text-pretty text-lg font-semibold tracking-tight md:text-xl">
            Selling sponsorships ends when the check clears. Building revenue
            keeps paying.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
