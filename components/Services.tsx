"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BookOpen,
  Cloud,
  Code2,
  LineChart,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications using Next.js 15, React 19, TypeScript, and modern cloud infrastructure. From idea to deployed product — built to scale.",
    highlights: ["Next.js & React", "TypeScript", "API Development", "Database Design"],
    color: "from-blue-500 to-cyan-500",
    badge: "Most Popular",
  },
  {
    icon: Bot,
    title: "AI Integration & Features",
    description:
      "Transform your product with intelligent AI features — chatbots, content generation, smart recommendations, and automation — using Claude, GPT-4, and the Vercel AI SDK.",
    highlights: ["Claude / GPT-4 Integration", "AI Chatbots", "Smart Automation", "Prompt Engineering"],
    color: "from-purple-500 to-pink-500",
    badge: "🔥 Hot",
  },
  {
    icon: Smartphone,
    title: "Mobile Web & PWA",
    description:
      "App-quality mobile experiences on the web. Progressive Web Apps that install, work offline, and feel native — without the app store friction.",
    highlights: ["PWA Development", "Offline Support", "Push Notifications", "App Store Deploy"],
    color: "from-green-500 to-teal-500",
    badge: null,
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description:
      "Lighthouse 95+ scores, lightning-fast load times, and technical SEO that gets you found first — in Abuja, Nigeria, and worldwide.",
    highlights: ["Core Web Vitals", "Technical SEO", "Speed Optimization", "Structured Data"],
    color: "from-amber-500 to-orange-500",
    badge: null,
  },
  {
    icon: LineChart,
    title: "Technology Consulting",
    description:
      "Strategic tech guidance for businesses in Nigeria and beyond. I align your technology stack and digital roadmap with your business goals for maximum ROI.",
    highlights: ["Tech Stack Selection", "Digital Strategy", "Cost Optimization", "Scalability Planning"],
    color: "from-red-500 to-rose-500",
    badge: null,
  },
  {
    icon: Cloud,
    title: "Cloud & Real-time Apps",
    description:
      "Deploy on AWS or Vercel with bulletproof infrastructure. Build real-time collaborative platforms, dashboards, and live data applications.",
    highlights: ["AWS & Vercel", "Real-time Databases", "Serverless", "Microservices"],
    color: "from-sky-500 to-blue-500",
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Mentoring & Training",
    description:
      "Upskill your team or kickstart your dev career. I've trained developers across Africa through Google's ALC/Andela program and private workshops.",
    highlights: ["1-on-1 Coaching", "Team Workshops", "Code Reviews", "Career Guidance"],
    color: "from-indigo-500 to-violet-500",
    badge: null,
  },
];

function Services() {
  return (
    <section id='services' className='py-24 relative overflow-hidden'>
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
            Services
          </span>
          <h2 className='text-4xl md:text-5xl font-black mb-5'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              What I Build
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
              For You
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Full-spectrum development services — from sleek frontends to AI-powered features —
            tailored to your business and budget.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className='group relative'>
              {/* Hover glow */}
              <div className={`absolute -inset-px bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

              <div className='relative h-full rounded-2xl p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300'>
                {service.badge && (
                  <div className='absolute -top-3 right-4'>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${service.color}`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className='w-6 h-6 text-white' />
                </div>

                <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed mb-4'>{service.description}</p>

                <ul className='space-y-1.5'>
                  {service.highlights.map((h) => (
                    <li key={h} className='flex items-center gap-2 text-xs text-muted-foreground'>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center'>
          <p className='text-muted-foreground mb-5 text-sm'>
            Not sure what you need? Let&apos;s talk — I&apos;ll help you figure out the right solution.
          </p>
          <Button asChild size='lg' className='rounded-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300'>
            <Link href='#contact'>Get a Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
