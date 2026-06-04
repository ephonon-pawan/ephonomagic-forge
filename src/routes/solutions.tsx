import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTA } from "@/components/sections/CTA";
import { Building2, ShoppingBag, GraduationCap, HeartPulse, Banknote, Truck, ArrowRight } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Enterprise Platforms", desc: "ERP, HRMS, internal tools and B2B portals built for scale and security." },
  { icon: ShoppingBag, title: "Commerce & Retail", desc: "Headless storefronts, marketplaces and POS — from MVP to omnichannel." },
  { icon: GraduationCap, title: "EdTech & LMS", desc: "Learning platforms with live classes, progress tracking and AI tutoring." },
  { icon: HeartPulse, title: "HealthTech", desc: "HIPAA-aware patient portals, telehealth and clinical workflow tools." },
  { icon: Banknote, title: "FinTech & Banking", desc: "Neobank apps, lending platforms, KYC and ledger systems." },
  { icon: Truck, title: "Logistics & SaaS", desc: "Fleet, warehouse and supply-chain platforms with real-time data." },
];

export default function SolutionsPage() {
  usePageMeta("Solutions — Ephonon Technology", "Industry solutions: enterprise, commerce, EdTech, HealthTech, FinTech and logistics platforms by Ephonon.");
  return (
    <>
      <section className="pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Solutions"
            title={<>Industry-shaped <span className="text-gradient">software platforms</span></>}
            subtitle="Pre-engineered architectures and patterns we adapt to your domain, brand and roadmap."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary glow-primary">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Talk to us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
