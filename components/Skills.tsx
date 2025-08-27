"use client";

import { motion } from "framer-motion";
import { Cloud, Code, Database, Shield, Smartphone } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive, and performant user interfaces",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Progressive Web Apps",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Scalable server-side solutions and data management",
      skills: [
        "Node.js",
        "Convex",
        "Supabase",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "REST APIs",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deployment automation and cloud infrastructure",
      skills: ["AWS", "Vercel", "Serverless", "Microservices"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile solutions",
      skills: [
        "PWA",
        "Mobile Optimization",
        "App Store Deployment",
        "Push Notifications",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Enterprise-grade security and optimization",
      skills: [
        "Authentication",
        "Authorization",
        "SSL/TLS",
        "Performance Optimization",
        "Security Audits",
      ],
      color: "from-teal-500 to-blue-500",
    },
  ];


  return (
    <section id='skills' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
              Technical
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              Excellence
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Mastery of cutting-edge technologies and proven methodologies to
            deliver exceptional digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative'>
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />

              <div className='relative bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl'>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold mb-3'>{category.title}</h3>
                <p className='text-muted-foreground mb-6'>
                  {category.description}
                </p>

                <div className='space-y-2'>
                  {category.skills.map((skill) => (
                    <div key={skill} className='flex items-center gap-2'>
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                      <span className='text-sm font-medium'>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

    

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-center mt-16'>
          <div className='bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl p-8 border border-primary/20'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Build Something Amazing?
            </h3>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
              Let&apos;s leverage this expertise to create a digital solution
              that will transform your business and delight your users.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300'>
                Start Your Project
              </button>
              <button className='border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300'>
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
