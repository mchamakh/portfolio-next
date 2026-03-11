"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealOnce2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 50%",
            toggleActions: "play none none none", // ✅ pas de reverse
            once: true, // ✅ ne rejoue pas quand tu re-scroll
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
