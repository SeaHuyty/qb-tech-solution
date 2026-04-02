export default function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-[#0e141a]/40"></div>
          <img
            className="h-full w-full object-cover opacity-30"
            alt="abstract digital network connection grid in deep space with glowing cyan light pulses and data stream particles"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv7shI6oseZQsD9AMpH5iuVmSoXs3pNoa8hUmGJMzigGb3Q84iOmxxbxBOql6VAghdYOJJd7aP9JlYvdG0cqeGYnfGrJah4Vx9Pq6cayunor2bVmPDoz4gaZPV8g0yZokTCg0QRMkQXOZxiKCVcLlu9IunkLo0uvkeIYstM90CdR1rLVhCqkgIBoTK3dBCM8igEjir0MB1447gVpXe2lOMTmgcvzlT3OBcn8MQLFf7Mv9W1ul9AXkeZE6Ey2uUO62lVRCJQEq0zqqg"
          />
        </div>

        <div className="container relative z-20 mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="mb-8 font-headline text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
              Bridging Today&apos;s Vision to{" "}
              <span className="text-gradient">Tomorrow&apos;s Technology</span>
            </h1>
            <p className="mb-12 max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">
              We architect cutting-edge software solutions that span the gap
              between conceptual innovation and industrial-scale digital
              reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-sm bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-label uppercase tracking-widest text-on-primary transition-all hover:opacity-90 active:scale-95">
                Explore Services
              </button>
              <button className="rounded-sm border border-outline-variant/40 bg-surface-container-low/20 px-8 py-4 font-label uppercase tracking-widest text-primary backdrop-blur-sm transition-all hover:border-outline-variant">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 hidden border-l border-outline-variant/20 py-4 pl-6 lg:block">
          <div className="mb-2 font-label text-[10px] uppercase tracking-[0.2em] text-outline">
            System Status
          </div>
          <div className="flex items-center gap-2 text-primary-fixed-dim">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container"></span>
            <span className="font-label text-xs uppercase tracking-widest">
              Active Neural Link
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
