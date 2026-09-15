import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { label: "About", href: "#about", testid: "nav-link-about" },
  { label: "Skills", href: "#skills", testid: "nav-link-skills" },
  { label: "Experience", href: "#experience", testid: "nav-link-experience" },
  { label: "Projects", href: "#projects", testid: "nav-link-projects" },
  { label: "Certifications", href: "#certifications", testid: "nav-link-certifications" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 inset-x-0 mx-auto w-[92%] max-w-5xl z-50 rounded-full border px-5 py-3 transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#070A10]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "border-white/5 bg-[#070A10]/40 backdrop-blur-md"
      }`}
      data-testid="main-nav"
    >
      <div className="flex items-center justify-between">
        <a href="#hero" className="font-mono text-xs sm:text-sm tracking-[0.2em] text-slate-200 hover:text-cyber transition-colors" data-testid="nav-brand">
          {PROFILE.brand}
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm text-slate-400 hover:text-cyber transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="nav-cta-button"
            className="hidden sm:inline-flex items-center rounded-full bg-cyber px-4 py-1.5 text-xs font-semibold text-[#05080E] transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,240,255,0.4)] hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <button
            className="lg:hidden text-slate-300 hover:text-cyber transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col gap-1 pt-4 pb-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`${l.testid}-mobile`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyber transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
