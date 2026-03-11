"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { flushSync } from "react-dom";
const links = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* DESKTOP */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
        <div className="px-4 py-2 rounded-full hover:bg-white/8 transition">
          <nav className="clash font-semibold flex items-center gap-2 text-sm text-white/80">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "px-4 py-2 rounded-full transition",
                    "hover:text-[#c0feff]",
                    active
                      ? "text-white bg-white/8 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20"
                      : "border border-transparent",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MOBILE — bouton burger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed top-5 right-5 z-50 sm:hidden p-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white"
        aria-label="Menu"
      >
        {open ? <HiX size={20} /> : <HiMenu size={20} />}
      </button>

      {/* MOBILE — menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 sm:hidden"
          style={{ viewTransitionName: "none" }}
        >
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <button
                key={l.href}
                onClick={() => {
                  flushSync(() => setOpen(false));
                  router.push(l.href);
                }}
                className={[
                  "clash text-3xl font-semibold transition",
                  active ? "text-[#c0feff]" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
