"use client";

import { cn } from "@/lib/utils";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  const changeTheme = async () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    if (!buttonRef.current || !document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    await document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    }).ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  if (!mounted) return <div className='w-6 h-6' />;

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      aria-label='Toggle theme'
      className={cn(
        "p-1.5 rounded-lg hover:bg-muted/60 transition-colors duration-200",
        className,
      )}>
      {resolvedTheme === "dark" ? (
        <SunDim className='w-5 h-5' />
      ) : (
        <Moon className='w-5 h-5' />
      )}
    </button>
  );
};
