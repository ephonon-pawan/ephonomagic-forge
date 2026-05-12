import { SectionHeader } from "./SectionHeader";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, GitBranch, Rocket, Layers, Headphones, Sparkles } from "lucide-react";

const features = [
  { icon: Layers, title: "Scalable Architecture", desc: "Built to handle 10x growth without rewrites." },
  { icon: GitBranch, title: "Clean & Maintainable Code", desc: "Type-safe, tested, reviewed — engineered to last." },
  { icon: Rocket, title: "Agile Process", desc: "Weekly demos, transparent progress, fast iteration." },
  { icon: Sparkles, title: "High Performance", desc: "Sub-100ms responses and edge-ready by default." },
  { icon: ShieldCheck, title: "Secure Applications", desc: "OWASP-aligned, audited, and SOC2-friendly." },
  { icon: Headphones, title: "Dedicated Support", desc: "Long-term partnership, not just project delivery." },
];

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 9, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Active Support" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Ephonon"
          title={<>The engineering partner <span className="text-gradient">teams keep coming back to</span></>}
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-5xl font-semibold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
