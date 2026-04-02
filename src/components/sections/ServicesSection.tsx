import type { CSSProperties } from "react";

const filledIconStyle: CSSProperties = {
  fontVariationSettings: "'FILL' 1",
}

export default function ServiceSection() {
  return (
    <>
      <section className="relative bg-surface py-24">
        <div className="container mx-auto px-8">
          <div className="mb-20 text-center md:text-left">
            <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-container">
              Expertise
            </span>
            <h2 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="glass-card group relative col-span-1 flex min-h-[400px] flex-col justify-end overflow-hidden p-12 transition-all hover:bg-surface-container-low md:col-span-8">
              <div className="absolute left-12 top-12">
                <span
                  className="material-symbols-outlined text-5xl text-primary-container"
                  style={filledIconStyle}
                >
                  terminal
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="mb-4 font-headline text-3xl font-bold">
                  Custom Software
                </h3>
                <p className="max-w-md text-on-surface-variant">
                  Bespoke architecture designed for mission-critical operations.
                  We build scalable, secure, and robust systems tailored to your
                  unique ecosystem.
                </p>
              </div>
              <img
                className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-10 transition-opacity group-hover:opacity-20"
                alt="close-up of clean code on a monitor with neon blue and purple ambient lighting reflecting on glass surfaces"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZzBBZJdALr8BScV0vZl0yyh78DLRLxRtaBv23VFgfe01FmL5djfdw1E0d17bDBE28TBJutsJ_MFdRZxMjfiLnSpXV-00LUrNeET3z8TY256Gr0LlhW97bC9bYyo_Qt6_QxBU_SC0x5GhzOvML5m3gfCMIQkoHQQHTL9b5V_BxWpoy8d5sbdXPNkUvzTjVNt9bjcOS1TS62G7afwwAII1650txMFxy6MwwIw0VhsMIyQF7pSyApUzuaryZz5fx-wZ35ZK87J7s30Qs"
              />
            </div>

            <div className="glass-card group col-span-1 p-12 transition-all hover:bg-surface-container-low md:col-span-4">
              <div className="mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-primary-container"
                  style={filledIconStyle}
                >
                  psychology
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">
                AI &amp; Automation
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Leverage neural networks and robotic process automation to
                eliminate bottlenecks and predict future market shifts.
              </p>
            </div>

            <div className="glass-card col-span-1 p-12 transition-all hover:bg-surface-container-low md:col-span-4">
              <div className="mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-primary-container"
                  style={filledIconStyle}
                >
                  auto_awesome
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">
                Digital Transformation
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Modernize legacy frameworks and transition to cloud-native
                architectures without disrupting your core business flow.
              </p>
            </div>

            <div className="group col-span-1 flex items-center justify-between overflow-hidden bg-surface-container-lowest px-12 md:col-span-8">
              <div className="py-12">
                <h3 className="mb-2 font-headline text-2xl font-bold text-on-surface">
                  Ready to evolve?
                </h3>
                <p className="font-label text-sm uppercase tracking-widest text-outline">
                  Consultation Phase 01
                </p>
              </div>
              <span className="material-symbols-outlined text-6xl text-outline-variant transition-colors group-hover:text-primary">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
