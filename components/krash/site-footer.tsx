export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <span className="inline-block size-2.5 rounded-sm bg-primary" />
          <span>Krash Partners — a Krash World Inc. company.</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© {year}</p>
      </div>
    </footer>
  )
}
