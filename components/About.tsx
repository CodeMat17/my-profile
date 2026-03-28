"use client";

import { motion } from "framer-motion";
import { Award, Bot, Brain, CheckCircle, Globe, GraduationCap, MapPin, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certified MWS",
    description: "Google-certified Mobile Web Specialist — mastery in PWAs",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Users,
    title: "Google/Andela Mentor",
    description: "Facilitated dev meetups across Africa for Google Africa ALC",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Globe,
    title: "13+ Years Experience",
    description: "Full-stack excellence serving clients on 3 continents",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Zap,
    title: "50+ Projects Delivered",
    description: "From startups to government institutions — all delivered",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const strengths = [
  {
    icon: Brain,
    title: "AI-Powered Development",
    description: "Integrating AI tools to build smarter products faster — giving clients a decisive competitive edge.",
  },
  {
    icon: GraduationCap,
    title: "Strategic Leadership (NIPSS PSLC 20)",
    description: "Completed the prestigious Policy, Strategy & Leadership Course at Nigeria's National Institute for Policy and Strategic Studies, class 20.",
  },
  {
    icon: CheckCircle,
    title: "Performance & SEO Obsessed",
    description: "Lighthouse 95+ scores, lightning-fast load times, and SEO best practices built in from day one.",
  },
  {
    icon: MapPin,
    title: "Based in Abuja, Nigeria",
    description: "Africa-timezone availability, deep understanding of the Nigerian market, and global reach for international clients.",
  },
];

function About() {
  return (
    <section id='about' className='py-24 relative overflow-hidden'>
      {/* Section background */}
      <div className='absolute inset-0 bg-muted/30 dark:bg-muted/10' />
      <div className='absolute inset-0 bg-grid opacity-30' />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4'>
            About Me
          </span>
          <h2 className='text-4xl md:text-5xl font-black mb-5'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Why Top Companies
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
              Choose CodeMat
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            A rare combination of deep technical mastery, strategic business thinking, and AI expertise —
            built over 13 years of delivering excellence across Nigeria and beyond.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16'>
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group p-6 rounded-2xl border ${item.border} ${item.bg} hover:scale-105 transition-all duration-300`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                <item.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='font-bold text-base mb-2'>{item.title}</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className='text-2xl font-bold mb-5 flex items-center gap-3'>
              <span className='w-8 h-0.5 bg-primary' />
              The CodeMat Story
            </h3>
            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                I&apos;m <strong className='text-foreground'>Matthew Chukwu</strong>, a Full Stack Developer
                and Mobile Web Specialist based in <strong className='text-foreground'>Abuja, Nigeria</strong>.
                For over 13 years, I&apos;ve been the developer that businesses call when they need
                things done right — the first time.
              </p>
              <p>
                I specialize in <strong className='text-foreground'>Next.js, React, TypeScript</strong>, and
                modern cloud infrastructure, with a growing expertise in
                <strong className='text-foreground'> AI integration</strong> to build products that are faster, smarter, and more impactful than
                anything competitors can ship.
              </p>
              <p>
                As a <strong className='text-foreground'>certified Mobile Web Specialist</strong>, I build
                Progressive Web Apps that blur the line between web and native — delivering
                app-store-quality experiences without the friction.
              </p>
              <p>
                My work spans <strong className='text-foreground'>fintech, healthcare, education, hospitality,
                and HR</strong> — serving government institutions, cooperatives, universities, and
                startups across Nigeria and East Africa.
              </p>
            </div>

            {/* AI highlight */}
            <div className='mt-6 p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 flex items-start gap-3'>
              <Bot className='w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5' />
              <div>
                <p className='text-sm font-semibold text-foreground mb-1'>AI-First Development</p>
                <p className='text-sm text-muted-foreground'>
                  I actively integrate AI into every project — from AI-powered features to
                  AI-accelerated development workflows. You get modern, smarter products delivered faster.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-5'>
            <h3 className='text-2xl font-bold mb-5 flex items-center gap-3'>
              <span className='w-8 h-0.5 bg-primary' />
              What Sets Me Apart
            </h3>
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                  <item.icon className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-sm mb-1'>{item.title}</h4>
                  <p className='text-sm text-muted-foreground leading-relaxed'>{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className='mt-6 p-5 rounded-xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 text-center'>
              <p className='text-sm font-semibold text-foreground mb-1'>
                Ready to build something extraordinary?
              </p>
              <p className='text-xs text-muted-foreground mb-3'>
                Reach out at{" "}
                <a href='mailto:email@matthewchukwu.com' className='text-primary hover:underline font-medium'>
                  email@matthewchukwu.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
