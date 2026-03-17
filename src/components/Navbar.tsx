"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#projets", label: "Projets" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    ["home", "projets", "apropos", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="px-4 py-2 rounded-full hover:bg-white/8 transition">
          <nav className="clash font-semibold flex items-center gap-2 text-sm text-white/80">
            {links.map((l) => {
              const isActive = active === l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={[
                    "px-4 py-2 rounded-full transition",
                    "hover:text-[#c0feff]",
                    isActive
                      ? "text-white bg-white/8 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20"
                      : "border border-transparent",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
