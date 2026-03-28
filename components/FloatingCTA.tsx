"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2'>
          {/* Tooltip label */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className='flex items-center gap-2 px-4 py-2 rounded-full bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl text-sm font-medium whitespace-nowrap'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            Available for hire · Let&apos;s talk!
            <button
              onClick={() => setDismissed(true)}
              className='ml-1 text-muted-foreground hover:text-foreground transition-colors'
              aria-label='Dismiss'>
              <X className='w-3.5 h-3.5' />
            </button>
          </motion.div>

          {/* Main button */}
          <Link href='#contact'>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className='w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-500 text-primary-foreground flex items-center justify-center shadow-2xl hover:shadow-primary/40 transition-shadow duration-300'
              aria-label='Contact me'>
              <MessageCircle className='w-6 h-6' />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingCTA;
