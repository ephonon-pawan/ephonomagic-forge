import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ephonon Technology" },
      { name: "description", content: "Selected products and platforms engineered by Ephonon Technology — ERP, CRM, LMS, e-commerce, HRMS and analytics." },
      { property: "og:title", content: "Portfolio — Ephonon Technology" },
      { property: "og:description", content: "Products and platforms we've shipped." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
