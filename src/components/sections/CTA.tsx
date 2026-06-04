import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
          <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Let's build
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold leading-[1.1] max-w-3xl mx-auto">
              Have an idea? Let's build something <span className="text-gradient">amazing together.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Tell us about your product. We'll come back within 24 hours with a path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5">
                <Calendar className="h-4 w-4" /> Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
