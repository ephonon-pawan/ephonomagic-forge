import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Sparkles, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary glow-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-semibold">Ephonon Technology</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Engineering scalable software, web, mobile and SaaS products for ambitious businesses worldwide.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2 glass rounded-xl p-1.5">
              <Mail className="ml-2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground py-2"
              />
              <button className="inline-flex items-center gap-1 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-medium text-primary-foreground">
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Custom Software</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Web & Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-foreground">SaaS Development</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@ephonon.tech</li>
              <li>+1 (415) 555-0136</li>
              <li>Remote-first · Worldwide</li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ephonon Technology. All rights reserved.</p>
          <p>Crafted with care for product teams worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
