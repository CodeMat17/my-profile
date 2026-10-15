import { Container, Eyebrow, Reveal } from "./Section";

const credentials = [
  { title: "Google-certified Mobile Web Specialist", detail: "Progressive Web Apps & mobile performance" },
  { title: "Google Africa / Andela mentor", detail: "Led developer communities through the ALC programme" },
  { title: "NIPSS — PSLC 20", detail: "Policy, Strategy & Leadership Course, National Institute" },
  { title: "13+ years in production", detail: "Clients across Africa, Europe and North America" },
];

const principles = [
  {
    title: "Own the outcome",
    body: "I think in business results, not tickets. Every decision is weighed against what it does for your users and your roadmap.",
  },
  {
    title: "Ship, then sharpen",
    body: "Small, frequent releases with real feedback beat big reveals. You see working software early and often.",
  },
  {
    title: "Built to be handed over",
    body: "Typed, tested, documented code your team can extend with confidence — long after the engagement ends.",
  },
];

function About() {
  return (
    <section id='about' className='relative border-y border-border bg-muted/40 py-24 sm:py-32 dark:bg-card/40'>
      <Container>
        <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
          <div className='lg:col-span-5'>
            <div className='lg:sticky lg:top-28'>
              <Reveal>
                <Eyebrow index='01'>About</Eyebrow>
                <h2 className='mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl'>
                  The engineer teams call when it has to be{" "}
                  <span className='text-signature'>done right.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <Reveal className='space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground'>
              <p>
                I&apos;m <span className='text-foreground'>Matthew Chukwu</span> — a senior full-stack
                engineer based in Abuja, Nigeria, working with clients worldwide. For more than
                13 years I&apos;ve designed and shipped software for startups, universities,
                cooperatives and government institutions.
              </p>
              <p>
                My core is <span className='text-foreground'>Next.js, React, TypeScript and Node</span>,
                backed by modern data platforms and the cloud. Increasingly, I help teams put{" "}
                <span className='text-foreground'>AI into production</span> — not as a demo, but as
                features users rely on.
              </p>
              <p>
                As a freelancer, I work two ways: delivering complete products for clients, and
                embedding with engineering teams as a senior contractor who raises the bar from week one.
              </p>
            </Reveal>

            <Reveal delay={0.1} className='mt-12'>
              <dl className='grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2'>
                {credentials.map((c) => (
                  <div key={c.title} className='bg-background p-6'>
                    <dt className='font-medium'>{c.title}</dt>
                    <dd className='mt-1.5 text-sm text-muted-foreground'>{c.detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className='mt-14 space-y-8'>
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <div className='grid gap-2 border-t border-border pt-8 sm:grid-cols-[10rem_1fr] sm:gap-8'>
                    <h3 className='font-mono text-xs uppercase tracking-[0.2em] text-primary'>{p.title}</h3>
                    <p className='leading-relaxed text-muted-foreground'>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
