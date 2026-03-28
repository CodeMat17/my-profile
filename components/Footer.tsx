import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
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
    href: "mailto:email@matthewchukwu.com",
    icon: Mail,
    label: "Email",
  },
];

function Footer() {
  return (
    <footer className='border-t border-border/50 bg-card/30 backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-12'>
        <div className='grid md:grid-cols-3 gap-10 mb-10'>
          {/* Brand */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center'>
                <span className='text-primary-foreground font-black text-sm'>C</span>
              </div>
              <span className='text-lg font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
                CodeMat
              </span>
            </div>
            <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
              Nigeria&apos;s leading Full Stack & AI Developer. Building world-class digital
              products from Abuja to the world.
            </p>
            <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
              <MapPin className='w-3.5 h-3.5 text-primary flex-shrink-0' />
              <span>Abuja, FCT, Nigeria 🇳🇬</span>
            </div>
            <div className='flex items-center gap-1.5 text-sm text-muted-foreground mt-1.5'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0' />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground'>
              Navigation
            </h3>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-sm font-bold uppercase tracking-widest mb-4 text-muted-foreground'>
              Get In Touch
            </h3>
            <div className='space-y-2 mb-5'>
              <a
                href='mailto:email@matthewchukwu.com'
                className='block text-sm text-muted-foreground hover:text-primary transition-colors'>
                email@matthewchukwu.com
              </a>
              <a
                href='mailto:ask@soft-lutions.com.ng'
                className='block text-sm text-muted-foreground hover:text-primary transition-colors'>
                ask@soft-lutions.com.ng
              </a>
            </div>
            <div className='flex gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='w-9 h-9 rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200'>
                  <social.icon className='w-4 h-4' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground'>
          <p>© {new Date().getFullYear()} Matthew Chukwu (CodeMat). All rights reserved.</p>
          <p>
            Built with{" "}
            <span className='text-primary font-medium'>Next.js 16</span>
        
           
            {" · "}
            <span className='text-green-500'>Abuja, Nigeria 🇳🇬</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
