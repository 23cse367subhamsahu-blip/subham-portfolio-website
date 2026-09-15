import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const CONTACTS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail, testid: "contact-link-email", copyable: true },
  { label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, icon: Phone, testid: "contact-link-phone", copyable: true },
  { label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin, icon: Linkedin, testid: "contact-link-linkedin", copyable: false },
  { label: "GitHub", value: PROFILE.githubLabel, href: PROFILE.github, icon: Github, testid: "contact-link-github", copyable: false },
];

function ContactCard({ c, index }: { c: (typeof CONTACTS)[number]; index: number }) {
  const [copied, setCopied] = useState(false);
  const Icon = c.icon;

  const copy = async () => {
    await navigator.clipboard.writeText(c.value);
    setCopied(true);
    toast.success(`Copied ${c.value} to clipboard`);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Reveal delay={index * 0.08}>
      <div className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0D1424]/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyber/30">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyber/25 bg-cyber/8">
          <Icon size={18} className="text-cyber" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">{c.label.toUpperCase()}</p>
          <a
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            data-testid={c.testid}
            className="mt-1 block truncate text-sm font-medium text-slate-200 transition-colors hover:text-cyber"
          >
            {c.value}
          </a>
        </div>
        {c.copyable && (
          <button
            onClick={copy}
            aria-label={`Copy ${c.label}`}
            data-testid={`copy-${c.label.toLowerCase()}-button`}
            className="rounded-lg border border-white/10 p-2 text-slate-500 transition-all hover:border-cyber/40 hover:text-cyber"
          >
            {copied ? <Check size={14} className="text-mint" /> : <Copy size={14} />}
          </button>
        )}
      </div>
    </Reveal>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12" data-testid="contact-section">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyber/8 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyber mb-5">07 // TRANSMISSION</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-3xl font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-50">
            Let's build something{" "}
            <span className="text-cyber">extraordinary.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            Open to internship opportunities as a Software Engineer, Technical Support Engineer, or Data Analyst —
            remote or anywhere across India.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {CONTACTS.map((c, i) => (
            <ContactCard key={c.label} c={c} index={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-500">
            <MapPin size={13} className="text-cyber" />
            {PROFILE.location.toUpperCase()} · {PROFILE.domain.toUpperCase()}
          </div>
        </Reveal>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 pb-4 sm:flex-row sm:items-center" data-testid="site-footer">
          <p className="font-mono text-xs text-slate-500">© 2026 Subham Sahu. All systems nominal.</p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
            DESIGNED & ENGINEERED WITH REACT · TAILWIND · MOTION
          </p>
        </footer>
      </div>
    </section>
  );
}
