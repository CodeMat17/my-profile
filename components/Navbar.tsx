"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={cn(
          "enter-header fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || isOpen
            ? "border-b border-border bg-background/75 backdrop-blur-xl"
            : "border-b border-transparent",
        )}>
        <nav className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <a href='#top' onClick={close} className='group flex items-center gap-2.5' aria-label='CodeMat home'>
            <Image
              src='/logo.jpg'
              alt=''
              width={56}
              height={56}
              className='size-14 rounded-full object-cover object-top ring-1 ring-border transition-transform group-hover:-rotate-6'
            />
            <span className='text-[15px] font-semibold tracking-tight'>
              CodeMat<span className='text-primary'>.</span>
            </span>
          </a>

          <ul className='hidden items-center gap-1 md:flex'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-1.5'>
            <AnimatedThemeToggler className='size-9 rounded-full' />
            <a
              href='#contact'
              className='hidden h-9 items-center gap-2 rounded-full border border-foreground/15 px-4 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10 sm:inline-flex'>
              <CalendarDays className='size-3.5 text-primary' />
              Book a call
            </a>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className='grid size-9 place-items-center rounded-full transition-colors hover:bg-foreground/5 md:hidden'
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}>
              {isOpen ? <X className='size-5' /> : <Menu className='size-5' />}
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className='h-16' />

      {isOpen && (
        <div
          id='mobile-menu'
          className='enter-fade fixed inset-x-0 bottom-0 top-16 z-40 bg-background/95 backdrop-blur-xl [--duration:0.2s] md:hidden'>
          <div className='flex h-full flex-col px-4 pb-8 pt-6 sm:px-6'>
            <ul className='divide-y divide-border border-y border-border'>
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className='enter-up [--distance:12px] [--duration:0.3s]'
                  style={{ "--delay": `${0.04 * i}s` } as React.CSSProperties}>
                  <a
                    href={item.href}
                    onClick={close}
                    className='flex items-center justify-between py-4 text-2xl font-semibold tracking-tight'>
                    {item.label}
                    <ArrowUpRight className='size-5 text-muted-foreground' />
                  </a>
                </li>
              ))}
            </ul>
            <div className='mt-auto'>
              <a
                href='#contact'
                onClick={close}
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary font-medium text-primary-foreground'>
                <CalendarDays className='size-4' />
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
