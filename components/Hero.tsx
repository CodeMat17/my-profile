"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden py-8'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 bg-gradient-radial from-primary/20 to-background'
      />

      <div className='container mx-auto px-4 z-10 relative'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex-1 text-center lg:text-left order-2 lg:order-1'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
              <Sparkles className='w-4 h-4 text-primary' />
              <span className='text-sm font-medium'>
                Available to create Projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-3xl md:text-4xl font-bold mb-2'>
              <span className='bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                I&apos;m Matthew - &ldquo;CodeMat&rdquo;
              </span>

             
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-xl md:text-2xl font-semibold mb-6 text-primary'>
              A Full Stack Developer
            </motion.h2>

            {/* Main Value Proposition */}
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
                Dedicated To Crafting Digital Excellence
              </span>
            </motion.h3>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0'>
              With over 13 years of expertise in cutting-edge technologies, I
              transform visionary ideas into exceptional digital experiences
              that deliver measurable business results. From sleek, intuitive
              web applications to innovative mobile solutions, I bring passion,
              precision, and strategic insight to every project.
            </motion.p>

            {/* Key Achievements */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className='flex flex-wrap gap-4 mb-8 justify-center lg:justify-start'>
              <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20'>
                <Award className='w-4 h-4 text-green-500' />
                <span className='text-sm font-medium text-green-600 dark:text-green-400'>
                  Certified MWS
                </span>
              </div>
              <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20'>
                <Zap className='w-4 h-4 text-blue-500' />
                <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                  50+ Projects Delivered
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                size='lg'
                asChild
                className='group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300'>
                <Link href='#portfolio' className='flex items-center gap-2'>
                  View Award-Winning Work
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className='border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300'>
                <Link href='#contact'>Start Your Project</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className='mt-8 pt-6 border-t border-border/50'>
              <p className='text-sm text-muted-foreground mb-3'>
                Trusted by innovative companies worldwide
              </p>
              <div className='flex items-center justify-center gap-6 text-xs text-muted-foreground'>
                <span>✓ 100% Client Satisfaction</span>
                <span>✓ 99.9% Uptime Guarantee</span>
                <span>✓ 24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex-1 flex justify-center lg:justify-end order-1 lg:order-2'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className='relative'>
              {/* Glow Effect */}
              <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl' />

              <Image
                src='/dev.webp'
                alt='Matthew Chukwu (CodeMat) - Award-Winning Full Stack Developer'
                width={400}
                height={400}
                className='relative rounded-full shadow-2xl border-4 border-primary object-cover w-80 h-80 md:w-96 md:h-96'
              />

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='absolute top-6 left-6 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg'>
                <span className='text-xs font-medium text-primary'>
                  Next.js Expert
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='absolute bottom-6 right-6 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg'>
                <span className='text-xs font-medium text-primary'>
                  TypeScript
                </span>
              </motion.div>

              {/* Floating elements around the image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/30 rounded-full'
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className='absolute -bottom-4 -left-4 w-12 h-12 border-2 border-primary/30 rounded-full'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent'
      />
    </section>
  );
}

export default Hero;
