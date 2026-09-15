import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";
import { EASE, SectionHeader } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="03 // TRACK RECORD" title="Work history" testid="experience-header" />

        <div className="relative space-y-10 before:absolute before:inset-y-0 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-cyber/50 before:via-white/10 before:to-transparent md:before:left-[9px]">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="relative pl-10 md:pl-14"
              data-testid={`experience-item-${job.company.toLowerCase()}`}
            >
              <span
                className={`absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 md:h-[19px] md:w-[19px] ${
                  job.current ? "border-cyber bg-cyber/20 shadow-[0_0_16px_rgba(0,240,255,0.4)]" : "border-slate-600 bg-[#0D121F]"
                }`}
              >
                {job.current && <span className="h-1.5 w-1.5 rounded-full bg-cyber" />}
              </span>

              <div className="group rounded-2xl border border-white/8 bg-[#0D1424]/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyber/25">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-xl font-semibold text-slate-50">{job.role}</h3>
                      {job.current && (
                        <span className="rounded-full bg-mint/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-mint">
                          MOST RECENT
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-cyber">
                      <Briefcase size={13} />
                      {job.company}
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">{job.badge}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs tracking-wider text-slate-300">{job.period}</p>
                    <p className="mt-1 flex items-center justify-end gap-1.5 text-xs text-slate-500">
                      <MapPin size={11} />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-cyber/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
