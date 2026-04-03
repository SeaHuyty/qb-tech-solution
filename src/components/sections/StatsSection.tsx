export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-outline-variant/30 to-transparent"></div>
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-container">
              Identity
            </span>
            <h2 className="mb-6 mt-4 font-headline text-4xl font-bold">
              Engineering the Future
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
              Founded at the intersection of quantum theory and practical
              software engineering, Quantum Bridge exists to solve the
              world&apos;s most complex digital challenges. We don&apos;t just
              build apps; we architect systems that stand the test of time and
              scale.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Since 2018
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-outline-variant/10 p-px shadow-2xl lg:w-1/2">
            <div className="group bg-surface p-12 text-center transition-colors hover:bg-surface-container-low">
              <div className="text-gradient mb-2 font-headline text-4xl font-bold md:text-5xl">
                150+
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-outline">
                Projects Delivered
              </div>
            </div>
            <div className="group bg-surface p-12 text-center transition-colors hover:bg-surface-container-low">
              <div className="text-gradient mb-2 font-headline text-4xl font-bold md:text-5xl">
                50+
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-outline">
                Global Clients
              </div>
            </div>
            <div className="group bg-surface p-12 text-center transition-colors hover:bg-surface-container-low">
              <div className="text-gradient mb-2 font-headline text-4xl font-bold md:text-5xl">
                99.9%
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-outline">
                Uptime Average
              </div>
            </div>
            <div className="group bg-surface p-12 text-center transition-colors hover:bg-surface-container-low">
              <div className="text-gradient mb-2 font-headline text-4xl font-bold md:text-5xl">
                24/7
              </div>
              <div className="font-label text-[10px] uppercase tracking-widest text-outline">
                Active Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
