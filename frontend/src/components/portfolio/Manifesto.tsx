import { motion } from "framer-motion";
import { MANIFESTO, PROFILE } from "@/data/portfolio";
import { EASE, Reveal, SectionHeader } from "./Reveal";

export function Manifesto() {
  return (
    <section id="about" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-testid="about-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="01 // PHILOSOPHY" title="The way I work" testid="about-header" />

        <Reveal delay={0.15}>
          <p className="mb-16 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
            Most recently, I interned as a{" "}
            <span className="text-slate-100 font-medium">Technical Consultant at inMorphis</span>, configuring and
            testing ServiceNow workflows across ESM and CSM for enterprise clients. Before that, at{" "}
            <span className="text-slate-100 font-medium">Bluestock</span>, I built an IPO web application and RESTful
            API with Python, Django, and PostgreSQL. Three principles run through everything I ship:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MANIFESTO.map((chapter, i) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/8 bg-[#0D1424]/60 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-cyber/30"
              data-testid={`manifesto-chapter-${chapter.number}`}
            >
              <span className="font-mono text-4xl font-light text-cyber/30 transition-colors duration-300 group-hover:text-cyber">
                {chapter.number}
              </span>
              <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-slate-100">
                {chapter.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{chapter.description}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-slate-500 mr-2">TOP SKILLS —</span>
            {["Python", "SQL", "Web Development", "SDLC", "Data Analysis"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-cyber/20 bg-cyber/5 px-4 py-1.5 text-xs font-medium text-cyber"
              >
                {s}
              </span>
            ))}
            <span className="ml-auto hidden font-mono text-[10px] tracking-[0.2em] text-slate-600 md:block">
              {PROFILE.domain.toUpperCase()}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
