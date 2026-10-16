import { caseStudies, type CaseStudy } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, SectionHeading } from "./Section";

export function BrowserFrame({ project, priority }: { project: CaseStudy; priority?: boolean }) {
  return (
    <div className='overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40'>
      <div className='flex items-center gap-1.5 border-b border-border px-4 py-3'>
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='mx-auto truncate rounded-md bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground'>
          {project.domain}
        </span>
        <span className='w-[42px]' />
      </div>
      <div className='relative aspect-[1349/591] overflow-hidden'>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          preload={priority}
          sizes='(min-width: 1024px) 760px, 100vw'
          className='object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]'
        />
      </div>
    </div>
  );
}

function WorkItem({ project, index }: { project: CaseStudy; index: number }) {
  const reversed = index % 2 === 1;
  const href = `/work/${project.slug}`;
  const headline = project.results?.[0];

  return (
    <Reveal>
      <article className='group grid items-center gap-8 lg:grid-cols-12 lg:gap-14'>
        <Link
          href={href}
          aria-label={`Read the ${project.title} case study`}
          className={cn("lg:col-span-7", reversed && "lg:order-2")}>
          <BrowserFrame project={project} />
        </Link>

        <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
          <div className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            <span className='text-primary'>{String(index + 1).padStart(2, "0")}</span>
            <span className='h-px w-6 bg-border' />
            {project.category}
          </div>
          <h3 className='mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl'>{project.title}</h3>
          <p className='mt-1 text-lg text-muted-foreground'>{project.subtitle}</p>
          <p className='mt-5 text-pretty leading-relaxed text-muted-foreground'>{project.summary}</p>

          {headline && (
            <p className='mt-6 flex items-baseline gap-3 border-t border-border pt-6'>
              <span className='text-3xl font-semibold tracking-tight text-primary'>{headline.value}</span>
              <span className='text-sm text-muted-foreground'>{headline.label}</span>
            </p>
          )}

          <ul className={cn("mt-6 grid gap-2", !headline && "border-t border-border pt-6")}>
            {project.highlights.map((h) => (
              <li key={h} className='flex items-center gap-3 text-sm'>
                <span className='size-1.5 rounded-full bg-primary' />
                {h}
              </li>
            ))}
          </ul>

          <div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-3'>
            <Link
              href={href}
              className='group/cta inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'>
              Read the case study
              <ArrowRight className='size-4 transition-transform group-hover/cta:translate-x-0.5' />
            </Link>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group/link inline-flex items-center gap-2 text-sm font-medium'>
                <span className='border-b border-foreground/30 pb-0.5 transition-colors group-hover/link:border-primary'>
                  Visit live site
                </span>
                <ArrowUpRight className='size-4 text-primary transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id='work' className='relative py-24 sm:py-32'>
      <Container>
        <div className='flex flex-col justify-between gap-8 lg:flex-row lg:items-end'>
          <SectionHeading
            index='01'
            eyebrow='Selected work'
            title={
              <>
                Products in production,
                <br className='hidden sm:block' /> <span className='text-muted-foreground'>not just in pitch decks.</span>
              </>
            }
          />
          <Reveal className='max-w-sm text-muted-foreground lg:pb-2'>
            A few highlights from 50+ shipped projects. Each one started as
            someone&apos;s idea — here&apos;s how it became a live product.
          </Reveal>
        </div>

        <div className='mt-16 space-y-24 sm:mt-20 sm:space-y-32'>
          {caseStudies.map((project, index) => (
            <WorkItem key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
