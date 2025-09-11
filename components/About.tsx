"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Globe, Users, Zap } from "lucide-react";

function About() {
  const achievements = [
    {
      icon: Award,
      title: "Certified MWS",
      description:
        "Mobile Web Specialist - MWS, with expertise in progressive web apps",
    },
    {
      icon: Users,
      title: "Mentor & Community Leader",
      description:
        "Facilitated meetups across Africa for Andela / Google Africa",
    },
    {
      icon: Globe,
      title: "13+ Years Experience",
      description: "Full-stack development with focus on scalable solutions",
    },
    {
      icon: Zap,
      title: "50+ Projects Delivered",
      description: "Successfully completed projects for diverse industries",
    },
  ];

  return (
    <section id='about' className='py-20 bg-muted/50'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
              Why Choose
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              CodeMat?
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            A proven track record of delivering exceptional digital solutions
            that drive business growth and exceed expectations.
          </p>
        </motion.div>

        {/* Key Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-center p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4'>
                <achievement.icon className='w-8 h-8 text-primary' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                {achievement.title}
              </h3>
              <p className='text-muted-foreground text-sm'>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='max-w-4xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-12'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>
                Transforming Ideas Into Digital Reality
              </h3>
              <p className='text-lg mb-6 leading-relaxed'>
                A Full Stack Developer and Mobile Web Specialist with over 13
                years of experience crafting exceptional digital experiences. My
                passion lies in transforming visionary business ideas into
                powerful, scalable web applications that drive measurable
                results.
              </p>
              <p className='text-lg mb-6 leading-relaxed'>
                As a{" "}
                <span className='text-primary font-semibold'>
                  certified Mobile Web Specialist
                </span>
                , I specialize in building progressive web applications that
                bridge the gap between web and mobile experiences, ensuring your
                users get the best possible experience across all devices.
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold mb-1'>
                    Cutting-Edge Technology Stack
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Next.js, TypeScript, React, Node.js, and modern cloud
                    infrastructure
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold mb-1'>
                    Performance & SEO Optimized
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    Lighthouse 95+ scores, fast loading times, and search engine
                    optimization
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <CheckCircle className='w-6 h-6 text-green-500 mt-1 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold mb-1'>Security & Scalability</h4>
                  <p className='text-muted-foreground text-sm'>
                    Enterprise-grade security, scalable architecture, and 99.9%
                    uptime
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-bold'>
              Beyond Code: Strategic Leadership
            </h3>
            <p className='text-lg leading-relaxed'>
              My journey extends beyond technical expertise. I completed the
              prestigious{" "}
              <span className='text-primary font-semibold'>
                Policy, Strategy, and Leadership Course (PSLC 20)
              </span>{" "}
              at the National Institute for Policy and Strategic Studies (NIPSS)
              in Kuru, Jos, Nigeria. This unique combination of technical
              mastery and strategic thinking enables me to align technology
              solutions with broader business objectives, ensuring your digital
              investments drive long-term success.
            </p>
            <p className='text-lg leading-relaxed'>
              As a dedicated mentor and community leader, I&apos;ve facilitated
              numerous meetups across Africa sponsored by Google Africa through
              the Andela Learning Community, ALC, program. This experience has
              taught me the importance of knowledge sharing and building the
              next generation of developers, while also keeping me at the
              forefront of emerging technologies and best practices.
            </p>
            <p className='text-lg leading-relaxed'>
              <span className='text-primary font-semibold'>
                Ready to transform your vision into reality?
              </span>{" "}
              Let&apos;s collaborate to create something extraordinary that will
              set your business apart in the digital landscape. Contact me at{" "}
              <a
                href='mailto:email@matthewchukwu.com'
                className='text-blue-600'>
                email@matthewchukwu.com
              </a>{" "}
              to start your journey toward digital excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
