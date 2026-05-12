import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ephonon Technology" },
      { name: "description", content: "Tell us about your product. Ephonon Technology replies within 24 hours with a path forward." },
      { property: "og:title", content: "Contact — Ephonon Technology" },
      { property: "og:description", content: "Start a project or book a consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build something</span></>}
          subtitle="Tell us about your product. We reply within 24 hours."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: Mail, label: "Email", value: "hello@ephonon.tech" },
              { icon: MessageSquare, label: "WhatsApp", value: "+1 (415) 555-0136" },
              { icon: MapPin, label: "HQ", value: "Remote-first · Worldwide" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary glow-primary shrink-0">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-1 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Jane Doe" />
              <Field label="Work email" type="email" placeholder="jane@company.com" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Company" placeholder="Acme Inc." />
              <Field label="Budget" placeholder="$25k – $100k" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                rows={5}
                placeholder="What are you building?"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:bg-white/[0.07] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:bg-white/[0.07] transition-colors"
      />
    </div>
  );
}
