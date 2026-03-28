"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Bot, MapPin, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI Integration Expert",
  "Next.js Expert",
  "Mobile Web Specialist",
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className='text-primary'>
      {displayed}
      <span className='animate-[blink_1s_ease-in-out_infinite] text-primary/80'>|</span>
    </span>
  );
}

function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated background orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl'
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className='absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl'
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/8 blur-3xl'
        />
        <div className='absolute inset-0 bg-grid opacity-40' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl'>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5 text-sm font-medium'
              style={{
                background: "oklch(0.7 0.25 145 / 0.1)",
                borderColor: "oklch(0.7 0.25 145 / 0.3)",
                color: "oklch(0.7 0.25 145)",
              }}>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              Available for hire · Abuja, Nigeria 🇳🇬
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}>
              <p className='text-lg md:text-xl text-muted-foreground mb-1 font-medium'>
                Hello, I&apos;m
              </p>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-2 leading-none'>
                <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
                  Matthew
                </span>
              </h1>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none'>
                <span className='bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient'>
                  &ldquo;CodeMat&rdquo;
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-2xl md:text-3xl font-bold mb-5 h-10'>
              <TypingText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0'>
              13+ years crafting world-class digital experiences. I build
              scalable web applications, integrate cutting-edge AI, and
              transform bold ideas into products that drive real results.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className='flex flex-wrap gap-3 mb-8 justify-center lg:justify-start'>
              <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400'>
                <Award className='w-3.5 h-3.5' />
                Certified MWS
              </div>
              <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400'>
                <Zap className='w-3.5 h-3.5' />
                50+ Projects Delivered
              </div>
              <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-400'>
                <Bot className='w-3.5 h-3.5' />
                AI-Powered Solutions
              </div>
              <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-400'>
                <MapPin className='w-3.5 h-3.5' />
                Abuja, Nigeria
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                size='lg'
                asChild
                className='group relative overflow-hidden bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-primary/25 hover:shadow-2xl transition-all duration-300 text-base px-8'>
                <Link href='#contact' className='flex items-center gap-2'>
                  <Sparkles className='w-4 h-4' />
                  Hire Me Now
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className='border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 text-base px-8'>
                <Link href='#projects' className='flex items-center gap-2'>
                  View Projects
                </Link>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='mt-8 pt-6 border-t border-border/50'>
              <p className='text-xs text-muted-foreground mb-3 uppercase tracking-widest'>
                Trusted by organizations across Africa & beyond
              </p>
              <div className='flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-muted-foreground justify-center lg:justify-start'>
                <span>Platmus Ltd</span>
                <span className='text-border'>·</span>
                <span>GOUNI</span>
                <span className='text-border'>·</span>
                <span>NFVCB</span>
                <span>African Fabrics Ltd</span>
                <span className='text-border'>·</span>
                <span>Threescore Tours</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex-shrink-0 order-1 lg:order-2'>
            <div className='relative w-72 h-72 md:w-96 md:h-96'>
              {/* Outer glow */}
              <div className='absolute -inset-6 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl' />

              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 rounded-full border border-primary/20'
                style={{ margin: "-20px" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 rounded-full border border-blue-500/15'
                style={{ margin: "-40px" }}
              />

              {/* Profile image */}
              <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl glow-primary'>
                <Image
                  src='/dev.webp'
                  alt='Matthew Chukwu (CodeMat) - Full Stack Developer Abuja Nigeria'
                  fill
                  className='object-cover object-center'
                  priority
                />
              </div>

              {/* Floating badge: Next.js */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='absolute -top-2 -left-4 px-3 py-1.5 rounded-xl bg-background/90 dark:bg-card/90 backdrop-blur-sm border border-border shadow-lg text-xs font-semibold flex items-center gap-1.5'>
                <span className='w-2 h-2 rounded-full bg-blue-500' />
                Next.js 15
              </motion.div>

              {/* Floating badge: AI */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -bottom-2 -right-4 px-3 py-1.5 rounded-xl bg-background/90 dark:bg-card/90 backdrop-blur-sm border border-border shadow-lg text-xs font-semibold flex items-center gap-1.5'>
                <Bot className='w-3.5 h-3.5 text-purple-500' />
                AI Expert
              </motion.div>

              {/* Floating badge: Nigeria */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className='absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl bg-background/90 dark:bg-card/90 backdrop-blur-sm border border-border shadow-lg text-xs font-semibold'>
                🇳🇬 Abuja
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border border-border/50 rounded-2xl p-6 bg-card/30 backdrop-blur-sm'>
          {[
            { value: "13+", label: "Years Experience", color: "text-blue-500" },
            {
              value: "50+",
              label: "Projects Delivered",
              color: "text-green-500",
            },
            { value: "20+", label: "Technologies", color: "text-purple-500" },
            { value: "3", label: "Continents Served", color: "text-amber-500" },
          ].map((stat) => (
            <div key={stat.label} className='text-center'>
              <div
                className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className='text-xs md:text-sm text-muted-foreground font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade bottom */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none' />
    </section>
  );
}

export default Hero;
