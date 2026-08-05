import Image from 'next/image'
import { Reveal } from './reveal'

type Fact = { label: string; value: string }
type Result = {
  value: string
  label: string
  asterisk?: boolean
  projected?: boolean
}
type Highlight = { title: React.ReactNode; body: string }

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
    highlight?: Highlight
    footnote: React.ReactNode
  } | null
  closing: string
}

const studies: Study[] = [
  {
    index: '01',
    status: 'complete',
    dateLabel: 'June 2026',
    statusLabel: 'Complete',
    accent: '#38e1ff',
    brand: { type: 'pixel', name: 'Arcade Music Fest' },
    title: "Two weeks of runway. A revenue line that didn't exist.",
    intro:
      'Krash Partners was brought into Arcade Music Fest with roughly two weeks of effective runway before the partner deadline closed. In that window we lifted sponsorship and vendor revenue — and engineered a brand-new on-site revenue stream at essentially zero cost to the festival.',
    facts: [
      { label: 'Client', value: 'Arcade Music Fest' },
      { label: 'Format', value: '2-day music festival' },
      { label: 'Location', value: 'Covington / Northern KY' },
      { label: 'Scale', value: '8,000–10,000 attendees' },
    ],
    challenge: {
      title: 'The challenge',
      body: (
        <>
          A few weeks from event day, with the window for new partners nearly
          shut. Most outreach shops would have called it too late to move the
          number.{' '}
          <span className="text-muted-foreground">
            We treated the constraint as the brief.
          </span>
        </>
      ),
    },
    engagement: {
      title: 'What we did',
      items: [
        'Worked the existing sponsorship pipeline to lift vendor & sponsor revenue inside the deadline.',
        'Structured a partnership with Alpine Valley Water — a new, recurring on-site revenue stream the fest resells directly.',
        'Booked two esports vendors and a Kona Ice truck to widen the on-site draw and vendor mix.',
      ],
    },
    results: {
      meta: '~2-week turnaround',
      items: [
        {
          value: '~$4,075',
          label: 'New revenue · ~21% on ~$19.3K base',
          asterisk: true,
        },
        { value: '$1,975', label: 'Booked vendor fees' },
        { value: '~$2,100', label: 'Projected water line', projected: true },
        { value: '5', label: 'New vendor + partner deals' },
      ],
      highlight: {
        title: (
          <>
            <span style={{ color: '#FFFF00' }}>Alpine Valley Water</span>
            <span className="text-foreground">
              {' '}
              — a new revenue line, not a sponsor check.
            </span>
          </>
        ),
        body: '840 bottles resold at $2.50 — up to ~$2,100, projected at sell-out (25 cases donated + 5 bought, ~$0 cost). Separately, $1,975 in vendor fees is already booked.',
      },
      footnote: (
        <>
          <span className="text-primary">*</span> ~$4,075 = $1,975 booked vendor
          fees + ~$2,100 projected water resale at sell-out (realized on event
          day).
        </>
      ),
    },
    closing:
      'Selling sponsorships ends when the check clears. Building revenue keeps paying.',
  },
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
      'MidwestCon — the Cincinnati innovation and culture conference by Disruption Now — is a live Krash Partners engagement. We are developing sponsorship and partnership revenue ahead of the event, with the full results set to publish once the conference wraps in September.',
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
      'Villeage Esports & Entertainment — the Louisville-based esports and entertainment organization — is the next Krash Partners engagement. Work kicks off around October, with the case study to follow once the first partnership cycle completes.',
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

function StudyBlock({ study, first }: { study: Study; first: boolean }) {
  return (
    <article
      className={`relative ${first ? '' : 'mt-20 border-t border-border pt-20 md:mt-28 md:pt-28'}`}
    >
      {/* AMF signature wireframe "bug" — only on study 01 */}
      {study.index === '01' && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-6 w-56 opacity-30 mix-blend-screen md:right-0 md:top-4 md:w-72 md:opacity-40"
        >
          <Image
            src="/case-studies/amf-bug.png"
            alt=""
            width={484}
            height={600}
            className="h-auto w-full"
          />
        </div>
      )}

      <div className="relative">
        {/* Index + date label */}
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

        {/* Brand wordmark / logo + status */}
        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Wordmark study={study} />
            {study.status !== 'complete' && <StatusBadge study={study} />}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            {study.title}
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {study.intro}
          </p>
        </Reveal>

        {/* Facts */}
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

        {/* Challenge + engagement */}
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

        {/* Results (complete) OR status panel (in progress) */}
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
          {studies.map((study, i) => (
            <StudyBlock key={study.index} study={study} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
