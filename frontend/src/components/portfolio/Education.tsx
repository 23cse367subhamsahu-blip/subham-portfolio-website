import { GraduationCap, MapPin } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-white/5 bg-[#090D16] px-4 sm:px-6 lg:px-8 py-24 md:py-28" data-testid="education-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="06 // ACADEMIC BASE" title="Education" testid="education-header" />

        <Reveal>
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/8 bg-[#0D1424]/60 p-8 backdrop-blur-sm md:grid-cols-[1fr_1fr] md:p-10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyber/25 bg-cyber/8">
                <GraduationCap size={22} className="text-cyber" />
              </div>
              <h3 className="mt-6 font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-50">
                {EDUCATION.degree}
              </h3>
              <p className="mt-3 text-sm font-medium text-cyber">{EDUCATION.institution}</p>
              <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={12} />
                {EDUCATION.location}
              </p>
              <p className="mt-5 inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs tracking-wider text-slate-300" data-testid="education-timeline">
                {EDUCATION.timeline}
              </p>
            </div>
            <div className="md:border-l md:border-white/8 md:pl-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">CORE COURSEWORK</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION.coursework.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="h-1 w-1 rotate-45 bg-cyber/70" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
