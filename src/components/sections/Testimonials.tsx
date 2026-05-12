import { SectionHeader } from "./SectionHeader";
import { Star } from "lucide-react";

const items = [
  { name: "Sara Lindqvist", role: "VP Engineering · Northwind", avatar: "SL", text: "Ephonon rebuilt our core platform in months. Performance, code quality and ownership were all best-in-class." },
  { name: "Marco DeLuca", role: "CTO · Vault Commerce", avatar: "MD", text: "They feel like an extension of our team. Senior engineers, strong opinions, fast delivery — exactly what we needed." },
  { name: "Priya Raman", role: "Founder · Helix CRM", avatar: "PR", text: "From discovery to launch in 14 weeks. Our SaaS is now serving thousands of users with zero downtime." },
  { name: "Daniel Brooks", role: "Head of Product · Atlas", avatar: "DB", text: "The UX work alone moved our trial-to-paid conversion by 38%. Genuinely a partnership." },
  { name: "Aiko Tanaka", role: "Director · Lumen", avatar: "AT", text: "Clean architecture, thoughtful decisions and a team that cares about the product as much as we do." },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Loved by teams"
          title={<>What our clients <span className="text-gradient">say about us</span></>}
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary inline-flex items-center justify-center text-xs font-semibold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
