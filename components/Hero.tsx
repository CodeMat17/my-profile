import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, BadgeCheck, CalendarDays, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import RotatingWord from "./RotatingWord";

const socials = [
  { href: "https://github.com/matthewchukwu", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/matthewchukwu", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/codemat_dev", icon: Twitter, label: "Twitter/X" },
];

// Entrance animations are pure CSS so the hero paints before any JS hydrates.
const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

function FloatingChip({
  children,
  className,
  delay: d,
  drift,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  drift: number;
}) {
  return (
    <div className={`enter-up absolute ${className}`} style={delay(d)}>
      <div
        className='drift flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-foreground shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-black/45 dark:text-white dark:shadow-black/30'
        style={{ "--drift": `${drift}px` } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id='top'
      className='relative isolate -mt-16 overflow-hidden lg:flex lg:h-svh lg:min-h-[680px] lg:items-center'>
      {/* Backdrop: glow + grid. Top on mobile, right on desktop */}
      <div
        aria-hidden
        className='hero-backdrop pointer-events-none absolute inset-x-0 top-0 -z-20 h-[40rem] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[66%]'>
        <div className='hero-aurora absolute left-1/2 top-24 size-[24rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[110px] lg:left-[38%] lg:top-[14%] lg:size-[34rem] lg:translate-x-0' />
        <div className='absolute right-0 top-1/3 hidden size-[22rem] rounded-full bg-[var(--signature-2)] opacity-15 blur-[120px] lg:block' />
        <div className='bg-grid-fine absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)]' />
        <div className='bg-noise absolute inset-0 opacity-[0.04] mix-blend-overlay' />
      </div>

      {/* Portrait layer: fades down on mobile, fades left on desktop */}
      <div
        aria-hidden
        className='hero-photo enter-portrait pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto aspect-[1701/1625] w-full max-w-[34rem] lg:inset-x-auto lg:bottom-0 lg:right-0 lg:mx-0 lg:aspect-auto lg:w-[58%] lg:max-w-none'>
        <Image
          src='/hero-portrait.webp'
          alt=''
          fill
          preload
          fetchPriority='high'
          sizes='(min-width: 1024px) 58vw, (min-width: 544px) 544px, 100vw'
          className='object-contain object-top lg:object-bottom'
        />
      </div>

      {/* Desktop chips, aligned to the portrait layer */}
      <div className='pointer-events-none absolute bottom-0 right-0 top-16 hidden w-[58%] lg:block'>
        <FloatingChip className='left-[64%] top-[16%]' delay={1.1} drift={-8}>
          <BadgeCheck className='size-5 text-primary' />
          <span className='text-xs font-medium leading-tight'>
            Google-certified
            <br />
            <span className='text-muted-foreground dark:text-white/60'>
              Mobile Web Specialist
            </span>
          </span>
        </FloatingChip>
        <FloatingChip
          className='bottom-[24%] right-[5%]'
          delay={1.25}
          drift={8}>
          <span className='text-2xl font-semibold tracking-tight'>13+</span>
          <span className='font-mono text-[10px] uppercase leading-tight tracking-widest text-muted-foreground dark:text-white/60'>
            Years in
            <br />
            production
          </span>
        </FloatingChip>
      </div>

      <div className='mx-auto w-full max-w-7xl px-4 pb-16 pt-[calc(4rem+min(100vw,34rem)*0.86)] sm:px-6 lg:px-8 lg:pb-0 lg:pt-16'>
        <div className='text-center lg:max-w-[min(42rem,50%)] lg:text-left'>
          <p
            style={delay(0.1)}
            className='enter-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-[13px]'>
            Matthew Chukwu <span className='text-primary'>/</span> Senior
            software engineer
          </p>

          <h1
            style={delay(0.15)}
            className='enter-up mt-4 text-balance text-[clamp(2.4rem,9vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] lg:text-[min(5vw,8.4vh)]'>
            <span className='sr-only'>
              Matthew Chukwu, senior software engineer:{" "}
            </span>
            I turn ideas into products that <RotatingWord />
          </h1>

          <p
            style={delay(0.25)}
            className='enter-up mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0'>
            From first sketch to live product — scoping, design, build, payments
            and launch. Software solutions for startups and growing businesses,
            handled by one senior engineer.
          </p>

          <div
            style={delay(0.35)}
            className='enter-up mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <Button
              size='lg'
              asChild
              className='group h-12 w-full rounded-full px-7 text-[15px] shadow-lg shadow-primary/20 sm:w-auto'>
              <a href='#contact'>
                <CalendarDays className='size-4' />
                Book a call
                <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
              className='h-12 w-full rounded-full border-foreground/15 bg-background/40 px-7 text-[15px] backdrop-blur hover:bg-foreground/5 sm:w-auto dark:border-foreground/15 dark:bg-background/40'>
              <a href='#work'>See the work</a>
            </Button>
            <div className='mt-1 flex items-center gap-1 sm:ml-1 sm:mt-0'>
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  className='grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground'>
                  <Icon className='size-[18px]' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href='#work'
        style={delay(1.5)}
        className='enter-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground lg:flex'>
        <ArrowDown className='size-3.5 animate-bounce' />
        Scroll
      </a>
    </section>
  );
}

export default Hero;
