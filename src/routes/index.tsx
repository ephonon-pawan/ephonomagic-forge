import { usePageMeta } from "@/hooks/usePageMeta";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Index() {
  usePageMeta(
    "Ephonon Technology — Scalable Software, Web & SaaS",
    "Custom software, web apps, mobile apps and enterprise platforms engineered for scale by Ephonon Technology."
  );
  return (
    <>
      <Hero />
      <Technologies />
      <Services />
      <WhyUs />
      <Portfolio compact />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
