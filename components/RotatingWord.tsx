"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const outcomes = ["scale.", "perform.", "last.", "convert."];

// Every word is stacked in the same grid cell, so the box is always as wide as the
// longest word and the headline never re-wraps (no layout shift) as words rotate.
export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setPhase("out");
      swap = setTimeout(() => {
        setIndex((i) => (i + 1) % outcomes.length);
        setPhase("in");
      }, 350);
    }, 2600);
    return () => {
      clearInterval(id);
      clearTimeout(swap);
    };
  }, []);

  return (
    <span className='relative inline-grid justify-items-center overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom lg:justify-items-start'>
      {outcomes.map((word, i) => (
        <span
          key={i === index ? `${word}-active` : word}
          aria-hidden={i !== index}
          className={cn(
            "text-signature [grid-area:1/1]",
            i !== index && "invisible",
            i === index && phase === "out" && "word-out",
            i === index && phase === "in" && "word-in",
          )}>
          {word}
        </span>
      ))}
    </span>
  );
}
