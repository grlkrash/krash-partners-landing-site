import { Reveal } from './reveal'

const items = [
  {
    label: 'Find',
    body: 'Targeted prospect lists built on real buying signals, not scraped junk.',
  },
  {
    label: 'Reach',
    body: 'Outbound email that reads human and gets replies, not templated spam.',
  },
  {
    label: 'Convert',
    body: 'Qualified meetings handed off clean, tracked end to end.',
  },
]

export function WhatWeDo() {
  return (
    <section
      id="what"
      className="border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            What we do
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/60">
                <span className="font-mono text-sm text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
