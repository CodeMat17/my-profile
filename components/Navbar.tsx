"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href='/' className='flex items-center gap-2'>
                <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-md'>
                  <span className='text-primary-foreground font-black text-sm'>C</span>
                </div>
                <span className='text-lg font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
                  CodeMat
                </span>
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <div className='hidden md:flex items-center gap-1'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}>
                  <Link href={item.href}>
                    <Button variant='ghost' size='sm' className='text-sm font-medium hover:text-primary transition-colors'>
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right: theme toggle + hire me + mobile menu */}
            <div className='flex items-center gap-2'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}>
                <AnimatedThemeToggler />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className='hidden md:block'>
                <Link href='#contact'>
                  <Button
                    size='sm'
                    className='bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all duration-300 font-semibold'>
                    Hire Me
                  </Button>
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className='md:hidden p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors'
                aria-label='Toggle menu'>
                <AnimatePresence mode='wait'>
                  {isOpen ? (
                    <motion.div
                      key='close'
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}>
                      <X className='h-5 w-5' />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='menu'
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}>
                      <Menu className='h-5 w-5' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Navbar spacer */}
      <div className='h-16' />

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden'
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className='fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-background/98 backdrop-blur-2xl border-l border-border/50 z-50 md:hidden shadow-2xl'>
            <div className='p-6 space-y-1'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.07 }}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className='flex items-center px-4 py-3 rounded-xl hover:bg-muted/60 transition-colors text-base font-medium'>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.35 }}
                className='pt-4 border-t border-border/40'>
                <p className='text-xs text-muted-foreground text-center mb-3'>
                  🟢 Available for hire in Abuja, Nigeria
                </p>
                <Link href='#contact' onClick={toggleMenu}>
                  <Button className='w-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all duration-300 font-semibold'>
                    Hire Me Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
