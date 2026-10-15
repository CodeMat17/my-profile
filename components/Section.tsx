import { cn } from "@/lib/utils";

// Scroll-reveal wrapper. Rendered on the server; RevealObserver adds `is-revealed`
// when the element scrolls into view. Content is only hidden once JS has booted.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={className}
      style={delay ? ({ "--delay": `${delay}s` } as React.CSSProperties) : undefined}>
      {children}
    </div>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <p className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground'>
      {index && <span className='text-primary'>{index}</span>}
      <span className='h-px w-8 bg-border' />
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className='mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg'>
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
