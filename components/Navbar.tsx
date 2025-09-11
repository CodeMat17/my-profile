"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-background/80 backdrop-blur-md border-b border-border/30"
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href='/' className='flex items-center space-x-2'>
                <span className='text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
                  CodeMat
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }} className="mr-4 flex items-center justify-center">
                {/* <ModeToggle /> */}
                <AnimatedThemeToggler />
              </motion.div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link href={item.href}>
                    <Button
                      variant='ghost'
                      className='relative group overflow-hidden'>
                      <span className='relative z-10'>{item.label}</span>
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10'
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}>
                <Link href='#contact'>
                  <Button
                    variant='default'
                    className='bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90'>
                    Hire Me
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center space-x-2'>
              {/* <ModeToggle /> */}
              <AnimatedThemeToggler />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className='p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors'
                aria-label='Toggle menu'>
                <AnimatePresence mode='wait'>
                  {isOpen ? (
                    <motion.div
                      key='close'
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <X className='h-5 w-5' />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='menu'
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}>
                      <Menu className='h-5 w-5' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className='h-16'></div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden'
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className='fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-xl border-l border-border/50 z-50 md:hidden'>
            <div className='p-6 space-y-6'>
              {/* Mobile Navigation Items */}
              <div className='space-y-2'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className='block px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors text-lg font-medium'>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className='pt-4 border-t border-border/30'>
                <p className='text-sm text-muted-foreground text-center mb-3'>
                  Ready to start your project?
                </p>
                <Link href='#contact' onClick={toggleMenu}>
                  <Button
                    variant='default'
                    className='w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg py-6'>
                    Hire Me
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
