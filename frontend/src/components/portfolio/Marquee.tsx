import { MARQUEE_ITEMS } from "@/data/portfolio";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-[#0A0E18] py-5" data-testid="skills-marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070A10] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070A10] to-transparent" />
      <div className="marquee-track flex w-max items-center gap-10">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-heading text-sm font-semibold tracking-[0.25em] text-slate-500 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-cyber/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
