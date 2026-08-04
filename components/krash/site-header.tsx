'use client'

import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-bold tracking-tight"
        >
          <span className="inline-block size-2.5 rounded-sm bg-primary" />
          <span>Krash Partners</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#what">
            What we do
          </a>
          <a className="transition-colors hover:text-foreground" href="#engine">
            The engine
          </a>
          <a className="transition-colors hover:text-foreground" href="#proof">
            Proof
          </a>
          <a
            className="transition-colors hover:text-foreground"
            href="#case-study"
          >
            Case study
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a conversation
        </a>
      </div>
    </header>
  )
}
