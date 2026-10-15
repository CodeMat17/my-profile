"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Toaster = dynamic(() => import("./ui/sonner").then((m) => m.Toaster), { ssr: false });

// Toasts are only needed after a form submit, so keep sonner off the critical
// path and mount it once the browser is idle.
export default function LazyToaster() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  return ready ? <Toaster /> : null;
}
