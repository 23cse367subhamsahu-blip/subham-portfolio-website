import { motion } from "framer-motion";
import { Award, Bot, Brain, Cloud, Cpu, Database, LineChart, Network, Users, ExternalLink, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio";
import { EASE, SectionHeader } from "./Reveal";

const ICONS: Record<string, typeof Award> = {
  network: Network,
  users: Users,
  brain: Brain,
  cpu: Cpu,
  bot: Bot,
  database: Database,
  chart: LineChart,
  cloud: Cloud,
};

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-32" data-testid="certifications-section">
      <div className="mx-auto max-w-6xl">
        <SectionHeader overline="05 // VERIFIED CREDENTIALS" title="Seven industry certifications" testid="certifications-header" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Award;
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${cert.color}40`, backgroundColor: `${cert.color}12` }}
                  >
                    <Icon size={19} style={{ color: cert.color }} />
                  </div>
                  {cert.link && (
                    <ExternalLink size={14} className="mt-1 text-slate-600 transition-colors duration-300 group-hover:text-cyber" />
                  )}
                </div>
                <h3 className="mt-5 font-heading text-[15px] font-semibold leading-snug text-slate-100 transition-colors duration-300 group-hover:text-cyber">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400">{cert.issuer}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-slate-500">
                    <BadgeCheck size={11} style={{ color: cert.color }} />
                    {cert.issued.toUpperCase()}
                  </span>
                  {cert.credentialId && (
                    <span className="font-mono text-[10px] tracking-wider text-slate-600">ID: {cert.credentialId}</span>
                  )}
                </div>
              </>
            );

            const classes =
              "group flex h-full flex-col rounded-2xl border border-white/8 bg-[#0D1424]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyber/30";

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: EASE }}
                data-testid={`cert-card-${i}`}
              >
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className={classes} data-testid={`cert-link-${i}`}>
                    {inner}
                  </a>
                ) : (
                  <div className={classes}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
