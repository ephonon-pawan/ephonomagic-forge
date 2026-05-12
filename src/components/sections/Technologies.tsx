import { SectionHeader } from "./SectionHeader";

const techs = [
  "React", "Next.js", "Node.js", "Express.js", "TypeScript",
  "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Docker",
  "Kubernetes", "Firebase", "Redis", "Stripe", "Tailwind",
];

export function Technologies() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Trusted stack"
          title={<>Built with the <span className="text-gradient">tools teams ship with</span></>}
          subtitle="A modern, type-safe stack we've used in production across hundreds of products."
        />

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {techs.map((t) => (
            <div
              key={t}
              className="group glass rounded-2xl px-4 py-5 text-center hover:bg-white/[0.07] transition-colors relative overflow-hidden"
            >
              <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-display text-sm md:text-base font-medium">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
