import { Bot, Cloud, Code2, Database, ShieldCheck, Smartphone } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./Section";

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Convex", "Supabase",
  "MongoDB", "GraphQL", "Tailwind CSS", "AWS", "Vercel", "Claude API", "OpenAI", "Vercel AI SDK",
];

const areas = [
  {
    icon: Code2,
    title: "Frontend architecture",
    body: "Fast, accessible interfaces with a design-system mindset.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend & data",
    body: "APIs and data models that stay clean as products grow.",
    skills: ["Node.js", "PostgreSQL", "Convex", "Supabase", "GraphQL / REST"],
  },
  {
    icon: Bot,
    title: "Applied AI",
    body: "LLM features that are reliable, observable and cost-aware.",
    skills: ["Claude API", "OpenAI", "Vercel AI SDK", "RAG", "Agents & automation"],
  },
  {
    icon: Cloud,
    title: "Cloud & delivery",
    body: "Infrastructure and pipelines that make shipping boring.",
    skills: ["AWS", "Vercel", "Serverless", "CI/CD", "Monitoring"],
  },
  {
    icon: Smartphone,
    title: "Mobile web & PWA",
    body: "App-quality experiences without the app-store friction.",
    skills: ["PWAs", "Offline-first", "Push notifications", "Core Web Vitals"],
  },
  {
    icon: ShieldCheck,
    title: "Security & performance",
    body: "Secure by default, measured continuously.",
    skills: ["Auth & RBAC", "Payments", "Lighthouse 95+", "Technical SEO"],
  },
];

function Skills() {
  return (
    <section id='expertise' className='relative overflow-hidden py-24 sm:py-32'>
      <Container>
        <SectionHeading
          index='02'
          eyebrow='Expertise'
          title={
            <>
              Full-stack depth.{" "}
              <span className='text-muted-foreground'>Senior judgement.</span>
            </>
          }
          description='I choose boring technology where it matters and modern tooling where it pays off — and I can explain the trade-offs to your team and your board.'
        />

        <div className='mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3'>
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={0.04 * i} className='h-full'>
              <div className='group relative h-full bg-background p-7 transition-colors hover:bg-muted/50 sm:p-8'>
                <area.icon className='size-6 text-primary' strokeWidth={1.6} />
                <h3 className='mt-6 text-lg font-semibold tracking-tight'>{area.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{area.body}</p>
                <ul className='mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground'>
                  {area.skills.map((s) => (
                    <li key={s} className='transition-colors group-hover:text-foreground'>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Stack marquee */}
      <div
        aria-hidden
        className='relative mt-20 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]'>
        <div className='animate-marquee flex shrink-0 gap-12 pr-12'>
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              data-text={s}
              className='whitespace-nowrap text-2xl font-semibold tracking-tight text-foreground/20 before:content-[attr(data-text)] sm:text-3xl'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
