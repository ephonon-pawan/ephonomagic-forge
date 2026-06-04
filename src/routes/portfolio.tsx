import { usePageMeta } from "@/hooks/usePageMeta";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function PortfolioPage() {
  usePageMeta("Portfolio — Ephonon Technology", "Selected products and platforms engineered by Ephonon Technology — ERP, CRM, LMS, e-commerce, HRMS and analytics.");
  return (
    <>
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
