import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./Section";

const engagements = [
  {
    label: "For founders & businesses",
    title: "Product build",
    body: "From idea to launched product. I own architecture, design-to-code and delivery, then support you after go-live.",
    points: [
      "Discovery, scoping & technical plan",
      "Full-stack web app or PWA",
      "AI features where they add real value",
      "Launch, monitoring & handover",
    ],
    cta: "Start a project",
    featured: true,
  },
  {
    label: "For engineering teams",
    title: "Senior contractor",
    body: "Embedded with your team for weeks or months — shipping features, reviewing code and raising standards.",
    points: [
      "Joins your rituals, tools & codebase",
      "Feature delivery end-to-end",
      "Code review & mentoring",
      "Flexible part- or full-time",
    ],
    cta: "Discuss a contract",
  },
  {
    label: "For leaders",
    title: "Technical advisory",
    body: "A senior second opinion on architecture, AI strategy, performance or a struggling project.",
    points: [
      "Architecture & stack reviews",
      "AI integration roadmap",
      "Performance & SEO audits",
      "Project rescue",
    ],
    cta: "Book an advisory call",
  },
];

const process = [
  { step: "Discover", body: "We align on goals, users, constraints and what success looks like." },
  { step: "Plan", body: "A clear scope, architecture and milestones — no surprises later." },
  { step: "Build", body: "Weekly demos on a live preview. You see progress, not status reports." },
  { step: "Launch & grow", body: "Production release, monitoring, and iteration on real usage." },
];

function Services() {
  return (
    <section id='services' className='relative border-y border-border bg-muted/40 py-24 sm:py-32 dark:bg-card/40'>
      <Container>
        <SectionHeading
          index='03'
          eyebrow='Ways to work together'
          title={
            <>
              Hire me for a product,{" "}
              <span className='text-muted-foreground'>a team, or a decision.</span>
            </>
          }
          description="I'm an independent engineer. Whether you need a complete product, an extra senior on your team, or expert advice, here's how we can work together."
        />

        <div className='mt-16 grid gap-5 lg:grid-cols-3'>
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={0.06 * i} className='h-full'>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 sm:p-8",
                  e.featured
                    ? "border-primary/40 bg-background shadow-2xl shadow-primary/10"
                    : "border-border bg-background/60",
                )}>
                {e.featured && (
                  <div className='absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
                )}
                <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground'>{e.label}</p>
                <h3 className='mt-4 text-2xl font-semibold tracking-tight'>{e.title}</h3>
                <p className='mt-3 leading-relaxed text-muted-foreground'>{e.body}</p>
                <ul className='mt-7 space-y-3 border-t border-border pt-7'>
                  {e.points.map((p) => (
                    <li key={p} className='flex gap-3 text-sm'>
                      <Check className='mt-0.5 size-4 shrink-0 text-primary' />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className='mt-auto pt-8'>
                  <a
                    href='#contact'
                    className={cn(
                      "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
                      e.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-foreground/15 hover:bg-foreground/5",
                    )}>
                    {e.cta}
                    <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className='mt-24'>
          <h3 className='font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground'>How a project runs</h3>
          <ol className='mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4'>
            {process.map((p, i) => (
              <li key={p.step} className='bg-background p-7'>
                <span className='font-mono text-sm text-primary'>{String(i + 1).padStart(2, "0")}</span>
                <p className='mt-4 text-lg font-semibold tracking-tight'>{p.step}</p>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{p.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}

export default Services;
