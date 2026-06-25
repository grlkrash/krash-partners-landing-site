import { Reveal } from './reveal'

export function About() {
  return (
    <section className="border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={80}>
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                A builder who sells. An artist-founder who treats outbound like
                an engineering problem.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Sonia Gibbs sells like an operator, builds like an engineer,
                and thinks like a creator — and she&apos;s never seen those as
                separate things.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                She started building websites for brands when she was 13,
                started selling at 20, and by 22 was closing sponsorship deals
                — including from Polygon Technology, a roughly $10 billion
                blockchain company — for live event activations she produced
                across five cities: New York, Los Angeles, Austin (SXSW), Miami
                (Art Basel), and Cincinnati. Along the way: $26K+ raised in
                sponsorships, 60+ artists activated, and a track record among
                the top performers at national sales organizations.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                An artist-founder by instinct, she treats outbound like an
                engineering problem. Krash Outbound — the AI-assisted system
                powering Krash Partners — is what happens when someone
                who&apos;s actually closed the deals decides to build the
                machine for it. AI does the volume. A human approves everything
                that touches a relationship. Because outbound done right is a
                system, not a spray.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
