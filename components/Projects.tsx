"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, SectionHeading } from "./Section";

const projects = [
  {
    title: "StaffSync",
    subtitle: "HR platform for modern organisations",
    description:
      "A complete HR operating system — staff records, leave workflows, payroll and analytics — designed mobile-first so managers can run their teams from anywhere.",
    highlights: ["Leave & approval workflows", "Payroll & reporting", "Role-based dashboards"],
    image: "/staff_sync.webp",
    domain: "staff-sync-demo.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    link: "https://staff-sync-demo.vercel.app/",
    category: "Enterprise SaaS",
  },
  {
    title: "Heritage Cooperative",
    subtitle: "Fintech platform for a cooperative society",
    description:
      "Member management, savings, investment portfolios and loan applications in one secure, real-time platform — with integrated payments and audit-ready financial reporting.",
    highlights: ["Real-time ledgers", "Loan origination", "Integrated payments"],
    image: "/heritage.webp",
    domain: "private deployment",
    tech: ["Next.js", "Convex", "Clerk", "Squadco"],
    link: "",
    category: "Fintech",
  },
  {
    title: "Threescore Tours",
    subtitle: "Premium travel across Kenya & East Africa",
    description:
      "A booking experience for safaris, city escapes, group retreats and getaways — personalised itineraries, enquiries and payments for an international audience.",
    highlights: ["Custom itineraries", "Online booking", "SEO-led growth"],
    image: "/threescore.webp",
    domain: "threescoretours.com",
    tech: ["Next.js", "Convex", "Clerk", "Squadco"],
    link: "https://threescoretours.com",
    category: "Travel & Hospitality",
  },
  {
    title: "GOUNI Postgraduate Portal",
    subtitle: "University admissions & academic administration",
    description:
      "The end-to-end portal for a university's postgraduate school — applications, course registration, programme management and administration at institutional scale.",
    highlights: ["Online admissions", "Course registration", "Admin back-office"],
    image: "/pg.webp",
    domain: "pg.gouni.edu.ng",
    tech: ["Next.js", "Convex", "Clerk", "Tailwind"],
    link: "https://pg.gouni.edu.ng",
    category: "Education",
  },
  {
    title: "Cinema Hub",
    subtitle: "Movie discovery, fast",
    description:
      "Real-time search, genre filtering and rich title pages with cast, crew and trailers — a showcase of performance-tuned data fetching and UI polish.",
    highlights: ["Instant search", "Smart filtering", "Rich detail pages"],
    image: "/tmdb1.webp",
    domain: "cinemahub-demo.vercel.app",
    tech: ["Next.js", "TypeScript", "TMDB API"],
    link: "https://cinemahub-demo.vercel.app",
    category: "Entertainment",
  },
];

type Project = (typeof projects)[number];

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className='overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40'>
      <div className='flex items-center gap-1.5 border-b border-border px-4 py-3'>
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='size-2.5 rounded-full bg-foreground/15' />
        <span className='mx-auto flex items-center gap-1.5 truncate rounded-md bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground'>
          {!project.link && <Lock className='size-3' />}
          {project.domain}
        </span>
        <span className='w-[42px]' />
      </div>
      <div className='relative aspect-[1349/591] overflow-hidden'>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes='(min-width: 1024px) 640px, 100vw'
          className='object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]'
        />
      </div>
    </div>
  );
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className='group grid items-center gap-8 lg:grid-cols-12 lg:gap-14'>
        <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
          {project.link ? (
            <Link href={project.link} target='_blank' rel='noopener noreferrer' aria-label={`Visit ${project.title}`}>
              <BrowserFrame project={project} />
            </Link>
          ) : (
            <BrowserFrame project={project} />
          )}
        </div>

        <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
          <div className='flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            <span className='text-primary'>{String(index + 1).padStart(2, "0")}</span>
            <span className='h-px w-6 bg-border' />
            {project.category}
          </div>
          <h3 className='mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl'>{project.title}</h3>
          <p className='mt-1 text-lg text-muted-foreground'>{project.subtitle}</p>
          <p className='mt-5 text-pretty leading-relaxed text-muted-foreground'>{project.description}</p>

          <ul className='mt-6 grid gap-2 border-t border-border pt-6'>
            {project.highlights.map((h) => (
              <li key={h} className='flex items-center gap-3 text-sm'>
                <span className='size-1.5 rounded-full bg-primary' />
                {h}
              </li>
            ))}
          </ul>

          <div className='mt-6 flex flex-wrap gap-2'>
            {project.tech.map((t) => (
              <span key={t} className='rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground'>
                {t}
              </span>
            ))}
          </div>

          <div className='mt-8'>
            {project.link ? (
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group/link inline-flex items-center gap-2 text-sm font-medium'>
                <span className='border-b border-foreground/30 pb-0.5 transition-colors group-hover/link:border-primary'>
                  Visit live site
                </span>
                <ArrowUpRight className='size-4 text-primary transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5' />
              </Link>
            ) : (
              <span className='inline-flex items-center gap-2 text-sm text-muted-foreground'>
                <Lock className='size-3.5' />
                Private client — under NDA
              </span>
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
            A few highlights from 50+ shipped projects across fintech, education,
            hospitality and the public sector.
          </Reveal>
        </div>

        <div className='mt-16 space-y-24 sm:mt-20 sm:space-y-32'>
          {projects.map((project, index) => (
            <CaseStudy key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
