"use client";

import { useState } from "react";
import { FiCopy, FiCheck, FiMail, FiDownload } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import RevealOnce from "@/components/RevealOnce";

export default function ContactSection() {
  const email = "Myriamchmkh@gmail.com";
  const github = "https://github.com/mchamakh";
  const linkedin = "https://www.linkedin.com/in/myriam-chamakh-1a217a302/";
  const cvUrl = "/cv/Myriam_Chamakh_CV.pdf";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="relative px-4 pb-24 pt-24 scroll-mt-28">
      {/* bg glow */}
      <RevealOnce>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c0feff]/12 blur-3xl" />
          <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="clash text-5xl sm:text-6xl text-[#c0feff] font-semibold">
              Contact
            </h2>
            <p className="mt-4 text-zinc-400">
              Pour une alternance, un projet, ou juste échanger.
            </p>
          </div>

          {/* main card */}
          <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            {/* inner glow */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#c0feff]/10 blur-3xl" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 md:items-stretch">
              {/* LEFT: email split card */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-2 text-sm text-zinc-400">
                      <FiMail className="text-zinc-400" />
                      Mon email
                    </p>

                    <p className="mt-2 text-lg font-medium text-white break-all">
                      {email}
                    </p>
                    <p className="sr-only" aria-live="polite">
                      {copied ? "Email copié dans le presse-papiers" : ""}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className={[
                      "group inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition",
                      copied
                        ? "border-[#c0feff]/40 bg-[#c0feff]/10 text-[#c0feff]"
                        : "border-white/10 bg-white/5 text-zinc-200 hover:border-[#c0feff]/30 hover:bg-white/10",
                    ].join(" ")}
                    aria-label="Copier l'email"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="text-base" />
                        Copié
                      </>
                    ) : (
                      <>
                        <FiCopy className="text-base" />
                        Copier
                      </>
                    )}
                  </button>
                </div>

                {/* little divider + hint */}
                <div className="mt-5 h-px w-full bg-white/10" />
                <div className="mt-4 text-sm text-zinc-300"></div>
              </div>

              {/* RIGHT: links */}
              <div className="flex flex-col gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200
                           hover:border-[#c0feff]/35 hover:bg-black/30 hover:-translate-y-0.5 active:translate-y-0
                           hover:shadow-[0_0_0_1px_rgba(192,254,255,0.12)] transition"
                >
                  <div className="flex items-center gap-3">
                    <SiGithub className="text-lg text-zinc-200 group-hover:text-white transition" />
                    <div className="flex-1">
                      <span className="text-white font-medium">GitHub</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-[#c0feff] transition">
                      →
                    </span>
                  </div>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200
                           hover:border-[#c0feff]/35 hover:bg-black/30 hover:-translate-y-0.5 active:translate-y-0
                           hover:shadow-[0_0_0_1px_rgba(192,254,255,0.12)] transition"
                >
                  <div className="flex items-center gap-3">
                    <SiLinkedin className="text-lg text-zinc-200 group-hover:text-white transition" />
                    <div className="flex-1">
                      <span className="text-white font-medium">LinkedIn</span>
                    </div>
                    <span className="text-zinc-500 group-hover:text-[#c0feff] transition">
                      →
                    </span>
                  </div>
                </a>

                <a
                  href={cvUrl}
                  download
                  className="group rounded-3xl bg-[#c0feff] px-5 py-4 text-sm font-medium text-black
                           hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition"
                >
                  <div className="flex items-center gap-3">
                    <FiDownload className="text-lg text-black/80" />
                    <div className="flex-1">
                      Télécharger mon CV
                      <span className="block mt-1 text-xs text-black/70 font-normal">
                        PDF • 1 page
                      </span>
                    </div>
                    <span className="text-black/70 group-hover:text-black transition">
                      →
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnce>
    </section>
  );
}
