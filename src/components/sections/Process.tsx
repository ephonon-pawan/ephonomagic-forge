import { SectionHeader } from "./SectionHeader";
import { Search, Map, PenTool, Code2, TestTube, Rocket, Wrench } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "Goals, users, constraints." },
  { icon: Map, title: "Planning", desc: "Roadmap, scope, milestones." },
  { icon: PenTool, title: "UI / UX Design", desc: "Wireframes to polished UI." },
  { icon: Code2, title: "Development", desc: "Iterative, test-driven build." },
  { icon: TestTube, title: "Testing", desc: "QA, perf, security audits." },
  { icon: Rocket, title: "Deployment", desc: "Cloud-native, zero-downtime." },
  { icon: Wrench, title: "Maintenance", desc: "Monitoring & continuous care." },
];

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="How we work"
          title={<>A proven process from <span className="text-gradient">idea to launch</span></>}
        />

        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl glass-strong glow-primary">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
                  <div className="mt-1 font-display font-semibold">{title}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
