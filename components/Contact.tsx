"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock, Loader2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Container, Eyebrow, Reveal } from "./Section";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Toast = typeof import("sonner").toast;

// sonner is imported on demand so it stays out of the initial bundle.
const toast = {
  error: (...args: Parameters<Toast["error"]>) => void import("sonner").then((m) => m.toast.error(...args)),
  success: (...args: Parameters<Toast["success"]>) => void import("sonner").then((m) => m.toast.success(...args)),
};

const topics = ["New product build", "Contract role", "Technical advisory", "Something else"];

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-[15px] shadow-none focus-visible:border-primary/60 focus-visible:ring-primary/20 dark:bg-background/40";

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please choose what you'd like to discuss");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@matthewchukwu.dev",
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("API Error:", responseData);
        throw new Error(responseData.error || "Failed to send message");
      }

      toast.success("Message sent", {
        description: "Thanks — I'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(
        typeof error === "object" && error !== null && "message" in error
          ? (error.message as string)
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id='contact' className='relative overflow-hidden border-t border-border py-24 sm:py-32'>
      <div
        aria-hidden
        className='pointer-events-none absolute -left-40 top-20 size-[36rem] rounded-full bg-primary/10 blur-[120px]'
      />
      <Container className='relative'>
        <div className='grid gap-14 lg:grid-cols-12 lg:gap-16'>
          <Reveal className='lg:col-span-5'>
            <Eyebrow index='06'>Contact</Eyebrow>
            <h2 className='mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl'>
              Let&apos;s build something <span className='text-signature'>that lasts.</span>
            </h2>
            <p className='mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground'>
              Tell me about your product, team or challenge. I&apos;ll reply with
              next steps and a time for a short intro call.
            </p>

            <ul className='mt-10 space-y-5 border-t border-border pt-8'>
              <li>
                <a
                  href='mailto:hello@matthewchukwu.dev'
                  className='group flex items-center gap-4'>
                  <span className='grid size-10 place-items-center rounded-full border border-border'>
                    <Mail className='size-4 text-primary' />
                  </span>
                  <span className='text-lg font-medium'>
                    hello@matthewchukwu.dev
                    <ArrowUpRight className='ml-1 inline size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                  </span>
                </a>
              </li>
              <li className='flex items-center gap-4 text-muted-foreground'>
                <span className='grid size-10 place-items-center rounded-full border border-border'>
                  <MapPin className='size-4 text-primary' />
                </span>
                Abuja, Nigeria — working with clients worldwide
              </li>
              <li className='flex items-center gap-4 text-muted-foreground'>
                <span className='grid size-10 place-items-center rounded-full border border-border'>
                  <Clock className='size-4 text-primary' />
                </span>
                WAT (UTC+1) — overlaps with Europe &amp; US East
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className='lg:col-span-7'>
            <form
              onSubmit={handleSubmit}
              noValidate
              className='rounded-3xl border border-border bg-card/70 p-6 shadow-2xl shadow-black/5 backdrop-blur sm:p-10 dark:shadow-black/30'>
              <fieldset>
                <legend className='text-sm font-medium'>What would you like to discuss?</legend>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {topics.map((topic) => {
                    const active = formData.subject === topic;
                    return (
                      <button
                        key={topic}
                        type='button'
                        aria-pressed={active}
                        onClick={() => setFormData((prev) => ({ ...prev, subject: topic }))}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                        )}>
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className='mt-8 grid gap-6 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    autoComplete='name'
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='you@company.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className='mt-6 space-y-2'>
                <Label htmlFor='message'>Project details</Label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='What are you building, where are you now, and what does success look like?'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className={cn(fieldClass, "h-auto min-h-36 py-3")}
                />
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='group mt-8 h-12 w-full rounded-full text-[15px] sm:w-auto sm:px-8'>
                {isSubmitting ? (
                  <>
                    <Loader2 className='size-4 animate-spin' />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
