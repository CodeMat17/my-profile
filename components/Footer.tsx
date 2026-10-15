import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/matthewchukwu",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/matthewchukwu",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/codemat_dev",
    icon: Twitter,
    label: "Twitter/X",
  },
  {
    href: "mailto:hello@matthewchukwu.dev",
    icon: Mail,
    label: "Email",
  },
];

function Footer() {
  return (
    <footer className='relative overflow-hidden border-t border-border'>
      <div className='mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8'>
        <div className='flex flex-col justify-between gap-10 md:flex-row md:items-start'>
          <div className='max-w-sm'>
            <a href='#top' className='flex items-center gap-2.5'>
              <Image
                src='/logo.jpg'
                alt=''
                width={56}
                height={56}
                className='size-14 rounded-full object-cover object-top ring-1 ring-border'
              />
              <span className='text-[15px] font-semibold tracking-tight'>
                CodeMat<span className='text-primary'>.</span>
              </span>
            </a>
            <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
              Matthew Chukwu — independent senior software engineer. Building
              reliable web products from Abuja, Nigeria, for clients worldwide.
            </p>
          </div>

          <nav aria-label='Footer'>
            <ul className='grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className='text-muted-foreground transition-colors hover:text-foreground'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center'>
          <p className='font-mono text-xs text-muted-foreground'>
            © {new Date().getFullYear()} Matthew Chukwu. All rights reserved.
          </p>
          <div className='flex items-center gap-1'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel='noopener noreferrer'
                aria-label={social.label}
                className='grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground'>
                <social.icon className='size-4' />
              </a>
            ))}
            <a
              href='#top'
              aria-label='Back to top'
              className='ml-2 grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground'>
              <ArrowUp className='size-4' />
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark — drawn via ::before so it is not read as page text */}
      <div
        aria-hidden
        data-text='CodeMat'
        className='pointer-events-none select-none px-4 text-center text-[22vw] font-semibold leading-[0.75] tracking-[-0.06em] text-foreground/[0.04] before:content-[attr(data-text)] sm:px-6 lg:px-8'
      />
    </footer>
  );
}

export default Footer;
