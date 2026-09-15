import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { HERO_METRICS, PROFILE } from "@/data/portfolio";
import { EASE } from "./Reveal";

const LINES = ["Engineering systems,", "solving technical problems,", "turning data into decisions."];

function MaskedLine({ text, delay, accent }: { text: string; delay: number; accent?: boolean }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.08] ${
          accent ? "text-cyber" : "text-slate-50"
        }`}
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative min-h-screen overflow-hidden grid-lines pt-36 pb-20 px-4 sm:px-6 lg:px-8"
      data-testid="hero-section"
    >
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyber/10 blur-[140px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070A10]" />

      <motion.div style={{ y: contentY }} className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyber/25 bg-cyber/5 px-4 py-1.5"
              data-testid="hero-availability-badge"
            >
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-cyber">{PROFILE.availability}</span>
            </motion.div>

            <h1 data-testid="hero-headline">
              <MaskedLine text={LINES[0]} delay={0.3} />
              <MaskedLine text={LINES[1]} delay={0.45} />
              <MaskedLine text={LINES[2]} delay={0.6} accent />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
              className="mt-8 max-w-xl text-base leading-relaxed text-slate-400"
              data-testid="hero-subheading"
            >
              <span className="text-slate-200 font-medium">{PROFILE.name}</span> — BTech CSE student, former Technical
              Consultant Intern at <span className="text-slate-200">inMorphis</span> (ServiceNow) and SDE Intern at{" "}
              <span className="text-slate-200">Bluestock</span> (Django / REST APIs).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: EASE }}
              className="mt-6 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-500"
            >
              <MapPin size={13} className="text-cyber" />
              {PROFILE.location.toUpperCase()}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                data-testid="hero-cta-projects"
                className="group inline-flex items-center gap-2 rounded-full bg-cyber px-6 py-3 text-sm font-semibold text-[#05080E] transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,240,255,0.45)] hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyber/50 hover:text-cyber"
              >
                Get Contact Info
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-2xl border border-white/10 bg-[#0D1424]/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
              data-testid="hero-telemetry-hud"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Terminal size={13} className="text-cyber" />
                  SYSTEM_TELEMETRY.sh
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF4B6E]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
                </div>
              </div>
              <div className="px-5 pt-4 font-mono text-xs">
                <span className="text-mint">● ONLINE</span>
                <span className="text-slate-500"> // STATUS: SEEKING_INTERNSHIP</span>
                <span className="blink-cursor text-cyber">▌</span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-5">
                {HERO_METRICS.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.12, ease: EASE }}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-cyber/30"
                  >
                    <p className="font-heading text-2xl font-bold text-cyber">{m.value}</p>
                    <p className="mt-1.5 font-mono text-[10px] tracking-[0.14em] text-slate-300">{m.label}</p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-500">{m.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 hidden justify-center lg:flex"
        >
          <a href="#about" data-testid="hero-scroll-indicator" className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyber transition-colors">
            <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown size={14} />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
