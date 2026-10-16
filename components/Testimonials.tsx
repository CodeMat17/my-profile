import { Quote } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./Section";

const testimonials = [
  {
    name: "Hon. Dike",
    role: "CEO, Platmus Ltd",
    quote:
      "Matthew's expertise in building scalable, real-time applications transformed our business operations. The platform he built handles thousands of transactions seamlessly, and the real-time features have given us a decisive competitive edge. His attention to detail and commitment to excellence is unmatched.",
  },
  {
    name: "Chief Theo Olukile",
    role: "Rtd. State Commissioner, ICPC",
    quote:
      "Working with Matthew was a game-changer for our organization. He delivered a robust, secure platform that scaled perfectly with our growing needs. The real-time reporting and analytics features streamlined our operations significantly.",
  },
  {
    name: "Dr. Charles Mbah",
    role: "Medical Doctor",
    quote:
      "He built a comprehensive healthcare management system that's both intuitive and powerful. The real-time data synchronization and scalable architecture revolutionized how we manage our practice.",
  },
];

function initials(name: string) {
  return name
    .replace(/^(Hon\.|Chief|Dr\.)\s+/, "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function Author({ name, role }: { name: string; role: string }) {
  return (
    <div className='flex items-center gap-3'>
      <span className='grid size-10 place-items-center rounded-full border border-border bg-muted font-mono text-xs font-medium'>
        {initials(name)}
      </span>
      <div>
        <p className='text-sm font-medium'>{name}</p>
        <p className='text-sm text-muted-foreground'>{role}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section id='testimonials' className='relative py-24 sm:py-32'>
      <Container>
        <SectionHeading
          index='03'
          eyebrow='Testimonials'
          title={
            <>
              What clients say{" "}
              <span className='text-muted-foreground'>after launch day.</span>
            </>
          }
        />

        <div className='mt-16 grid gap-5 lg:grid-cols-5'>
          <Reveal className='lg:col-span-3'>
            <figure className='relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10'>
              <div className='pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/15 blur-3xl' />
              <Quote className='size-8 text-primary' strokeWidth={1.5} />
              <blockquote className='relative mt-8 text-pretty text-xl font-medium leading-relaxed tracking-tight sm:text-2xl'>
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className='mt-10 border-t border-border pt-6'>
                <Author name={featured.name} role={featured.role} />
              </figcaption>
            </figure>
          </Reveal>

          <div className='grid gap-5 lg:col-span-2'>
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={0.08 * (i + 1)} className='h-full'>
                <figure className='flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7'>
                  <blockquote className='text-pretty leading-relaxed text-muted-foreground'>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className='mt-6'>
                    <Author name={t.name} role={t.role} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
