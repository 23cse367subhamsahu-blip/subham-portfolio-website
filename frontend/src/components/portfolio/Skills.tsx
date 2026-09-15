import { motion } from "framer-motion";
import { BarChart3, Cloud, Code2, Cpu } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { EASE, SectionHeader } from "./Reveal";

const ICONS: Record<string, typeof Code2> = { code: Code2, chart: BarChart3, cloud: Cloud, cpu: Cpu };

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/5 bg-[#090D16] px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-testid="skills-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="02 // CAPABILITIES" title="Technical arsenal" testid="skills-header" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: gi * 0.1, ease: EASE }}
                className="rounded-2xl border border-white/8 bg-[#0D1424]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-cyber/25"
                data-testid={`skill-group-${group.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyber/25 bg-cyber/8">
                    <Icon size={18} className="text-cyber" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-100">{group.name}</h3>
                </div>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="group flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-cyber">
                          {skill.name}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{skill.detail}</p>
                      </div>
                      <span className="mt-0.5 shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-slate-400">
                        {skill.level.toUpperCase()}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
