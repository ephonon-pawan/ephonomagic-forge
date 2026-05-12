import { SectionHeader } from "./SectionHeader";
import { Link } from "@tanstack/react-router";
import {
  Code2, Globe, Smartphone, Boxes, Wrench, Plug, Cloud, Palette, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms engineered around your business logic and growth roadmap." },
  { icon: Globe, title: "Web Application Development", desc: "Fast, accessible, beautifully crafted web apps with modern frameworks." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feel iOS & Android apps built with React Native and Flutter." },
  { icon: Boxes, title: "SaaS Product Development", desc: "Multi-tenant SaaS platforms with billing, auth and analytics ready to ship." },
  { icon: Wrench, title: "Existing System Enhancement", desc: "Modernize legacy code, refactor for scale, ship features faster." },
  { icon: Plug, title: "API Development & Integration", desc: "REST & GraphQL APIs, third-party integrations, secure by design." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Kubernetes, CI/CD pipelines and observability that scales." },
  { icon: Palette, title: "UI / UX Design", desc: "Product design that converts — from research to polished interfaces." },
];

export function Services({ heading }: { heading?: boolean }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {heading !== false && (
          <SectionHeader
            eyebrow="What we do"
            title={<>End-to-end engineering for <span className="text-gradient">ambitious products</span></>}
            subtitle="From discovery to deployment — one senior team across design, engineering and DevOps."
          />
        )}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary glow-primary">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
