import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, Activity, Code2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-muted-foreground">Engineering teams · SaaS · Enterprise</span>
              </span>

              <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
                Building <span className="text-gradient">scalable digital products</span> for modern businesses.
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
                Custom software, web applications, mobile apps and enterprise platforms engineered
                for performance, scalability and growth — by a senior product team you can trust.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary hover:opacity-95"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/5"
                >
                  <Play className="h-4 w-4" /> View Portfolio
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new projects
                </div>
                <div>250+ products shipped</div>
                <div className="hidden sm:block">98% client satisfaction</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-[3rem]" />
      <div className="relative glass-strong rounded-3xl p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-1.5 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[10px] uppercase tracking-widest text-muted-foreground">ephonon · console</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 glass rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5 text-primary" /> Monthly recurring</span>
              <span className="text-emerald-400">+24.8%</span>
            </div>
            <div className="mt-2 text-3xl font-display font-semibold">$184,210</div>
            <div className="mt-3 flex items-end gap-1 h-16">
              {[18,28,22,40,32,52,46,60,55,72,68,85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-accent/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-accent" /> Uptime
            </div>
            <div className="mt-2 text-2xl font-display font-semibold">99.99%</div>
            <div className="mt-3 flex items-center gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-5 w-1 rounded-sm bg-emerald-400/70" />
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Code2 className="h-3.5 w-3.5 text-primary" /> Deploys / wk
            </div>
            <div className="mt-2 text-2xl font-display font-semibold">42</div>
            <div className="mt-3 text-[11px] font-mono text-muted-foreground">
              <span className="text-emerald-400">●</span> main · 1m ago
            </div>
          </div>
        </div>
      </div>

      {/* Floating code card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -left-6 -bottom-8 hidden md:block"
      >
        <div className="glass-strong rounded-xl p-3 w-56 shadow-[var(--shadow-card)]">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">deploy.ts</div>
          <pre className="font-mono text-[11px] leading-relaxed text-foreground/80">
{`await ship({
  region: "global",
  scale: "auto",
  tier: "edge",
})`}
          </pre>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -right-4 top-8 hidden md:block"
      >
        <div className="glass-strong rounded-xl p-3 w-44">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">latency · p95</div>
          <div className="mt-1 text-xl font-display font-semibold text-gradient">38ms</div>
        </div>
      </motion.div>
    </div>
  );
}
