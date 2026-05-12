import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "Atlas ERP", category: "Enterprise", tags: ["React", "Node", "Postgres"], desc: "Unified ERP for a 1,200-person manufacturing group.", hue: "from-sky-500/30 to-violet-500/30" },
  { title: "Helix CRM", category: "SaaS", tags: ["Next.js", "GraphQL"], desc: "Pipeline & deal intelligence platform for B2B sales teams.", hue: "from-violet-500/30 to-fuchsia-500/30" },
  { title: "Lumen LMS", category: "Web Apps", tags: ["React", "AWS"], desc: "Learning platform serving 80k students globally.", hue: "from-emerald-500/25 to-sky-500/30" },
  { title: "Vault Commerce", category: "Web Apps", tags: ["Next.js", "Stripe"], desc: "Headless e-commerce for a luxury fashion label.", hue: "from-amber-500/25 to-rose-500/30" },
  { title: "Pulse HRMS", category: "Enterprise", tags: ["React Native", "Node"], desc: "End-to-end HR platform with payroll & engagement.", hue: "from-indigo-500/30 to-cyan-500/30" },
  { title: "Orbit Analytics", category: "SaaS", tags: ["TypeScript", "Clickhouse"], desc: "Real-time analytics dashboard for product teams.", hue: "from-fuchsia-500/30 to-sky-500/30" },
  { title: "Roam Travel", category: "Mobile Apps", tags: ["Flutter"], desc: "Itinerary & booking app with offline-first sync.", hue: "from-cyan-500/25 to-emerald-500/30" },
  { title: "Nimbus Banking", category: "Mobile Apps", tags: ["React Native"], desc: "Neobank app with cards, transfers and goals.", hue: "from-rose-500/25 to-violet-500/30" },
];

const filters = ["All", "Web Apps", "Mobile Apps", "SaaS", "Enterprise"] as const;

export function Portfolio({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = (filter === "All" ? items : items.filter((i) => i.category === filter))
    .slice(0, compact ? 6 : items.length);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Featured work"
          title={<>Products that ship and <span className="text-gradient">scale in production</span></>}
          subtitle="A selection of platforms we've designed, engineered and continue to evolve."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs rounded-full border transition-colors ${
                filter === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent"
                  : "border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((it) => (
            <div key={it.title} className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
              <div className={`relative h-44 bg-gradient-to-br ${it.hue} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-x-6 bottom-4 glass-strong rounded-xl p-3">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-6 rounded bg-white/10" />
                    <div className="h-6 rounded bg-white/15" />
                    <div className="h-6 rounded bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{it.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
