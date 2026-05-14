export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-gradient-hero overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="container mx-auto max-w-5xl px-4 text-center relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-navy text-xs font-semibold uppercase tracking-wider shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-navy leading-tight animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
