import { Reveal } from './reveal'

const capabilities = [
  {
    title: 'Lead & sponsor discovery',
    body: 'Surfaces the right accounts and decision-makers — and the right events looking for sponsors.',
  },
  {
    title: 'Buyer-signal detection',
    body: 'Reads intent from real activity so you reach people when they are actually in-market.',
  },
  {
    title: 'Outreach personalization',
    body: 'Writes outbound that sounds like a person who did their homework, at scale.',
  },
]

export function TheEngine() {
  return (
    <section
      id="engine"
      className="border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                The engine
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Krash Outbound
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                A proprietary, AI-assisted prospecting system we own and built
                ourselves. Not an off-the-shelf tool stitched together — the
                machine that runs every campaign.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span className="size-2 rounded-full bg-primary" />
                Built in-house by Krash Partners
              </div>
            </Reveal>
          </div>

          <ul className="flex flex-col gap-4">
            {capabilities.map((cap, i) => (
              <Reveal as="li" key={cap.title} delay={i * 100}>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {cap.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
