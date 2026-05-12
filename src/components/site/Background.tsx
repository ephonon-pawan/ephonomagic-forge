export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[oklch(0.62_0.24_295/0.18)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.2_240/0.18)] blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 -left-40 h-[400px] w-[600px] rounded-full bg-[oklch(0.62_0.24_295/0.12)] blur-3xl" />
    </div>
  );
}

export function FloatingContact() {
  return (
    <a
      href="https://wa.me/14155550136"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.2_240/0.7)] hover:scale-105 transition-transform"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      Chat with us
    </a>
  );
}
