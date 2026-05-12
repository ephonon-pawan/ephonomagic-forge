import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ephonon Technology" },
      { name: "description", content: "Ephonon Technology is a senior product engineering team building scalable software for ambitious companies." },
      { property: "og:title", content: "About — Ephonon Technology" },
      { property: "og:description", content: "A senior product engineering team for ambitious companies." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-12 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="About us"
            title={<>A senior team building <span className="text-gradient">software that lasts</span></>}
            subtitle="Ephonon Technology was founded with a simple belief — great products are built by small, accountable teams who care about craft."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { k: "Mission", v: "Help ambitious teams ship scalable, beautiful, profitable software." },
              { k: "Approach", v: "Senior engineers only. No hand-offs. Weekly demos. Honest timelines." },
              { k: "Outcome", v: "Products that ship on time, scale gracefully and earn user love." },
            ].map((c) => (
              <div key={c.k} className="glass rounded-2xl p-6">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.k}</div>
                <p className="mt-3 text-foreground/90">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
