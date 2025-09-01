"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Heritage Cooperative App",
    description:
      "A comprehensive fintech platform for a cooperative society featuring member management, savings tracking, investment portfolios, loan applications, and financial reporting. Built with modern technologies for secure and scalable financial operations.",
    image: "/heritage.webp",
    tech: ["React", "Next.js", "Convex", "Clerk", "Squadco", "Tailwind"],
    // link: "https://heritage-cooperative.com.ng",
    link: "",
  },
  {
    title: "Threescore Exquisite Collections",
    description:
      "A comprehensive travel and hospitality platform for exceptional travel services across Kenya, East Africa, and beyond. Features safari planning, city escapes, group retreats, and romantic getaways with personalized booking experiences.",
    image: "/threescore.webp",
    tech: ["React", "Next.js", "Convex", "Clerk", "Squadco", "Tailwind"],
    link: "https://threescoretours.com",
  },
  {
    title: "Postgraduate School Portal",
    description:
      "A comprehensive university portal for postgraduate programs, featuring program management, student applications, course registration, and academic administration for the Postgraduate School.",
    image: "/pg.webp",
    tech: ["React", "Next.js", "Convex", "Clerk", "Tailwind"],
    link: "https://pg.gouni.edu.ng",
  },
];

function Portfolio() {
  return (
    <section id='portfolio' className='py-20 bg-muted/50'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-center mb-12'>
          Portfolio <br />{" "}
          <span className='font-normal text-lg text-muted-foreground'>
            Selected projects
          </span>
        </motion.h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className='overflow-hidden w-full h-full pt-0'>
                <div className='relative w-full aspect-video'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cove object-center'
                  />
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant='secondary'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {!project.link ? (
                    <Button>Under Reconstruction</Button>
                  ) : (
                    <Button asChild>
                      <Link href={project.link} target='_blank'>
                        View Project
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
