import Image from 'next/image'
import { Reveal } from './reveal'

const ARCADE_YELLOW = '#FFFF00'

type Fact = { label: string; value: string }
type Result = { value: string; label: string }

type Brand =
  | { type: 'pixel'; name: string }
  | {
      type: 'logo'
      src: string
      alt: string
      width: number
      height: number
      className: string
    }

type Study = {
  index: string
  status: 'complete' | 'live' | 'upcoming'
  dateLabel: string
  statusLabel: string
  accent: string
  brand: Brand
  title: string
  intro: string
  facts: Fact[]
  challenge: { title: string; body: React.ReactNode }
  engagement: { title: string; items: string[] }
  results: {
    meta: string
    items: Result[]
    footnote: string
  } | null
  closing: string
}

const amfStats = [
  {
    value: '~$4,150',
    asterisk: true,
    label: 'new revenue · ~21% on ~$19.3K base',
    projected: false,
  },
  {
    value: '$2,050',
    asterisk: false,
    label: 'booked vendor fees',
    projected: false,
  },
  {
    value: '~$2,100',
    asterisk: false,
    label: 'projected water line',
    projected: true,
  },
  {
    value: '5',
    asterisk: false,
    label: 'new vendor + partner deals',
    projected: false,
  },
] as const

const studies: Study[] = [
  {
    index: '02',
    status: 'live',
    dateLabel: 'Sept 2026',
    statusLabel: 'In progress — results Sept 2026',
    accent: '#a45cd8',
    brand: {
      type: 'logo',
      src: '/case-studies/mwc-logo.png',
      alt: 'MidwestCon by Disruption Now',
      width: 1043,
      height: 424,
      className: 'h-12 w-auto md:h-16',
    },
    title: 'Building the partner engine for a flagship innovation conference.',
    intro:
      'MidwestCon — the Cincinnati innovation and culture conference by Disruption Now — is a live Krash Partners engagement. We are developing sponsorship and partnership revenue ahead of the[...]
    facts: [
      { label: 'Client', value: 'MidwestCon' },
      { label: 'Format', value: 'Innovation conference' },
      { label: 'Location', value: 'Cincinnati, OH' },
      { label: 'Status', value: 'Live · Sept 2026' },
    ],
    challenge: {
      title: 'The engagement',
      body: (
        <>
          A flagship, multi-day conference with a national profile and a packed
          partner calendar.{' '}
          <span className="text-muted-foreground">
            We are building the revenue and partnership layer as the event
            approaches.
          </span>
        </>
      ),
    },
    engagement: {
      title: 'In progress',
      items: [
        'Developing the sponsorship and partnership pipeline ahead of the September event.',
        'Structuring revenue relationships that outlast a single conference cycle.',
        'Full results and numbers publish once MidwestCon 2026 wraps.',
      ],
    },
    results: null,
    closing: 'Case study in progress. Final numbers land after the event wraps.',
  },
  {
    index: '03',
    status: 'upcoming',
    dateLabel: 'Oct 2026',
    statusLabel: 'Upcoming — results late 2026',
    accent: '#2fd4c4',
    brand: {
      type: 'logo',
      src: '/case-studies/villeage-logo.png',
      alt: 'Villeage Esports & Entertainment',
      width: 2000,
      height: 2000,
      className: 'h-16 w-auto md:h-20',
    },
    title: 'Turning a Louisville esports community into a partner platform.',
    intro:
      'Villeage Esports & Entertainment — the Louisville-based esports and entertainment organization — is the next Krash Partners engagement. Work kicks off around October, with the case stu[...]
    facts: [
      { label: 'Client', value: 'Villeage E&E' },
      { label: 'Format', value: 'Esports & entertainment' },
      { label: 'Location', value: 'Louisville, KY' },
      { label: 'Status', value: 'Upcoming · Oct 2026' },
    ],
    challenge: {
      title: 'The engagement',
      body: (
        <>
          A growing esports community with real audience and venue assets.{' '}
          <span className="text-muted-foreground">
            We will build the sponsorship and partnership engine around it.
          </span>
        </>
      ),
    },
    engagement: {
      title: 'Coming up',
      items: [
        'Kicking off partnership and revenue development around October.',
        'Turning community, venue, and content assets into recurring revenue.',
        'Case study publishes once the first partnership cycle completes.',
      ],
    },
    results: null,
    closing: 'Case study coming soon. Check back after the first cycle wraps.',
  },
]

function StatusBadge({ study }: { study: Study }) {
  const live = study.status === 'live'
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
      <span
        className={`h-2 w-2 rounded-full ${live ? 'animate-pulse' : ''}`}
        style={{ backgroundColor: study.accent }}
      />
      {study.statusLabel}
    </span>
  )
}

function Wordmark({ study }: { study: Study }) {
  if (study.brand.type === 'pixel') {
    return (
      <p
        className="text-lg leading-none text-primary md:text-2xl"
        style={{ fontFamily: 'var(--font-pixel)' }}
      >
        {study.brand.name}
      </p>
    )
  }
  return (
    <div className="flex items-center">
      <Image
        src={study.brand.src || '/placeholder.svg'}
        alt={study.brand.alt}
        width={study.brand.width}
        height={study.brand.height}
        className={`${study.brand.className} mix-blend-screen`}
      />
    </div>
  )
}

function AmfCaseStudy() {
  return (
    <article className="relative">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Case study
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Arcade Music Fest
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-12">
        <Reveal delay={60}>
          <div>
            <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Two weeks. Real revenue.
            </h3>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Arcade Music Fest — a two-day festival, 8,000–10,000 attendees. We
              came in with ~2 weeks of effective runway before the partner
              deadline closed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex w-full max-w-[390px] items-center justify-center rounded-[10px] bg-card p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:w-[390px]">
              <Image
                src="/case-studies/acmf-logo.png"
                alt="Arcade Music Fest logo"
                width={1200}
                height={450}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Covington / NKY · Aug 8–9, 2026
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amfStats.map((stat) => (
            <div
              key={stat.label}
              className={`relative rounded-[10px] bg-card p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${
                stat.projected
                  ? 'bg-card/80 outline outline-1 outline-dashed outline-border'
                  : ''
              }`}
            >
              {stat.projected && (
                <span className="absolute right-4 top-4 rounded-full border border-dashed border-primary/50 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                  Projected
                </span>
              )}
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {stat.value}
                {stat.asterisk && (
                  <sup className="ml-0.5 text-lg font-bold text-primary">*</sup>
                )}
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-4 flex gap-4 rounded-[10px] bg-card p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:p-8">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-secondary">
            <Image
              src="/case-studies/amf-bug.png"
              alt="Arcade Music Fest pixel bug mark"
              width={40}
              height={40}
              className="h-full w-full object-cover mix-blend-screen"
            />
          </div>
          <div className="min-w-0">
            <p className="text-pretty text-base font-bold tracking-tight md:text-lg">
              <span style={{ color: ARCADE_YELLOW }}>Alpine Valley Water</span>
              <span className="text-foreground">
                {' '}
                — a new revenue line, not a sponsor check.
              </span>
            </p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              840 bottles resold at $2.50 — up to ~$2,100, projected at sell-out
              (25 cases donated + 5 bought, ~$0 cost). Separately, $2,050 in
              vendor fees is already booked.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-5 text-pretty text-[11px] leading-relaxed text-muted-foreground md:text-xs">
          <span className="font-semibold text-primary">*</span>{' '}
          ~$4,150 = $2,050 booked vendor fees + ~$2,100 projected water resale
          at sell-out (realized on event day).
        </p>
      </Reveal>

      <Reveal delay={280}>
        <p className="mt-10 max-w-2xl text-pretty text-base italic leading-relaxed text-primary md:text-lg">
          Selling sponsorships ends when the check clears. Building revenue
          keeps paying.
        </p>
      </Reveal>
    </article>
  )
}

function StudyBlock({ study }: { study: Study }) {
  return (
    <article className="relative mt-20 border-t border-border pt-20 md:mt-28 md:pt-28">
      <div className="relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-semibold text-primary">
              {study.index}
            </span>
            <span className="h-px max-w-[3rem] flex-1 bg-border" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Case study // {study.dateLabel}
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Wordmark study={study} />
            {study.status !== 'complete' && <StatusBadge study={study} />}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            {study.title}
          </h3>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {study.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 md:grid-cols-4">
            {study.facts.map((fact) => (
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

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <Reveal delay={80}>
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {study.challenge.title}
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed">
                {study.challenge.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {study.engagement.title}
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {study.engagement.items.map((item, i) => (
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

        {study.results ? (
          <Reveal delay={120}>
            <div className="mt-14 rounded-lg border border-border bg-card p-7 md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  Results
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {study.results.meta}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
                {study.results.items.map((result, i) => (
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
                {study.results.footnote}
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={120}>
            <div className="mt-14 flex flex-col gap-4 rounded-lg border border-dashed border-border bg-card/50 p-7 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  Results pending
                </p>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  {study.closing}
                </p>
              </div>
              <StatusBadge study={study} />
            </div>
          </Reveal>
        )}

        {study.results && (
          <Reveal delay={160}>
            <p className="mt-10 max-w-2xl text-pretty text-lg font-semibold tracking-tight md:text-xl">
              {study.closing}
            </p>
          </Reveal>
        )}
      </div>
    </article>
  )
}

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Case studies
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Real engagements. Real revenue. Numbers you can check.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <AmfCaseStudy />
          {studies.map((study) => (
            <StudyBlock key={study.index} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
