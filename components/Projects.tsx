"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "StaffSync HR Platform",
    description:
      "Comprehensive HR management system for modern organizations — staff management, leave tracking, analytics, payroll, and mobile-first design. A complete digital transformation in one platform.",
    image: "/staff_sync.webp",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Shadcn/UI"],
    link: "https://staff-sync-demo.vercel.app/",
    category: "Enterprise SaaS",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Heritage Cooperative App",
    description:
      "Fintech platform for a cooperative society — member management, savings, investment portfolios, loan applications, and financial reporting. Secure, real-time, and fully scalable.",
    image: "/heritage.webp",
    tech: ["Next.js", "Convex", "Clerk", "Squadco", "Tailwind"],
    link: "",
    category: "Fintech",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Threescore Exquisite Collections",
    description:
      "Premium travel & hospitality platform for Kenya and East Africa — safari planning, city escapes, group retreats, and romantic getaways with personalized booking experiences.",
    image: "/threescore.webp",
    tech: ["Next.js", "Convex", "Clerk", "Squadco", "Tailwind"],
    link: "https://threescoretours.com",
    category: "Travel & Hospitality",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Postgraduate School Portal",
    description:
      "Full university portal for postgraduate programs — student applications, course registration, program management, and academic administration at scale.",
    image: "/pg.webp",
    tech: ["Next.js", "Convex", "Clerk", "Tailwind"],
    link: "https://pg.gouni.edu.ng",
    category: "Education",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Cinema Hub",
    description:
      "Full-featured movie discovery app — real-time search, intelligent filtering by genre, comprehensive movie details including cast, crew, production info, and trailers.",
    image: "/tmdb1.webp",
    tech: ["Next.js", "React", "TypeScript", "TMDB API", "Tailwind"],
    link: "https://cinemahub-demo.vercel.app",
    category: "Entertainment",
    color: "from-red-500/20 to-rose-500/20",
  },
];

function Projects() {
  return (
    <section id='projects' className='py-24 relative overflow-hidden'>
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
            Portfolio
          </span>
          <h2 className='text-4xl md:text-5xl font-black mb-5'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Projects That
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent'>
              Drive Real Results
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            From fintech to education, government portals to hospitality — each project built
            to perform, scale, and impress.
          </p>
        </motion.div>

        {/* Featured project - first item larger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-6'>
          <ProjectCard project={projects[0]} featured />
        </motion.div>

        {/* Grid: remaining projects */}
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mt-12'>
          <p className='text-muted-foreground mb-4'>
            These are just selected highlights — I&apos;ve delivered 50+ projects across industries.
          </p>
          <Button asChild size='lg' className='rounded-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all duration-300'>
            <Link href='#contact'>Discuss Your Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl ${
        featured ? "md:flex" : "flex flex-col"
      }`}>
      {/* Color glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Image */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          featured ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-video w-full"
        }`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover object-center group-hover:scale-105 transition-transform duration-700'
        />
        {/* Category badge on image */}
        <div className='absolute top-3 left-3'>
          <span className='px-2.5 py-1 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-sm border border-border/50'>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 p-6 flex flex-col ${featured ? "md:flex-1 md:justify-center" : "flex-1"}`}>
        <h3 className={`font-black mb-2 ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className='text-sm text-muted-foreground leading-relaxed mb-4 flex-1'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-1.5 mb-5'>
          {project.tech.map((tech) => (
            <Badge key={tech} variant='secondary' className='text-xs rounded-full'>
              {tech}
            </Badge>
          ))}
        </div>
        {project.link ? (
          <Button
            size='sm'
            asChild
            className='self-start rounded-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg transition-all duration-300 group/btn'>
            <Link href={project.link} target='_blank' className='flex items-center gap-2'>
              View Live Project
              <ArrowUpRight className='w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform' />
            </Link>
          </Button>
        ) : (
          <Button size='sm' variant='outline' className='self-start rounded-full opacity-60' disabled>
            <Lock className='w-3.5 h-3.5 mr-1.5' />
            Private / NDA
          </Button>
        )}
      </div>
    </div>
  );
}

export default Projects;
