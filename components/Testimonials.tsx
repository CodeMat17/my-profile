"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hon. Dike",
    role: "CEO, Platmus Ltd",
    location: "Nigeria",
    quote:
      "Matthew's expertise in building scalable, real-time applications transformed our business operations. The platform he built handles thousands of transactions seamlessly, and the real-time features have given us a decisive competitive edge. His attention to detail and commitment to excellence is unmatched.",
    rating: 5,
    highlight: "Transformed our business operations",
  },
  {
    name: "Chief Theo Olukile",
    role: "Rtd. State Commissioner, ICPC",
    location: "Nigeria",
    quote:
      "Working with Matthew was a game-changer for our organization. He delivered a robust, secure platform that scaled perfectly with our growing needs. The real-time reporting and analytics features streamlined our operations significantly. His technical expertise and professional approach exceeded all expectations.",
    rating: 5,
    highlight: "Exceeded all expectations",
  },
  {
    name: "Dr. Charles Mbah",
    role: "Medical Doctor",
    location: "Nigeria",
    quote:
      "Matthew's development skills are exceptional. He built a comprehensive healthcare management system that's both intuitive and powerful. The real-time data synchronization and scalable architecture revolutionized how we manage our practice. His solutions are technically sound and incredibly user-friendly.",
    rating: 5,
    highlight: "Revolutionized our practice",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className='w-4 h-4 fill-amber-400 text-amber-400' />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section id='testimonials' className='py-24 relative overflow-hidden'>
      <div className='absolute inset-0 bg-muted/30 dark:bg-muted/10' />
      <div className='absolute inset-0 bg-grid opacity-20' />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4'>
            Client Reviews
          </span>
          <h2 className='text-4xl md:text-5xl font-black mb-5'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Don&apos;t Take
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
              My Word For It
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Leaders, executives, and professionals across Nigeria share their experience working with CodeMat.
          </p>

          {/* Aggregate rating */}
          <div className='flex items-center justify-center gap-3 mt-6'>
            <div className='flex gap-0.5'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className='w-5 h-5 fill-amber-400 text-amber-400' />
              ))}
            </div>
            <span className='text-2xl font-black'>5.0</span>
            <span className='text-muted-foreground text-sm'>/ 5.0 · 100% satisfaction rate</span>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative'>
              {/* Hover glow */}
              <div className='absolute -inset-px bg-gradient-to-br from-primary/30 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />

              <div className='relative h-full rounded-2xl p-6 border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 flex flex-col'>
                {/* Top: stars + quote icon */}
                <div className='flex items-start justify-between mb-4'>
                  <Stars count={t.rating} />
                  <Quote className='w-8 h-8 text-primary/20' />
                </div>

                {/* Highlight */}
                <p className='text-xs font-bold uppercase tracking-widest text-primary mb-3'>
                  &ldquo;{t.highlight}&rdquo;
                </p>

                {/* Quote */}
                <p className='text-sm text-muted-foreground leading-relaxed flex-1 mb-5'>
                  {t.quote}
                </p>

                {/* Author */}
                <div className='flex items-center gap-3 pt-4 border-t border-border/50'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm'>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className='text-sm font-bold leading-tight'>{t.name}</p>
                    <p className='text-xs text-muted-foreground'>{t.role}</p>
                    <p className='text-xs text-muted-foreground/60'>📍 {t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mt-12 flex flex-wrap gap-4 justify-center'>
          {[
            "✓ 100% Project Completion Rate",
            "✓ On-time Delivery",
            "✓ Post-launch Support",
            "✓ NDA Available",
          ].map((badge) => (
            <span
              key={badge}
              className='px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-card/50 text-muted-foreground'>
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
