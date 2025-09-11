"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end solutions using Next.js and React for dynamic, scalable web applications.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
  {
    title: "Mobile Web Specialization",
    description:
      "Optimized, responsive web apps that perform flawlessly on mobile devices.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
  {
    title: "Real-time Applications",
    description:
      "Interactive apps with real-time databases and features for engaging user experiences.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
  {
    title: "SEO & Performance Optimization",
    description: "Ensuring your site ranks high and loads lightning-fast.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
  {
    title: "Strategic Technology Consulting",
    description:
      "Aligning tech solutions with business strategy for maximum impact.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
  {
    title: "Mentoring & Training",
    description:
      "Guiding teams and individuals in modern web development practices.",
    icon: <CheckCircle2 className='h-6 w-6 text-primary' />,
  },
];

function Services() {
  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-center mb-12'>
          Services
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className='h-full'>
                <CardHeader>
                  <div className='mb-2'>{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
