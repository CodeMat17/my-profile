import { BrowserFrame } from "@/components/Projects";
import { Container, Eyebrow, Reveal } from "@/components/Section";
import { caseStudies, getCaseStudy } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, Quote } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  const title = `${project.title} case study — ${project.subtitle} | Matthew Chukwu`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [{ url: project.image }],
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const index = caseStudies.indexOf(project);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const facts = [
    { label: "Industry", value: project.category },
    project.timeline && { label: "Timeline", value: project.timeline },
    project.role && { label: "My role", value: project.role },
    { label: "Stack", value: project.tech.join(" · ") },
  ].filter((f): f is { label: string; value: string } => Boolean(f));

  return (
    <main className='min-h-screen'>
      {/* Header */}
      <section className='relative pb-16 pt-12 sm:pt-16'>
        <Container>
          <Link
            href='/#work'
            className='inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'>
            <ArrowLeft className='size-4' />
            All work
          </Link>

          <div className='mt-10 max-w-4xl'>
            <p className='enter-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground'>
              Case study <span className='text-primary'>/</span> {project.category}
            </p>
            <h1 className='enter-up mt-4 text-balance text-[clamp(2.4rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] [--delay:0.05s]'>
              {project.title}
              <span className='block text-muted-foreground'>{project.subtitle}</span>
            </h1>
            <p className='enter-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground [--delay:0.1s]'>
              {project.summary}
            </p>
          </div>

          <dl className='enter-up mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border [--delay:0.15s] sm:grid-cols-2 lg:grid-cols-4'>
            {facts.map((f) => (
              <div key={f.label} className='bg-background p-5'>
                <dt className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground'>{f.label}</dt>
                <dd className='mt-2 text-sm font-medium'>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className='enter-up group mt-12 [--delay:0.2s]'>
            <BrowserFrame project={project} priority />
          </div>

          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group/link mt-6 inline-flex items-center gap-2 text-sm font-medium'>
              <span className='border-b border-foreground/30 pb-0.5 transition-colors group-hover/link:border-primary'>
                Visit {project.domain}
              </span>
              <ArrowUpRight className='size-4 text-primary transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
            </a>
          )}
        </Container>
      </section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className='border-y border-border bg-muted/40 py-16 dark:bg-card/40'>
          <Container>
            <dl className='grid gap-10 sm:grid-cols-3'>
              {project.results.map((r) => (
                <Reveal key={r.label}>
                  <dt className='text-4xl font-semibold tracking-tight text-primary sm:text-5xl'>{r.value}</dt>
                  <dd className='mt-2 text-muted-foreground'>{r.label}</dd>
                </Reveal>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* Story */}
      <section className='py-24 sm:py-28'>
        <Container className='grid gap-16 lg:grid-cols-12'>
          <Reveal className='lg:col-span-4'>
            <Eyebrow index='01'>The challenge</Eyebrow>
          </Reveal>
          <Reveal className='lg:col-span-8'>
            <p className='text-pretty text-xl leading-relaxed sm:text-2xl'>{project.problem}</p>
          </Reveal>

          <Reveal className='lg:col-span-4'>
            <Eyebrow index='02'>What I built</Eyebrow>
          </Reveal>
          <Reveal className='lg:col-span-8'>
            <ul className='space-y-4'>
              {project.solution.map((s) => (
                <li key={s} className='flex gap-4 text-lg leading-relaxed text-muted-foreground'>
                  <Check className='mt-1.5 size-5 shrink-0 text-primary' />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className='lg:col-span-4'>
            <Eyebrow index='03'>Key decisions</Eyebrow>
            <p className='mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground'>
              The technical calls that mattered — and what they meant for the business.
            </p>
          </Reveal>
          <div className='grid gap-5 sm:grid-cols-2 lg:col-span-8'>
            {project.decisions.map((d, i) => (
              <Reveal key={d.title} delay={0.05 * i} className='h-full'>
                <div className='h-full rounded-3xl border border-border bg-card p-7'>
                  <h3 className='text-lg font-semibold tracking-tight'>{d.title}</h3>
                  <p className='mt-3 leading-relaxed text-muted-foreground'>{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className='pb-24'>
          <Container>
            <Reveal>
              <figure className='relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12'>
                <div className='pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/15 blur-3xl' />
                <Quote className='size-8 text-primary' strokeWidth={1.5} />
                <blockquote className='relative mt-6 text-pretty text-xl font-medium leading-relaxed tracking-tight sm:text-2xl'>
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className='mt-8 text-sm'>
                  <span className='font-medium'>{project.testimonial.name}</span>
                  <span className='text-muted-foreground'> — {project.testimonial.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          </Container>
        </section>
      )}

      {/* CTA + next */}
      <section className='border-t border-border bg-muted/40 py-24 dark:bg-card/40'>
        <Container className='grid gap-12 lg:grid-cols-2 lg:items-end'>
          <Reveal>
            <h2 className='text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl'>
              Building something similar?{" "}
              <span className='text-muted-foreground'>Let&apos;s talk about your product.</span>
            </h2>
            <a
              href='/#contact'
              className='group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90'>
              <CalendarDays className='size-4' />
              Book a call
              <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </a>
          </Reveal>

          {next.slug !== project.slug && (
            <Reveal delay={0.05}>
              <Link
                href={`/work/${next.slug}`}
                className='group block rounded-3xl border border-border bg-background p-7 transition-colors hover:border-primary/40'>
                <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground'>Next case study</p>
                <p className='mt-3 flex items-center justify-between gap-4 text-2xl font-semibold tracking-tight'>
                  {next.title}
                  <ArrowRight className='size-5 text-primary transition-transform group-hover:translate-x-1' />
                </p>
                <p className='mt-1 text-muted-foreground'>{next.subtitle}</p>
              </Link>
            </Reveal>
          )}
        </Container>
      </section>
    </main>
  );
}
