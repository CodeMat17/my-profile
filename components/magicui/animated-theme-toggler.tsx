"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type props = {
  className?: string;
};

// Icons switch via the `dark` class, so the button renders identically on the
// server and client — no mount placeholder, no layout shift.
export const AnimatedThemeToggler = ({ className }: props) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label='Toggle theme'
      className={cn(
        "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/60 transition-colors",
        className,
      )}>
      <Sun className='hidden w-5 h-5 dark:block' />
      <Moon className='w-5 h-5 dark:hidden' />
    </button>
  );
};
