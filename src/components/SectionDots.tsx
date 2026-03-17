"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Accueil" },
  { id: "projets", label: "Projets" },
  { id: "apropos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 sm:hidden">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          className="group flex items-center justify-end gap-2"
        >
          {/* label au hover */}
          <span className="opacity-0 group-hover:opacity-100 transition text-xs text-white/60 clash">
            {label}
          </span>
          {/* dot */}
          <span
            className={[
              "block w-2 h-2 rounded-full transition-all duration-300",
              active === id
                ? "bg-[#c0feff] scale-125"
                : "bg-white/30 hover:bg-white/60",
            ].join(" ")}
          />
        </a>
      ))}
    </div>
  );
}
