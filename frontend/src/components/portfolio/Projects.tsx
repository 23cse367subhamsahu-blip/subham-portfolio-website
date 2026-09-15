import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { EASE, SectionHeader } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/5 bg-[#090D16] px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-testid="projects-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="04 // CASE STUDIES" title="Featured engineering" testid="projects-header" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0D1424]/60 backdrop-blur-sm transition-colors duration-300 hover:border-cyber/30"
              data-testid={project.testid}
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyber/8 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

              <div className="flex items-center justify-between border-b border-white/8 px-7 py-4">
                <div className="flex items-center gap-3">
                  <FolderGit2 size={16} className="text-cyber" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                    PROJECT_{project.index} // {project.period.toUpperCase()}
                  </span>
                </div>
                <span className="font-mono text-2xl font-light text-cyber/25 transition-colors duration-300 group-hover:text-cyber/70">
                  {project.index}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-[10px] tracking-[0.25em] text-cyber">{project.category.toUpperCase()}</p>
                <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-50">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {project.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-[13px] leading-relaxed text-slate-400">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-cyber/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md border border-cyber/15 bg-cyber/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-cyber/90">
                      {s}
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
