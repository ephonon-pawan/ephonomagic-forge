import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote · Worldwide", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote · EU/US", type: "Full-time" },
  { title: "DevOps Engineer", team: "Platform", location: "Remote · Worldwide", type: "Full-time" },
  { title: "Mobile Engineer (React Native)", team: "Engineering", location: "Remote · Worldwide", type: "Contract" },
  { title: "Engineering Manager", team: "Leadership", location: "Hybrid · Berlin", type: "Full-time" },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Ephonon Technology" },
      { name: "description", content: "Join Ephonon Technology — work with senior engineers on meaningful, scalable products. Remote-friendly roles." },
      { property: "og:title", content: "Careers — Ephonon Technology" },
      { property: "og:description", content: "Open roles for engineers, designers and platform specialists." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <section className="pt-12 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Careers"
            title={<>Build the future of software <span className="text-gradient">with us</span></>}
            subtitle="We hire senior. We trust deeply. We ship work we're proud of."
          />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 space-y-3">
          {roles.map((r) => (
            <a
              key={r.title}
              href="#"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-3 glass rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
            >
              <div>
                <div className="font-display text-lg font-semibold">{r.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {r.team}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {r.location}</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">{r.type}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                Apply <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
