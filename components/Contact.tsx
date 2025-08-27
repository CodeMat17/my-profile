"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Minus, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
      toast.error("Subject is required");
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
          to:
            process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ask@soft-lutions.com.ng",
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("API Error:", responseData);
        throw new Error(responseData.error || "Failed to send message");
      }

      toast.success("Done!", {
        description: "Message sent successfully to CodeMat",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccessModalOpen(true);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold text-center mb-12'>
          Get in Touch
        </motion.h2>
        <div className='max-w-md mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='your@email.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='space-y-1.5'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                id='subject'
                name='subject'
                placeholder='Your message subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className='space-y-1.5'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                placeholder='How can I help you?'
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <Button type='submit' disabled={isSubmitting} className='w-full'>
              {isSubmitting ? (
                <>
                  <Minus className='mr-2 h-4 w-4 animate-spin' />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className='mr-2 h-4 w-4' />
                  Send Message
                </>
              )}
            </Button>
          </form>
          <p className='text-center mt-4'>
            Or email directly at ask@soft-lutions.com.ng
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
