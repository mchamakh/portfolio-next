import Reveal from "@/components/Reveal";

import {
  SiDocker,
  SiFigma,
  SiGo,
  SiNextdotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "NextJS", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: SiGo },
    { name: "SQLite", icon: SiSqlite },
    { name: "Docker", icon: SiDocker },
    { name: "Figma", icon: SiFigma },
  ];

  return (
    <Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-[#c0feff]/40 transition duration-300"
            >
              <Icon className="text-4xl mb-4 text-[#c0feff]" />
              <span className="text-sm font-medium text-zinc-200">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
