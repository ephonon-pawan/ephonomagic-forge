import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Technologies } from "@/components/sections/Technologies";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ephonon Technology — Scalable Software, Web & SaaS" },
      { name: "description", content: "Custom software, web apps, mobile apps and enterprise platforms engineered for scale by Ephonon Technology." },
    ],
  }),
  component: Index,
});

function Index() {
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
