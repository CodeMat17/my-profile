"use client";

import { motion } from "framer-motion";
import { Bot, Cloud, Code, Database, Shield, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive, performant UI that users love",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Progressive Web Apps", "Shadcn/UI"],
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Database,
    title: "Backend & Database",
    description: "Scalable, secure server-side solutions",
    skills: ["Node.js", "Convex", "Supabase", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-500",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent features powered by cutting-edge AI",
    skills: ["Claude API (Anthropic)", "OpenAI / GPT-4", "Vercel AI SDK", "AI Chatbots", "LLM Integration", "Smart Automation", "Prompt Engineering"],
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/20",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable deployment and cloud infrastructure",
    skills: ["AWS", "Vercel", "Serverless Architecture", "Microservices", "CI/CD Pipelines"],
    color: "from-orange-500 to-red-500",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Web",
    description: "App-quality experiences on any device",
    skills: ["PWA Development", "Mobile Optimization", "App Store Deployment", "Push Notifications", "Offline Support"],
    color: "from-teal-500 to-blue-500",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Shield,
    title: "Security & Performance",
    description: "Enterprise-grade security and blazing speed",
    skills: ["Authentication & Auth", "SSL/TLS", "Performance Audits", "Lighthouse 95+", "Security Best Practices"],
    color: "from-amber-500 to-yellow-500",
    glow: "group-hover:shadow-amber-500/20",
  },
];

function Skills() {
  return (
    <section id='skills' className='py-24 relative overflow-hidden'>
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
            Skills & Expertise
          </span>
          <h2 className='text-4xl md:text-5xl font-black mb-5'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Modern Stack.
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
              AI-Powered Results.
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Mastery of the technologies that matter — including the AI tools reshaping what&apos;s possible in 2025.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='group relative'>
              {/* Glow */}
              <div className={`absolute -inset-px bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

              <div className={`relative h-full rounded-2xl p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl ${category.glow} ${category.featured ? "ring-1 ring-purple-500/30" : ""}`}>
                {category.featured && (
                  <div className='absolute -top-3 left-6'>
                    <span className='px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'>
                      ✦ AI-Powered
                    </span>
                  </div>
                )}

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className='w-6 h-6 text-white' />
                </div>

                <h3 className='text-lg font-bold mb-1'>{category.title}</h3>
                <p className='text-sm text-muted-foreground mb-5 leading-relaxed'>{category.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className='px-2.5 py-1 rounded-lg text-xs font-medium bg-muted/50 border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='relative overflow-hidden rounded-3xl p-8 md:p-10 text-center border border-primary/20'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-500/10' />
          <div className='absolute inset-0 bg-grid opacity-30' />
          <div className='relative z-10'>
            <Bot className='w-10 h-10 text-primary mx-auto mb-4 opacity-80' />
            <h3 className='text-2xl md:text-3xl font-black mb-3'>
              The Difference? I Use AI to Build Faster.
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              While others are catching up, I&apos;m already shipping AI-powered features —
              giving your business a head start that compounds over time.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' className='rounded-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300'>
                <Link href='#contact'>Start Your AI-Powered Project</Link>
              </Button>
              <Button asChild size='lg' variant='outline' className='rounded-full'>
                <Link href='#projects'>See What I&apos;ve Built</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
