import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ overline, title, testid }: { overline: string; title: string; testid: string }) {
  return (
    <div className="mb-14 md:mb-20" data-testid={testid}>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber mb-5">{overline}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-slate-50">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-cyber to-transparent" />
      </Reveal>
    </div>
  );
}

export { EASE };
