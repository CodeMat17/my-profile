"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className='w-8 h-8' />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label='Toggle theme'
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/60 transition-colors",
        className,
      )}>
      {resolvedTheme === "dark" ? (
        <Sun className='w-5 h-5' />
      ) : (
        <Moon className='w-5 h-5' />
      )}
    </button>
  );
};
