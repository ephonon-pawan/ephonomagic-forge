import { createFileRoute } from "@tanstack/react-router";
import { Technologies } from "@/components/sections/Technologies";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/sections/SectionHeader";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Vue", "Svelte"] },
  { title: "Backend", items: ["Node.js", "Express.js", "NestJS", "Go", "Python", "GraphQL"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Clickhouse", "Supabase", "Firebase"] },
  { title: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { title: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { title: "Tooling", items: ["Stripe", "Vercel", "Sentry", "PostHog", "Datadog", "Linear"] },
];

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Ephonon Technology" },
      { name: "description", content: "The modern, type-safe, cloud-native stack Ephonon Technology uses to build production software." },
      { property: "og:title", content: "Technologies — Ephonon Technology" },
      { property: "og:description", content: "Our production-tested technology stack." },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <>
      <section className="pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Stack"
            title={<>The <span className="text-gradient">modern, type-safe stack</span> we ship with</>}
            subtitle="A focused toolkit refined across hundreds of production deployments."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Technologies />
      <CTA />
    </>
  );
}
