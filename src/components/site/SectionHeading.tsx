import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent text-navy text-xs font-semibold uppercase tracking-wider")}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
