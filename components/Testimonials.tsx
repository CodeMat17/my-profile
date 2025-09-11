"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hon. Dike",
    role: "CEO, Platmus Ltd",
    quote:
      "Matthew's expertise in building scalable, real-time applications transformed our business operations. The platform he built for us handles thousands of transactions seamlessly, and the real-time features have given us a competitive edge. His attention to detail and commitment to excellence is unmatched.",
  },
  {
    name: "Chief Theo Olukile",
    role: "Rtd State Commissioner, ICPC",
    quote:
      "Working with Matthew was a game-changer for our organization. He delivered a robust, secure platform that scaled perfectly with our growing needs. The real-time reporting and analytics features have streamlined our operations significantly. His technical expertise and professional approach exceeded all expectations.",
  },
  {
    name: "Dr. Charles Mbah",
    role: "Medical Doctor",
    quote:
      "Matthew's development skills are exceptional. He built a comprehensive healthcare management system that's both intuitive and powerful. The real-time patient data synchronization and scalable architecture have revolutionized how we manage our practice. His solutions are not just technically sound but also user-friendly.",
  },
];

function Testimonials() {
  return (
    <section id='testimonials' className='py-20 bg-muted/50'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-center mb-12'>
          What Clients Say
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className='h-full'>
                <CardContent className='p-6'>
                  <Quote className='h-8 w-8 text-primary mb-4' />
                  <p className='mb-4'>{testimonial.quote}</p>
                  <div>
                    <p className='font-semibold'>{testimonial.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
