import { usePageMeta } from "@/hooks/usePageMeta";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function ServicesPage() {
  usePageMeta("Services — Ephonon Technology", "Custom software, web, mobile, SaaS, cloud and DevOps services from Ephonon Technology.");
  return (
    <>
      <section className="pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Services"
            title={<>Engineering services for <span className="text-gradient">every stage</span></>}
            subtitle="From green-field SaaS builds to modernizing legacy enterprise systems — we cover the full product lifecycle."
          />
        </div>
      </section>
      <Services heading={false} />
      <Process />
      <CTA />
    </>
  );
}
